import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

export default function Feature({ data }) {
  const image = data.icon ? getImage(data.icon) : null

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flexBasis: "20%" }}>
        <Box
          sx={{
            width: { xs: 45, sm: 60, lg: 90 },
            mr: { xs: 2, md: 4 },
          }}
        >
          <GatsbyImage image={image} alt={data.title} quality="100" />
        </Box>
      </Box>
      <Box sx={{ flexBasis: "80%" }}>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: { xs: 18, sm: 24, lg: 32 },
            color: theme => theme.color.steel,
          }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            color: theme => theme.color.steel,
            fontSize: { xs: 14, md: 16 },
          }}
        >
          {data.subtitle}
        </Typography>
      </Box>
    </Box>
  )
}
