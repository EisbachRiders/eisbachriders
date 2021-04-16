import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "../ui/Container"

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.color.blueGray,
    marginBottom: 60,
  },
  title: {
    writingMode: "vertical-lr",
    textOrientation: "mixed",
    fontSize: 32,
    marginBottom: 10,
    [theme.breakpoints.up("md")]: {
      fontSize: 52,
      marginBottom: 30,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 72,
      marginBottom: 30,
    },
  },
  text: {
    fontSize: 12,
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
  },
  flexbox1: {
    flexBasis: "30%",
  },
  flexbox2: {
    flexBasis: "60%",
  },
  flexbox3: {
    flexBasis: "10%",
  },
  image: {
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%",
    },
  },
}))

function SustainableLine() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <Container
        alignItems="center"
        justifyContent="spaceBetween"
        flexWrap="nowrap"
      >
        <div className={classes.flexbox1}>
          <StaticImage
            src="../../assets/websiteImages/quick-lock-touring-transparent.png"
            alt="sustainable quick lock fin"
            placeholder="blurred"
          />
        </div>
        <div className={classes.flexbox2}>
          <div className={classes.image}>
            <StaticImage
              src="../../assets/websiteImages/sup-paddler-looking-over-lake.jpg"
              alt="sup paddler looking at lake"
              placeholder="blurred"
            />
          </div>
        </div>
        <div className={classes.flexbox3}>
          <Typography className={classes.title}>Sustainable</Typography>
        </div>
      </Container>
    </div>
  )
}

export default SustainableLine
