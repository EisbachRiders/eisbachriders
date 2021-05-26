import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Link from "../../ui/Link"

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.color.cream,
    marginBottom: 30,
    [theme.breakpoints.up("xl")]: {
      width: 1440,
      padding: `30px 60px`,
      marginBottom: 60,
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    [theme.breakpoints.up("md")]: {
      fontSize: 52,
      marginBottom: 30,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 72,
      marginBottom: 30,
    },
  },
  text: {
    fontSize: 12,
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
  },
  flexbox: {
    flexBasis: "50%",
  },
  image: {
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%",
    },
  },
  img: {
    width: "100%",
  },
}))

function ProductType({ data }) {
  const classes = useStyles()
  const image = data.productDetailIntroImage
    ? getImage(data.productDetailIntroImage)
    : null

  return (
    <Link to="/products/essential-line" className={classes.link}>
      <Container
        alignItems="center"
        justifyContent="spaceBetween"
        flexWrap="nowrap"
        className={classes.root}
      >
        <div className={classes.flexbox}>
          <div
            dangerouslySetInnerHTML={{ __html: data.productDetailIntroTitle }}
          />
          <Typography className={classes.text}>
            {data.productDetailSubtitle}
          </Typography>
        </div>
        <div className={classes.flexbox}>
          <div className={classes.image}>
            <GatsbyImage image={image} alt={data.name} />
          </div>
        </div>
      </Container>
    </Link>
  )
}

export default ProductType
