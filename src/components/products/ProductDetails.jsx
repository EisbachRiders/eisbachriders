import React from "react"
import Box from "@material-ui/core/Box"
import ProductIntro from "./productDetails/ProductIntro"
import ProductFeatures from "./productDetails/ProductFeatures"

function ProductDetails({ product }) {
  return (
    <>
      <Box sx={{ mb: 10 }}>
        <ProductIntro data={product} />
      </Box>
      <Box sx={{ mb: 10 }}>
        <ProductFeatures data={product} />
      </Box>
    </>
  )
}

export default ProductDetails
