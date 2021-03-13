import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
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
        <Hidden mdDown>
          <StaticImage
            src="../../assets/websiteImages/quickLockAD.png"
            alt="quick lock ad"
            placeholder="blurred"
            className={classes.img}
          />
        </Hidden>
        <Hidden mdUp>
          <StaticImage
            src="../../assets/websiteImages/quickLockAD-mobile.png"
            alt="quick lock ad"
            placeholder="blurred"
            className={classes.img}
          />
        </Hidden>
      </Link>
    </Container>
  )
}

export default Ad
