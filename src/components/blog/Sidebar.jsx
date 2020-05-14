import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby-theme-material-ui"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import LatestPosts from "./LatestPosts"
import PopularPosts from "./PopularPosts"
import InstagramWidget from "../instagram/InstagramWidget"

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 30,
    marginBottom: 30,
    boxShadow: "0 0 70px rgba(0,0,0,.11)",
  },
  title: {
    textAlign: "center",
    fontSize: 14,
    textTransform: "lowercase",
    letterSpacing: 3,
    marginBottom: 30,
    fontFamily: "secondary",
  },
  img: { width: "75%", margin: "0 auto", marginBottom: 30 },
  text: {
    textAlign: "center",
  },
  link: {
    color: theme.palette.primary.main,
    paddingLeft: 5,
  },
}))

export default function Sidebar() {
  const classes = useStyles()
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "aboutUs.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Paper className={classes.paper} square elevation={0}>
        <p className={classes.title}>{t("common.about")}</p>
        <div className={classes.imgContainer}>
          <Img
            fluid={data.fileName.childImageSharp.fluid}
            alt="2 friends sitting together"
            placeholderStyle={{ backgroundColor: `blue` }}
            className={classes.img}
            imgStyle={{ objectPosition: "center center" }}
          />
        </div>
        <p className={classes.text}>
          {t("sidebar.about")}
          <Link to="/about" className={classes.link}>
            {t("common.more")}...
          </Link>
        </p>
      </Paper>

      {/* <Paper className={classes.paper} square elevation={0}>
        <p className={classes.title}>{t("common.subscribe")}</p>
      </Paper> */}

      <Paper className={classes.paper} square elevation={0}>
        <p className={classes.title}>{t("sidebar.latest")}</p>
        <LatestPosts />
      </Paper>

      <Paper className={classes.paper} square elevation={0}>
        <p className={classes.title}>{t("sidebar.popular")}</p>
        <PopularPosts />
      </Paper>

      <Paper className={classes.paper} square elevation={0}>
        <p className={classes.title}>Instagram</p>
        <InstagramWidget />
      </Paper>
    </>
  )
}
