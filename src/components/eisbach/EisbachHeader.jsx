import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    height: 150,
    [theme.breakpoints.up("md")]: {
      height: 200,
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
    },
  },
  backgroundContainer: {
    position: "absolute",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  backgroundImg: {
    width: "100%",
    height: 150,
    [theme.breakpoints.up("md")]: {
      height: 200,
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
    },
  },
  h1: {
    textAlign: "center",
    fontFamily: "secondary",
    textTransform: "capitalize",
    fontSize: 32,
    fontWeight: 500,
    letterSpacing: 3,
    color: "white",
    [theme.breakpoints.up("md")]: {
      fontSize: 50,
    },
  },
}))

function EisbachHeader() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <StaticImage
        src="../../assets/websiteImages/street-art.jpg"
        alt="street art"
        placeholder="blurred"
        className={classes.backgroundImg}
      />
      <div className={classes.backgroundContainer}>
        <h1 className={classes.h1}>{t("eisbach.localConditions")}</h1>
      </div>
    </div>
  )
}

export default EisbachHeader
