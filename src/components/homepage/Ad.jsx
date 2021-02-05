import React from "react"
import { Link } from "gatsby-theme-material-ui"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Container from "../ui/Container"

const useStyles = makeStyles(theme => ({
  link: {
    width: "100%",
  },
  img: {
    margin: "0 auto",
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   width: "100%",
    // },
  },
}))

function Ad() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "quickLockAD.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile: file(relativePath: { eq: "quickLockAD-mobile.png" }) {
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
      <Link to="/recycled-fins" className={classes.link}>
        <Hidden mdDown>
          <Img
            fluid={data.fileName.childImageSharp.fluid}
            alt="quick lock ad"
            placeholderStyle={{ backgroundColor: `white` }}
            className={classes.img}
            imgStyle={{ objectPosition: "center center" }}
          />
        </Hidden>
        <Hidden mdUp>
          <Img
            fluid={data.mobile.childImageSharp.fluid}
            alt="quick lock ad"
            placeholderStyle={{ backgroundColor: `white` }}
            className={classes.img}
            imgStyle={{ objectPosition: "center center" }}
          />
        </Hidden>
      </Link>
    </Container>
  )
}

export default Ad
