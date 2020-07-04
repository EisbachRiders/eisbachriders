import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"
import ShopItem from "./ShopItem"

const useStyles = makeStyles((theme) => ({
  h1: {
    textAlign: "center",
    fontFamily: "secondary",
    textTransform: "capitalize",
    fontSize: 32,
    fontWeight: 500,
    letterSpacing: 3,
    color: "white",
    [theme.breakpoints.up("md")]: {
      fontSize: 72,
    },
  },
  background: {
    position: "relative",
    height: 150,
    [theme.breakpoints.up("md")]: {
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
      height: 300,
    },
  },
  container: {
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    fontWeight: 700,
    width: "100%",
    fontFamily: "secondary",
    fontSize: 32,
    marginBottom: 15,
  },
  form: {
    textAlign: "right",
  },
  select: {
    width: 150,
  },
  section: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
}))

const multipleOfFour = (array) => {
  array.sort((a, b) => a.menu_order - b.menu_order)
  const len = array.length
  const remainder = len % 4
  if (remainder === 1) {
    array.push({})
  } else if (remainder === 2) {
    array.push({}, {})
  } else if (remainder === 3) {
    array.push({}, {}, {})
  }
  return array
}

function ProductsOverview({ products, category }) {
  const classes = useStyles()
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "street-art.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const shopItems = (value) => {
    const section = multipleOfFour(value)
    return section.map((elem, idx) => (
      <ShopItem product={elem.node} key={`fins${idx}`} />
    ))
  }

  return (
    <>
      <div className={classes.background}>
        <Img
          fluid={data.fileName.childImageSharp.fluid}
          alt="street art"
          placeholderStyle={{ backgroundColor: `blue` }}
          className={classes.backgroundImg}
          imgStyle={{ objectPosition: "center center" }}
        />
        <div className={classes.backgroundContainer}>
          <h1 className={classes.h1}>{category}</h1>
        </div>
      </div>
      <Container variant="center" className={classes.container}>
        <div className={classes.section}>{shopItems(products)}</div>
      </Container>
    </>
  )
}

export default ProductsOverview
