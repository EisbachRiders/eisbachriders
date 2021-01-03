import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    height: "100vh - 98px",
  },
  container: {
    position: "absolute",
    top: "70%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      top: "40%",
      left: "70%",
      transform: "translate(-50%, -50%)",
      width: "fit-content",
    },
    [theme.breakpoints.up("lg")]: {
      top: "50%",
      left: "70%",
      transform: "translate(-50%, -50%)",
      padding: 30,
      width: "fit-content",
      textAlign: "center",
    },
  },
  img: {
    height: "100vh",
    marginTop: -98,
  },
  textBig: {
    [theme.breakpoints.up("sm")]: {
      fontSize: 72,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 85,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 150,
    },
  },
  indent: {
    [theme.breakpoints.up("xs")]: {
      marginLeft: 60,
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: 60,
    },
  },
  title: {
    fontFamily: "secondary",
    fontWeight: 300,
    margin: 0,
    lineHeight: "1.167",
    letterSpacing: 2,
    textTransform: "capitalize",
    fontSize: 52,
    marginBottom: 0,
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      fontSize: 48,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 100,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 150,
    },
  },
  subtitle: {
    fontFamily: "secondary",
    textTransform: "lowercase",
    textAlign: "center",
    letterSpacing: 2,
    fontSize: 18,
    margin: 0,
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 42,
    },
  },
}))

function Hero() {
  const classes = useStyles()
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <Img
        fluid={data.fileName.childImageSharp.fluid}
        alt="wave"
        placeholderStyle={{ backgroundColor: `blue` }}
        className={classes.img}
        imgStyle={{ objectPosition: "center center" }}
      />
      <div className={classes.container}>
        <h1 className={classes.title}>
          Eisbach
          <br />
          <span className={classes.indent}>Riders</span>
        </h1>
        <p className={classes.subtitle}>{t("homepage.heroSubtitle")}</p>
      </div>
    </div>
  )
}

export default Hero
