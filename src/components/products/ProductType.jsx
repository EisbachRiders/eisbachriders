import * as React from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "../ui/Container"
import Link from "../ui/Link"

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

function ProductType({ variant, fin, image }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Link to="/products/essential-line" className={classes.link}>
      <Container
        alignItems="center"
        justifyContent="spaceBetween"
        flexWrap="nowrap"
        className={classes.root}
      >
        <div className={classes.flexbox}>
          <Typography className={classes.title}>
            {variant} <br /> {fin} Fin
          </Typography>
          <Typography className={classes.text}>
            {t(`product.line-${variant.toLowerCase()}-${fin.toLowerCase()}`)}
          </Typography>
        </div>
        <div className={classes.flexbox}>
          <div className={classes.image}>
            <img src={image?.source} alt={image?.alt} className={classes.img} />
          </div>
        </div>
      </Container>
    </Link>
  )
}

export default ProductType
