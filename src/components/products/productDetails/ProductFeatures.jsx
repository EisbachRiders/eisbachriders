import * as React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Feature from "./Feature"

export default function ProductFeatures({ data }) {
  return (
    <Box sx={{ display: "flex", flexWrap: { xs: "wrap", md: "nowrap" } }}>
      <Box
        sx={{
          background: theme => theme.color.cream,
          flexBasis: { xs: "100%", sm: "40%", md: "50%" },
          p: { xs: 2, md: 10 },
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
          Features
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 16, md: 24 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {data.featuresSubtitle}
        </Typography>
      </Box>
      <Box
        sx={{
          background: theme => theme.color.grayLt,
          flexBasis: { xs: "100%", sm: "60%", md: "50%" },
          p: { xs: 2, md: 10 },
        }}
      >
        {data.features?.map((elem, idx) => (
          <Box sx={{ mb: idx === data.features.length - 1 ? 0 : 2 }}>
            <Feature data={elem} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
