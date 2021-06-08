import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Typography
        sx={{
          fontSize: { xs: 16, lg: 24 },
          height: 24,
        }}
      >
        {children}
      </Typography>
    ),
  },
}

export default function ProductBundle({ data }) {
  const image = data.bundleImage ? getImage(data.bundleImage) : null
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: { xs: "wrap", lg: "nowrap" },
        background: theme => theme.color.cream,
        p: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          flexBasis: { xs: "100%", sm: "50%" },
          pl: { xs: 2, sm: 6, md: 10 },
          pr: { xs: 4, sm: 0, md: 10 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: 42, sm: 36, md: 52, lg: 72 },
            mb: { xs: 0, md: 4 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          Bundle
        </Typography>
        <Box>{renderRichText(data.bundleDescription, options)}</Box>
      </Box>
      <Box
        sx={{
          flexBasis: { xs: "100%", sm: "50%" },
          pl: { xs: 4, sm: 0, md: 0 },
          pr: { xs: 4, sm: 4, md: 10 },
        }}
      >
        <Box sx={{ width: "100%", margin: "0 auto" }}>
          <GatsbyImage image={image} alt="bundle" />
        </Box>
      </Box>
    </Box>
  )
}
