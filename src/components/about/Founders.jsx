import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
    },
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
    <Container justifyContent="spaceBetween" className={classes.container}>
      <Img
        fluid={images.robin.childImageSharp.fluid}
        alt="wave"
        placeholderStyle={{ backgroundColor: `blue` }}
        className={classes.img}
        imgStyle={{ objectPosition: "center center" }}
      />
      <Hidden mdUp>
        <Img
          fluid={images.michi.childImageSharp.fluid}
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
    </Container>
  )
}

export default Founders
