import React, { useState, Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"
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

function ProductsOverview() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [filter, setFilter] = useState("")

  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "street-art.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fins: wpgraphql {
        products(
          first: 30
          where: { category: "Fins", tagIn: "Eisbach Riders", tagNotIn: "sup" }
        ) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
            }
          }
        }
      }
      leashes: wpgraphql {
        products(where: { category: "Leashes", tagIn: "Eisbach Riders" }) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
            }
          }
        }
      }
      sup: wpgraphql {
        products(
          first: 30
          where: { category: "SUP", tagIn: "Eisbach Riders", tagNotIn: "leash" }
        ) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
            }
          }
        }
      }
      accessories: wpgraphql {
        products(
          first: 30
          where: { category: "Accessories", tagIn: "Eisbach Riders" }
        ) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
            }
          }
        }
      }
      apparel: wpgraphql {
        products(where: { category: "Apparel", tagIn: "Eisbach Riders" }) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
            }
          }
        }
      }
    }
  `)

  const categories = ["Fins", "Leashes", "SUP", "Accessories", "Apparel"]

  let dataset = []
  switch (filter) {
    case "Fins":
      dataset = data.fins.products.edges
      break
    case "Leashes":
      dataset = data.leashes.products.edges
      break
    case "SUP":
      dataset = data.sup.products.edges
      break
    case "Accessories":
      dataset = data.accessories.products.edges
      break
    case "Apparel":
      dataset = data.apparel.products.edges
      break
    default:
      dataset = [
        data.fins.products.edges,
        data.leashes.products.edges,
        data.sup.products.edges,
        data.accessories.products.edges,
        data.apparel.products.edges,
      ]
  }

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
          <h1 className={classes.h1}>{t("links.products")}</h1>
        </div>
      </div>
      <Container variant="center" className={classes.container}>
        <div className={classes.form}>
          <FormControl>
            <InputLabel htmlFor="category">Filter</InputLabel>
            <Select
              className={classes.select}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              inputProps={{
                name: "category",
                id: "category",
              }}
            >
              <MenuItem value="">
                <em>none</em>
              </MenuItem>
              {categories.map((elem) => (
                <MenuItem value={elem} key={`category ${elem}`}>
                  {elem}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {filter === "" && (
          <>
            {categories.map((elem, idx) => (
              <Fragment key={`section ${elem}`}>
                <Typography className={classes.header} variant="h2">
                  {elem}
                </Typography>
                <div className={classes.section}>{shopItems(dataset[idx])}</div>
              </Fragment>
            ))}
          </>
        )}
        {filter !== "" && (
          <>
            <Typography className={classes.header} variant="h2">
              {filter}
            </Typography>
            <div className={classes.section}>{shopItems(dataset)}</div>
          </>
        )}
      </Container>
    </>
  )
}

export default ProductsOverview
