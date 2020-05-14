import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
// import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  img: {
    height: 300,
    width: 300,
  },
}))

function FeaturedProduct() {
  const classes = useStyles()
  // const { t } = useTranslation()
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "featured.jpg" }) {
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
      <Img
        fluid={data.fileName.childImageSharp.fluid}
        alt="featured product"
        placeholderStyle={{ backgroundColor: `blue` }}
        className={classes.img}
        imgStyle={{ objectPosition: "center center" }}
      />
    </Container>
  )
}

export default FeaturedProduct
