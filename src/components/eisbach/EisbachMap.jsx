import React, { useState, useRef, Fragment, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import GoogleMapReact from "google-map-react"
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grow from "@material-ui/core/Grow"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import TextField from "@material-ui/core/TextField"
import RoomIcon from "@material-ui/icons/Room"
import Divider from "@material-ui/core/Divider"
import ClearIcon from "@material-ui/icons/Clear"
import mapStyles from "./mapStyles.json"
import waveIcon from "../../assets/icons/surf.svg"
import waveIconSelected from "../../assets/icons/surfSelected.svg"
import allLocations from "./locations"

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    width: "100%",
    fontFamily: "secondary",
    textTransform: "capitalize",
    fontSize: 32,
    marginBottom: 30,
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 60,
  },
  mapContainer: {
    height: "80vh",
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "50%",
    },
  },
  mapListContainer: {
    height: "80vh",
    overflow: "scroll",
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "50%",
    },
  },
  infoWindow: {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
  },
  icon: {
    height: 32,
    width: 32,
  },

  listItem: {
    padding: 30,
  },
  listItemSelected: {
    padding: 30,
    backgroundColor: "rgba(0, 215, 162, .3)",
  },
  autocomplete: { flexBasis: "50%" },
  img: {
    width: 500,
    margin: "0 auto",
  },
  noResults: {
    width: "100%",
    textAlign: "center",
  },
  popper: {
    zIndex: 300,
    width: "50%",
  },
  paper: {
    width: "100%",
  },
  markerButton: {
    border: "none",
    background: "transparent",
    outline: "none",
    cursor: "pointer",
  },
}))

const Marker = ({ children }) => children

function EisbachMap() {
  const [locations, setLocations] = useState(allLocations)
  const [address, setAddress] = useState("")
  const mapRef = useRef()
  const [bounds, setBounds] = useState(null)
  const [selected, setSelected] = useState(null)
  const [zoom, setZoom] = useState(5)
  const [center, setCenter] = useState({ lat: 48.12, lng: 11.59 })
  const classes = useStyles()
  const { t } = useTranslation()
  const anchorRef = useRef(null)

  const img = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "finsLost.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (bounds) {
      let filteredList = allLocations.filter((elem) => {
        return (
          elem.lng >= bounds[0] &&
          elem.lng <= bounds[2] &&
          elem.lat >= bounds[1] &&
          elem.lat <= bounds[3]
        )
      })
      setLocations(filteredList)
    }
  }, [bounds])

  const handleIconButton = () => {
    setAddress("")
    setCenter({ lat: 48.12, lng: 11.59 })
  }

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setAddress(value)
    setCenter(latLng)
  }

  return (
    <>
      <div className={classes.searchContainer}>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className={classes.autocomplete}>
              <TextField
                className={classes.autocomplete}
                ref={anchorRef}
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="clear" onClick={handleIconButton}>
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                {...getInputProps({
                  placeholder: "Where is your next adventure!",
                })}
              />
              <Popper
                open={suggestions ? true : false}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                className={classes.popper}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper className={classes.paper}>
                      {loading ? <div>...loading</div> : null}
                      <MenuList
                        // autoFocusItem={open}
                        id="menu-list-grow"
                        style={{
                          display: suggestions.length === 0 ? "none" : "block",
                        }}
                      >
                        {suggestions.map((suggestion) => {
                          const style = {
                            backgroundColor: suggestion.active
                              ? "#f3f8fc"
                              : "#fff",
                            padding: 15,
                          }
                          return (
                            <MenuItem
                              {...getSuggestionItemProps(suggestion, {
                                style,
                              })}
                            >
                              {suggestion.description}
                            </MenuItem>
                          )
                        })}
                      </MenuList>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
      <div className={classes.container}>
        <div className={classes.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GOOGLEMAPS,
            }}
            defaultCenter={{ lat: 48.134234, lng: 11.588486 }}
            defaultZoom={5}
            zoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map }) => {
              mapRef.current = map
            }}
            language="de"
            region="DE"
            options={{
              styles: mapStyles,
              mapTypeControl: false,
              streetViewControl: false,
            }}
            center={center}
            onChange={({ zoom, bounds }) => {
              setZoom(zoom)
              setBounds([
                bounds.nw.lng,
                bounds.se.lat,
                bounds.se.lng,
                bounds.nw.lat,
              ])
            }}
          >
            {locations.map((elem, idx) => (
              <Marker key={`marker${idx}`} lat={elem.lat} lng={elem.lng}>
                <button
                  className={classes.markerButton}
                  onClick={() => setSelected(selected ? null : elem)}
                >
                  <img
                    src={
                      selected && selected.name === elem.name
                        ? waveIconSelected
                        : waveIcon
                    }
                    alt="marker"
                    className={classes.icon}
                  />
                </button>
              </Marker>
            ))}
          </GoogleMapReact>
        </div>
        <div className={classes.mapListContainer}>
          {locations.length > 0 && (
            <List className={classes.list}>
              {locations.map((elem, idx) => (
                <Fragment key={`listItem${idx}`}>
                  {idx !== 0 && <Divider />}
                  <ListItem
                    className={
                      selected && selected.name === elem.name
                        ? classes.listItemSelected
                        : classes.listItem
                    }
                    button
                    onClick={() => {
                      if (selected && selected.name === elem.name) {
                        setSelected(null)
                      } else {
                        setCenter({ lat: elem.lat, lng: elem.lng })
                        setZoom(9)
                        setSelected(elem)
                      }
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <RoomIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={elem.name}
                      secondary={t(`eisbach.${elem.skill}`)}
                    />
                    <p>{elem.technology}</p>
                  </ListItem>
                </Fragment>
              ))}
            </List>
          )}
          {locations.length === 0 && (
            <div>
              <Img
                fluid={img.fileName.childImageSharp.fluid}
                alt="lost fins"
                placeholderStyle={{ backgroundColor: `blue` }}
                className={classes.img}
                imgStyle={{ objectPosition: "center center" }}
              />
              <p className={classes.noResults}>{t("eisbach.noresults")}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default EisbachMap
