import React, { useState, useRef, Fragment, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import GoogleMapReact from "google-map-react"
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete"
import { Marker as MapMarker } from "react-map-gl"
import ReactMapGL from "react-map-gl"
import mapboxgl from "mapbox-gl"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/styles"
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
import Box from "@material-ui/core/Box"
import Autocomplete from "@material-ui/core/Autocomplete"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import parse from "autosuggest-highlight/parse"
import throttle from "lodash/throttle"

const useStyles = makeStyles(theme => ({
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
  markerButton: {
    border: "none",
    background: "transparent",
    outline: "none",
    cursor: "pointer",
  },
}))

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default

function loadScript(src, position, id) {
  if (!position) {
    return
  }

  const script = document.createElement("script")
  script.setAttribute("async", "")
  script.setAttribute("id", id)
  script.src = src
  position.appendChild(script)
}

const autocompleteService = { current: null }

const Marker = ({ children }) => children

function EisbachMap() {
  const [locations, setLocations] = useState(allLocations)
  const [address, setAddress] = useState("")
  const [bounds, setBounds] = useState(null)
  const [selected, setSelected] = useState(null)
  const classes = useStyles()
  const { t } = useTranslation()
  const [viewport, setViewport] = React.useState({
    latitude: 44.363942,
    longitude: -116.643542,
    zoom: 5,
  })

  const [value, setValue] = React.useState(null)
  const [inputValue, setInputValue] = React.useState("")
  const [options, setOptions] = React.useState([])
  const loaded = React.useRef(false)

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLEMAPS}&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      )
    }

    loaded.current = true
  }

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback)
      }, 200),
    []
  )

  React.useEffect(() => {
    let active = true

    var options = {
      types: ["(cities)"],
    }

    var input = document.getElementById("searchTextField")

    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService(input, options)
    }
    if (!autocompleteService.current) {
      return undefined
    }

    if (inputValue === "") {
      setOptions(value ? [value] : [])
      return undefined
    }

    fetch({ input: inputValue }, results => {
      if (active) {
        let newOptions = []

        if (value) {
          newOptions = [value]
        }

        if (results) {
          newOptions = [...newOptions, ...results]
        }

        setOptions(newOptions)
      }
    })

    return () => {
      active = false
    }
  }, [value, inputValue, fetch])

  // useEffect(() => {
  //   if (bounds) {
  //     let filteredList = allLocations.filter(elem => {
  //       return (
  //         elem.lng >= bounds[0] &&
  //         elem.lng <= bounds[2] &&
  //         elem.lat >= bounds[1] &&
  //         elem.lat <= bounds[3]
  //       )
  //     })
  //     setLocations(filteredList)
  //   }
  // }, [bounds])

  const handleIconButton = () => {
    setAddress("")
    setViewport({
      latitude: 44.363942,
      longitude: -116.643542,
      zoom: 5,
    })
    setLocations(allLocations)
  }

  const handleSelect = async value => {
    if (value) {
      const results = await geocodeByPlaceId(value.place_id)
      const latLng = await getLatLng(results[0])

      setViewport({
        latitude: latLng.lat,
        longitude: latLng.lng,
        zoom: 7,
      })

      let filteredLocations = allLocations.filter(
        elem =>
          elem.lat < latLng.lat + 1 &&
          elem.lat > latLng.lat - 1 &&
          elem.lng < latLng.lng + 1 &&
          elem.lng > latLng.lng - 1
      )

      setLocations(filteredLocations)
    } else {
      handleIconButton()
    }
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.mapContainer}>
          <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            mapboxApiAccessToken={process.env.GATSBY_MAPBOX}
            onViewportChange={viewport => setViewport(viewport)}
          >
            {locations.map((elem, idx) => (
              <MapMarker
                key={`marker${idx}`}
                latitude={parseFloat(elem.lat)}
                longitude={parseFloat(elem.lng)}
              >
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
              </MapMarker>
            ))}
          </ReactMapGL>
        </div>
        <div className={classes.mapListContainer}>
          <Autocomplete
            id="google-map-demo"
            sx={{ width: "100%" }}
            getOptionLabel={option =>
              typeof option === "string" ? option : option.description
            }
            filterOptions={x => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={(event, newValue) => {
              setOptions(newValue ? [newValue, ...options] : options)
              setValue(newValue)
              handleSelect(newValue)
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue)
            }}
            renderInput={params => (
              <TextField {...params} label="Find a Wave!" fullWidth />
            )}
            renderOption={(props, option) => {
              const matches =
                option.structured_formatting.main_text_matched_substrings
              const parts = parse(
                option.structured_formatting.main_text,
                matches.map(match => [
                  match.offset,
                  match.offset + match.length,
                ])
              )

              return (
                <li {...props}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Box
                        component={LocationOnIcon}
                        sx={{ color: "text.secondary", mr: 2 }}
                      />
                    </Grid>
                    <Grid item xs>
                      {parts.map((part, index) => (
                        <span
                          key={index}
                          style={{
                            fontWeight: part.highlight ? 700 : 400,
                          }}
                        >
                          {part.text}
                        </span>
                      ))}

                      <Typography variant="body2" color="text.secondary">
                        {option.structured_formatting.secondary_text}
                      </Typography>
                    </Grid>
                  </Grid>
                </li>
              )
            }}
          />
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
                  >
                    <ListItemAvatar
                      onClick={() => {
                        if (selected && selected.name === elem.name) {
                          setSelected(null)
                        } else {
                          setViewport({
                            latitude: elem.lat,
                            longitude: elem.lng,
                            zoom: 10,
                          })
                          setSelected(elem)
                        }
                      }}
                      sx={{ cursor: "pointer" }}
                    >
                      <Avatar>
                        <RoomIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={elem.name}
                      secondary={
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {`${elem.city}, ${elem.country}`}
                          </Typography>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {t(`eisbach.${elem.skill}`)}
                          </Typography>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {`Open: ${elem.open}`}
                          </Typography>
                          {elem.website !== "" && (
                            <Typography
                              href={elem.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              component="a"
                              variant="body2"
                              sx={{
                                color: theme => theme.palette.primary.main,
                              }}
                            >
                              website
                            </Typography>
                          )}
                        </Box>
                      }
                    />
                    <p>{elem.technology}</p>
                  </ListItem>
                </Fragment>
              ))}
            </List>
          )}
          {locations.length === 0 && (
            <div>
              <StaticImage
                src="../../assets/websiteImages/finsLost.png"
                alt="lost fins"
                placeholder="blurred"
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
