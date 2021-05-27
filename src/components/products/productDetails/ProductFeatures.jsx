import * as React from "react"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Link from "../../ui/Link"
import Feature from "./Feature"

export default function ProductFeatures({ data }) {
  return (
    <Link
      to="/products/essential-line"
      sx={{
        mb: 10,
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            background: theme => theme.color.cream,
            flexBasis: "50%",
            p: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 48, mb: 4 }}>
            Features
          </Typography>
          <Typography sx={{ fontSize: 24 }}>{data.featuresSubtitle}</Typography>
        </Box>
        <Box
          sx={{
            background: theme => theme.color.grayLt,
            flexBasis: "50%",
            p: 10,
          }}
        >
          {data.features?.map((elem, idx) => (
            <Box sx={{ mb: idx === data.features.length - 1 ? 0 : 2 }}>
              <Feature data={elem} />
            </Box>
          ))}
        </Box>
      </Box>
    </Link>
  )
}
