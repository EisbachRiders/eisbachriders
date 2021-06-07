import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Typography sx={{ fontSize: 24 }}>{children}</Typography>
    ),
  },
}

export default function ProductBundle({ data }) {
  const image = data.bundleImage ? getImage(data.bundleImage) : null
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: { xs: "wrap", md: "nowrap" },
        background: theme => theme.color.cream,
      }}
    >
      <Box
        sx={{
          flexBasis: { xs: "100%", md: "50%" },
          p: { xs: 2, md: 10 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 48, mb: 4 }}>
          Bundle
        </Typography>
        <Box>{renderRichText(data.bundleDescription, options)}</Box>
      </Box>
      <Box sx={{ flexBasis: { xs: "100%", md: "50%" }, p: { xs: 2, md: 10 } }}>
        <Box sx={{ width: "100%", margin: "0 auto" }}>
          <GatsbyImage image={image} alt="bundle" />
        </Box>
      </Box>
    </Box>
  )
}
