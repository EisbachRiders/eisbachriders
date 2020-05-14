import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
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
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: 700,
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
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "aboutHero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
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
        <p className={classes.title}>{t("about.about")}</p>
        <p className={classes.title2}>{t("about.tagline")}</p>
        <p>{t("about.content")}</p>
      </div>
    </div>
  )
}

export default AboutHero
