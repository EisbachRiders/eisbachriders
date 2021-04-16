import React, { Fragment } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"
import EssentialLine from "./EssentialLine"
import ShopItem from "./ShopItem"

const useStyles = makeStyles(theme => ({
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
    marginBottom: 60,
  },
  subcat: {
    position: "relative",
  },
  divider1: {
    position: "absolute",
    background: theme.palette.primary.main,
    right: 0,
    top: 0,
    width: "90%",
    height: 2,
  },
  divider2: {
    position: "absolute",
    background: theme.palette.primary.main,
    left: 0,
    top: 61,
    width: "40%",
    height: 2,
  },
  subcatText: {
    textTransform: "uppercase",
    marginLeft: "20%",
    fontSize: 18,
  },
}))

const multipleOfFour = array => {
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

  const shopItems = value => {
    const section = multipleOfFour(value)
    return section.map((elem, idx) => (
      <ShopItem product={elem.node} key={`fins${idx}`} />
    ))
  }

  let subcat = []
  switch (category) {
    case "surfboard-fins":
      subcat = [
        "essential line",
        "fiberglass",
        "fiberglass honeycomb",
        "rapid surfing",
      ]
      break
    case "sup-longboard-fins":
      subcat = ["essential line", "fiberglass", "sustainable"]
      break
    default:
      subcat = []
  }

  return (
    <>
      <div className={classes.background}>
        <StaticImage
          src="../../assets/websiteImages/street-art.jpg"
          alt="street art"
          placeholder="blurred"
          className={classes.backgroundImg}
        />
        <div className={classes.backgroundContainer}>
          <h1 className={classes.h1}>{t(`product.${category}`)}</h1>
        </div>
      </div>
      <Container variant="center" className={classes.container}>
        {/* {subcat.length === 0 ? ( */}
        <div className={classes.section}>
          {shopItems(
            products.sort((a, b) =>
              a.node
                ? a.node.name.localeCompare(b.node ? b.node.name : null)
                : null
            )
          )}
        </div>
        {/* ) : (
          <>
            {subcat.map(elem => (
              <Fragment key={`subcategory_${elem}`}>
                <div className={classes.subcat}>
                  <div className={classes.divider1} />
                  <p className={classes.subcatText}>{elem}</p>
                  <div className={classes.divider2} />
                </div>
                {
                  <div className={classes.section}>
                    {shopItems(
                      products
                        .filter(item =>
                          item.node.productTags.edges
                            .map(el => el.node.name)
                            .includes(elem)
                        )
                        .sort((a, b) => a.node.name.localeCompare(b.node.name))
                    )}
                  </div>
                } 
              </Fragment>
            ))}
          </>
        )}*/}
      </Container>
    </>
  )
}

export default ProductsOverview
