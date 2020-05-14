import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import CircularProgress from "@material-ui/core/CircularProgress"
import RoomIcon from "@material-ui/icons/Room"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import Container from "../ui/Container"
import mapStyles from "./mapStyles.json"

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
}))

function EisbachMap() {
  const [map, setMap] = useState(null)
  const [center, setCenter] = useState({ lat: 48.134234, lng: 11.588486 })
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
    <Container variant="center" className={classes.container} background="gray">
      <p className={classes.header}>eisbach</p>
      <p className={classes.text}>{t("eisbach.about")}</p>
      <div className={classes.mapListContainer}>
        <div className={classes.mapContainer}>
          <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyCAyy3EDSCcrozc1uIYb3zL0XdBhK6oe-8"
            language={i18n.language}
            region="DE"
            loadingElement={<CircularProgress />}
          >
            <GoogleMap
              onLoad={(map) => setMap(map)}
              id="eisbach-locations"
              mapContainerStyle={{
                height: "100%",
                width: "100%",
              }}
              options={{
                styles: mapStyles,
                mapTypeControl: false,
                streetViewControl: false,
              }}
              zoom={12}
              center={center}
            >
              {locations.map((elem) => (
                <Marker
                  key={`marker${elem.name}`}
                  position={{ lat: elem.lat, lng: elem.lng }}
                  label={{
                    text: elem.name,
                    fontWeight: "normal",
                    fontSize: "14px",
                  }}
                ></Marker>
              ))}
            </GoogleMap>
          </LoadScript>
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
