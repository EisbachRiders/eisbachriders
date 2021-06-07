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
        flexWrap: { xs: "wrap", sm: "nowrap" },
        background: theme => theme.color.cream,
      }}
    >
      <Box
        sx={{
          flexBasis: { xs: "100%", sm: "50%" },
          p: { xs: 4, md: 6, lg: 10 },
          pl: { xs: 4, md: 6, lg: 10 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ pl: { xs: 3, md: 8 }, pr: { xs: 3, md: 8 }, pt: 2 }}>
          <Colors colors={data.color} variant="large" />
        </Box>
        <div>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: 42, sm: 36, lg: 56 },
              mt: { xs: 0, md: 2 },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Color Choice
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 18, lg: 24 },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            {data.colorSubtitle}
          </Typography>
        </div>
      </Box>
      <Box
        sx={{
          flexBasis: { xs: "100%", sm: "50%" },
          pr: 0,
          pl: 0,
          pt: { xs: 0, sm: 4, md: 0 },
          pb: { xs: 0, sm: 4, md: 0 },
        }}
      >
        <Box sx={{ width: "100%", margin: "0 auto" }}>
          <GatsbyImage image={image} alt="colors" />
        </Box>
      </Box>
    </Box>
  )
}
