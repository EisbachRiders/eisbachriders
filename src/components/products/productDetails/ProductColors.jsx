import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Colors from "../Colors"

export default function ProductColors({ data }) {
  const image = data.colorImage ? getImage(data.colorImage) : null
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
          flexBasis: { xs: "100%", md: "40%" },
          p: { xs: 2, md: 10 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Colors colors={data.color} variant="large" />
        <div>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: 36, lg: 48 },
              mb: 4,
            }}
          >
            Color Choice
          </Typography>
          <Typography sx={{ fontSize: 24 }}>{data.colorSubtitle}</Typography>
        </div>
      </Box>
      <Box sx={{ flexBasis: { xs: "100%", md: "60%" }, p: { xs: 2, md: 10 } }}>
        <Box sx={{ width: "100%", margin: "0 auto" }}>
          <GatsbyImage image={image} alt="colors" />
        </Box>
      </Box>
    </Box>
  )
}
