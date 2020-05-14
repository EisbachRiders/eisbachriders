import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
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
  text: {
    color: theme.color.black,
    fontFamily: "secondary",
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
    textTransform: "capitalize",
    fontSize: 52,
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      fontSize: 48,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 58,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 100,
    },
  },
  subtitle: {
    textTransform: "lowercase",
    textAlign: "center",
    fontSize: 18,
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 34,
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
        <Typography
          variant="h1"
          gutterBottom
          className={clsx(classes.text, classes.title)}
        >
          <span className={classes.textBig}>E</span>isbach
        </Typography>
        <Typography
          variant="h1"
          gutterBottom
          className={clsx(classes.text, classes.title, classes.indent)}
        >
          <span className={classes.textBig}>R</span>iders
        </Typography>

        <Typography
          component="h2"
          className={clsx(classes.text, classes.subtitle)}
        >
          {t("homepage.heroSubtitle")}
        </Typography>
      </div>
    </div>
  )
}

export default Hero
