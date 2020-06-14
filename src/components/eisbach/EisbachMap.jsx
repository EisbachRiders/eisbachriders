import React, { useState, useRef } from "react"
import GoogleMapReact from "google-map-react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import CircularProgress from "@material-ui/core/CircularProgress"
import RoomIcon from "@material-ui/icons/Room"
import Container from "../ui/Container"
import mapStyles from "./mapStyles.json"
import waveIcon from "../../assets/icons/surf.svg"

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    fontWeight: 700,
    width: "100%",
    fontFamily: "secondary",
    fontSize: 32,
    marginBottom: 15,
  },
  text: {
    marginBottom: 45,
  },
  mapListContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  mapContainer: {
    height: 400,
    width: "50%",
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
}))

const Marker = ({ children }) => children

function EisbachMap() {
  const mapRef = useRef()
  const [bounds, setBounds] = useState(null)
  const [zoom, setZoom] = useState(12)
  const [mapFilter, setMapFilter] = useState(false)
  const [center, setCenter] = useState({ lat: 48.12, lng: 11.59 })
  const classes = useStyles()
  const { i18n, t } = useTranslation()

  const locations = [
    {
      name: "E1",
      lat: 48.143521,
      lng: 11.587734,
      skill: t("eisbach.advanced"),
    },
    {
      name: "E2",
      lat: 48.14794,
      lng: 11.592334,
      skill: t("eisbach.intermediate"),
    },
    {
      name: "Floßländle",
      lat: 48.090327,
      lng: 11.545331,
      skill: t("eisbach.beginner"),
    },
  ]

  return (
    <Container
      variant="center"
      className={classes.container}
      background="grayLt"
    >
      <p className={classes.header}>eisbach</p>
      <p className={classes.text}>{t("eisbach.about")}</p>
      <div className={classes.mapListContainer}>
        <div className={classes.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GOOGLEMAPS,
            }}
            defaultCenter={{ lat: 48.134234, lng: 11.588486 }}
            defaultZoom={12}
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
                <img src={waveIcon} alt="marker" className={classes.icon} />
              </Marker>
            ))}
          </GoogleMapReact>
        </div>
        <List className={classes.root}>
          {locations.map((elem, idx) => (
            <ListItem key={`listItem${idx}`}>
              <ListItemAvatar>
                <Avatar>
                  <RoomIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={elem.name} secondary={elem.skill} />
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default EisbachMap
