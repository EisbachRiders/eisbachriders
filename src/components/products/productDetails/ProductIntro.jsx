import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Link from "../../ui/Link"

function ProductType({ data }) {
  const image = data.productDetailIntroImage
    ? getImage(data.productDetailIntroImage)
    : null

  return (
    <Link
      to="/products/essential-line"
      sx={{
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <Box sx={{ display: "flex", background: theme => theme.color.cream }}>
        <Box sx={{ p: 10, flexBasis: "50%" }}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.productDetailIntroTitle.raw.value,
            }}
          />
          <Typography sx={{ fontSize: 32, marginBottom: 10 }}>
            {data.productDetailIntroSubtitle}
          </Typography>
        </Box>
        <Box sx={{ p: 10, flexBasis: "50%" }}>
          <Box sx={{ width: "100%", margin: "0 auto" }}>
            <GatsbyImage image={image} alt={data.name} />
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default ProductType
