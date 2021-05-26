import React from "react"
import Link from "../ui/Link"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Colors from "./Colors"

function ShopItem({ product }) {
  const image = product?.mainImage ? getImage(product.mainImage) : null

  return (
    <Box
      sx={{
        flexBasis: { xs: "100%", sm: "50%", md: "22%" },
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginBottom: 4,
      }}
    >
      {product && (
        <>
          {image && (
            <Link to={`/products/${product.slug}`}>
              <GatsbyImage image={image} alt={product.name} />
            </Link>
          )}
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                marginBottom: 1,
                fontSize: 14,
                fontWeight: 300,
                textTransform: "capitalize",
                textAlign: "center",
                width: "100%",
              }}
            >
              {product.name}
            </Typography>
            {product.color && <Colors colors={product.color} />}
          </Box>
        </>
      )}
    </Box>
  )
}

export default ShopItem
