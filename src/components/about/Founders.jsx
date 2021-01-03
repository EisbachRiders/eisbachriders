import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Container from "../ui/Container"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
    },
  },
  header: {
    textTransform: "capitalize",
    width: "100%",
    fontFamily: "secondary",
    fontSize: 32,
    textAlign: "center",
    marginBottom: 0,
  },
  flexItem: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      flexBasis: "60%",
      padding: 30,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 60,
    },
  },
  img: {
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: "20%",
    },
  },
}))

function Founders() {
  const classes = useStyles()
  const { t } = useTranslation()
  const images = useStaticQuery(graphql`
    query {
      robin: file(relativePath: { eq: "robin.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      michi: file(relativePath: { eq: "michi.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <p className={classes.header}>{t("about.the_team")}</p>
      <div className={classes.container}>
        <Hidden smDown>
          <Img
            fluid={images.robin.childImageSharp.fluid}
            alt="wave"
            placeholderStyle={{ backgroundColor: `blue` }}
            className={classes.img}
            imgStyle={{ objectPosition: "center center" }}
          />
        </Hidden>
        <div className={classes.flexItem}>
          <p>{t("about.founders1")}</p>
          <p>{t("about.founders2")}</p>
          <p>{t("about.founders3")}</p>
        </div>
        <Hidden smDown>
          <Img
            fluid={images.michi.childImageSharp.fluid}
            alt="wave"
            placeholderStyle={{ backgroundColor: `blue` }}
            className={classes.img}
            imgStyle={{ objectPosition: "center center" }}
          />
        </Hidden>
      </div>
    </Container>
  )
}

export default Founders
