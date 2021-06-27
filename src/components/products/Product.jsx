import * as React from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import ProductIntro from "./productDetails/ProductIntro"
import ProductFeatures from "./productDetails/ProductFeatures"
import ProductColors from "./productDetails/ProductColors"
import ProductBundle from "./productDetails/ProductBundle"
import ProductLifestyle from "./productDetails/ProductLifestyle"

function Product({ product }) {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"))
  console.log(product)
  return (
    <Container disableGutters={isMobile}>
      {product.title && (
        <Box sx={{ mb: { xs: 4, md: 10 } }}>
          <ProductIntro data={product} />
        </Box>
      )}
      {product.features && (
        <Box sx={{ mb: { xs: 4, md: 10 } }}>
          <ProductFeatures data={product} />
        </Box>
      )}
      {product.bundleDescription && (
        <Box sx={{ mb: { xs: 4, md: 10 } }}>
          <ProductBundle data={product} />
        </Box>
      )}
      {product.colorSubtitle && (
        <Box sx={{ mb: { xs: 4, md: 10 } }}>
          <ProductColors data={product} />
        </Box>
      )}
      {product.lifestyleImageSmall && (
        <Box sx={{ mb: { xs: 4, md: 10 } }}>
          <ProductLifestyle data={product} />
        </Box>
      )}
    </Container>
  )
}

export default Product
