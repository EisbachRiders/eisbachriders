import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      position: "relative",
    },
  },
  img: {
    height: 200,
    marginBottom: 30,
    [theme.breakpoints.up("sm")]: {
      height: 400,
      marginBottom: 0,
    },
  },
  container: {
    background: theme.color.white,
    padding: 15,
    textAlign: "center",
    boxShadow: "0 0 70px rgba(0,0,0,.11)",
    width: "90%",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      position: "absolute",
      top: "70%",
      left: "50%",
      transform: "translate(-50%, -70%)",
    },
    [theme.breakpoints.up("lg")]: {
      width: 700,
      top: "50%",
      left: "30%",
      transform: "translate(-50%, -50%)",
      padding: 30,
    },
  },
  title: {
    textTransform: "capitalize",
    fontFamily: "secondary",
    color: theme.palette.primary.main,
    fontSize: 32,
    letterSpacing: 3,
    margin: 0,
    marginBottom: 10,
  },
  title2: {
    textTransform: "uppercase",
    fontWeight: 700,
    margin: 0,
    marginBottom: 10,
  },
}))

function AboutHero() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <StaticImage
        src="../../assets/websiteImages/aboutHero.jpg"
        alt="wave"
        placeholder="blurred"
        className={classes.img}
      />
    </div>
  )
}

export default AboutHero
