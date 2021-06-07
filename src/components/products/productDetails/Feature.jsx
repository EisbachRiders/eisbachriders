import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

export default function Feature({ data }) {
  const image = data.icon ? getImage(data.icon) : null

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: { xs: 60, md: 90 },
          // maxWidth: { xs: 60, md: 90 },
          mr: { xs: 2, md: 4 },
        }}
      >
        <GatsbyImage image={image} alt={data.title} quality="100" />
      </Box>
      <div>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontSize: { xs: 24, md: 32 },
            color: theme => theme.color.steel,
          }}
        >
          {data.title}
        </Typography>
        <Typography sx={{ color: theme => theme.color.steel }}>
          {data.subtitle}
        </Typography>
      </div>
    </Box>
  )
}
