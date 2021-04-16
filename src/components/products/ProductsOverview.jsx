import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Link from "../ui/Link"
import Container from "../ui/Container"
import EssentialLine from "./EssentialLine"
// import SustainableLine from "./SustainableLine"
import Instagram from "../instagram/Instagram"

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 24,
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 8,
    height: 300,
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
      height: 600,
    },
  },
  marginBottom: {
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      marginBottom: 60,
    },
  },
  flex1: {
    flexBasis: "60%",
    border: "4px solid #fff",
  },
  flex2: {
    flexBasis: "40%",
    border: "4px solid #fff",
  },
  spacing: {
    marginBottom: 60,
  },
  img: {
    height: "100%",
  },
  box: {
    display: "grid",
    height: 300,
    [theme.breakpoints.up("lg")]: {
      height: 600,
    },
  },
  text: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 32,
    textTransform: "capitalize",
    margin: 0,
  },
  textContainer: {
    gridArea: "1/1",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 30,
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  button: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
    textTransform: "lowercase",
    padding: 0,
    justifyContent: "flex-start",
  },
}))

function ProductsOverview() {
  const classes = useStyles()
  const { t } = useTranslation()

  const data = [
    [
      {
        cat: "sup",
        img: (
          <StaticImage
            src="../../assets/websiteImages/sup-paddler-looking-over-lake.jpg"
            alt="sup at lake"
            style={{
              gridArea: "1/1",
            }}
          />
        ),
        link: "/products/sup-longboard-fins",
      },
      {
        cat: "fins",
        img: (
          <StaticImage
            src="../../assets/websiteImages/fiberglass-double-tab-fin-blue-held-up-at-beach-scotland.jpg"
            alt="fin on rocky beach"
            style={{
              gridArea: "1/1",
            }}
          />
        ),
        link: "/products/surfboard-fins",
      },
    ],
    [
      {
        cat: "accessories",
        img: (
          <StaticImage
            src="../../assets/websiteImages/wax-comb-peeling-wax-off-surfboard.jpg"
            alt="guy walking toward beach"
            style={{
              gridArea: "1/1",
            }}
          />
        ),
        link: "/products/accessories",
      },
      {
        cat: "leashes",
        img: (
          <StaticImage
            src="../../assets/websiteImages/person-putting-on-surfboard-leash.jpg"
            alt="surfboard leash"
            style={{
              gridArea: "1/1",
            }}
          />
        ),
        link: "/products/accessories",
      },
    ],
  ]
  return (
    <Container>
      {/* <SustainableLine /> */}
      <EssentialLine />
      <Typography className={classes.title}>
        {t("product.product-categories")}
      </Typography>
      <div className={classes.marginBottom}>
        {[0, 1].map(box => (
          <div className={classes.container} key={`container${box}`}>
            {data[box].map((elem, idx) => (
              <div
                className={
                  (box === 1 && idx === 0) | (box === 0 && idx === 1)
                    ? classes.flex1
                    : classes.flex2
                }
                key={`category${elem.cat}`}
              >
                <Link to={elem.link} className={classes.link}>
                  <div className={classes.box}>
                    {elem.img}
                    <div className={classes.textContainer}>
                      <p className={classes.text}>
                        {t(`shop.${elem.cat}Tagline`)}
                      </p>
                      <Button
                        className={classes.button}
                        alt="shop"
                        color="inherit"
                      >
                        {t(`shop.${elem.cat}`)}
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Typography className={classes.title}>#ridethewave</Typography>
      <Instagram />
    </Container>
  )
}

export default ProductsOverview
