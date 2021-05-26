import React from "react"
import Link from "../ui/Link"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Container from "../ui/Container"

const useStyles = makeStyles(theme => ({
  link: {
    width: "100%",
  },
  img: {
    width: "100%",
    margin: "0 auto",
  },
}))

function Ad() {
  const classes = useStyles()

  return (
    <Container>
      <Link to="/recycled-fins" className={classes.link}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <StaticImage
            src="../../assets/websiteImages/quickLockAD.png"
            alt="quick lock ad"
            placeholder="blurred"
            className={classes.img}
          />
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <StaticImage
            src="../../assets/websiteImages/quickLockAD-mobile.png"
            alt="quick lock ad"
            placeholder="blurred"
            className={classes.img}
          />
        </Box>
      </Link>
    </Container>
  )
}

export default Ad
