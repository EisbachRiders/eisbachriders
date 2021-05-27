import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

export default function Feature({ data }) {
  const image = data.icon ? getImage(data.icon) : null

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: 50, mr: 4 }}>
        <GatsbyImage image={image} alt={data.title} />
      </Box>
      <div>
        <Typography sx={{ textTransform: "capitalize", fontSize: 32 }}>
          {data.title}
        </Typography>
        <Typography>{data.subtitle}</Typography>
      </div>
    </Box>
  )
}
