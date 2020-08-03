import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Colors from "./Colors"

const useStyles = makeStyles((theme) => ({
  root: {
    flexBasis: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginBottom: 30,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "22%",
    },
  },
  img: {
    width: "100%",
  },
  descriptionContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  name: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 300,
    textTransform: "capitalize",
    textAlign: "center",
    width: "100%",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 14,
    marginBottom: 5,
  },
  red: {
    color: theme.color.red,
    textTransform: "capitalize",
  },
}))

function ShopItem({ product }) {
  const classes = useStyles()
  let colors =
    product === undefined
      ? []
      : product.paColors.edges.map((elem) => elem.node.name)

  return (
    <div className={classes.root}>
      {product && (
        <>
          <Link to={`/products/${product.slug}`}>
            <img
              src={product.image.sourceUrl}
              className={classes.img}
              alt={product.image.slug || product.name}
            />
          </Link>
          <div className={classes.descriptionContainer}>
            <Typography className={classes.name}>{product.name}</Typography>
            {colors.length > 1 && <Colors colors={colors} variant="small" />}
          </div>
        </>
      )}
    </div>
  )
}

export default ShopItem
