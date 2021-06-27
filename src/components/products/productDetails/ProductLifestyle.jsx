import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

export default function ProductLifestyle({ data }) {
  const breakpointUp = useMediaQuery(theme => theme.breakpoints.up("sm"))
  const imageSm = data.lifestyleImageSmall
    ? getImage(data.lifestyleImageSmall)
    : null
  const imageLg = data.lifestyleImageBig
    ? getImage(data.lifestyleImageBig)
    : null

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        background: theme => theme.color.blueGray,
        p: { xs: 4, md: 5, lg: 10 },
      }}
    >
      {breakpointUp && (
        <Box
          sx={{
            flexBasis: { xs: "100%", sm: "30%" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flexBasis: "90%",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <GatsbyImage image={imageSm} alt="bundle" />
          </Box>
        </Box>
      )}
      <Box
        sx={{
          flexBasis: { xs: "80%", sm: "50%" },
        }}
      >
        <Box sx={{ width: "100%", margin: "0 auto" }}>
          <GatsbyImage image={imageLg} alt="bundle" />
        </Box>
      </Box>
      <Typography
        sx={{
          writingMode: "vertical-lr",
          transform: "scale(-1)",
          fontWeight: 700,
          fontSize: 36,
          textAlign: "center",
        }}
      >
        Ride the Wave
      </Typography>
    </Box>
  )
}
