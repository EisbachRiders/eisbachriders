import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ProductType from "./ProductType"

const useStyles = makeStyles(theme => ({}))

function ProductDetails({ variant, fin, images }) {
  const classes = useStyles()

  return (
    <>
      <ProductType variant={variant} fin={fin} image={images[0]} />
    </>
  )
}

export default ProductDetails
