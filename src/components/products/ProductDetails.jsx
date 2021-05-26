import React from "react"
import ProductIntro from "./productDetails/ProductIntro"

function ProductDetails({ product }) {
  return (
    <>
      <ProductIntro data={product} />
    </>
  )
}

export default ProductDetails
