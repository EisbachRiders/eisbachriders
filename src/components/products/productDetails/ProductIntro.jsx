import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Link from "../../ui/Link"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Typography sx={{ fontSize: 72, fontWeight: 700 }}>{children}</Typography>
    ),
  },
}

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
      {data.productDetailIntroTitle && (
        <Box sx={{ display: "flex", background: theme => theme.color.cream }}>
          <Box sx={{ flexBasis: "50%", pt: 20, pb: 15, pl: 10 }}>
            <Box sx={{ mb: 3 }}>
              {renderRichText(data.productDetailIntroTitle, options)}
            </Box>
            <Typography sx={{ fontSize: 24, mb: 3 }}>
              {data.productDetailIntroSubtitle}
            </Typography>
          </Box>

          <Box sx={{ p: 10, flexBasis: "50%" }}>
            <Box sx={{ width: "100%", margin: "0 auto" }}>
              <GatsbyImage image={image} alt={data.name} />
            </Box>
          </Box>
        </Box>
      )}
    </Link>
  )
}

export default ProductType
