import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Link from "../ui/Link"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles"
import { useTranslation } from "react-i18next"
import Container from "../ui/Container"

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: 30,
    textTransform: "capitalize",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.up("lg")]: {
      marginBottom: 30,
    },
  },
  box: {
    display: "grid",
    flexBasis: "100%",
    height: 400,
    marginBottom: 30,
    [theme.breakpoints.up("lg")]: {
      flexBasis: "48%",
      marginBottom: 60,
      height: 550,
    },
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
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
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}))

function ShopCategories() {
  const classes = useStyles()
  const { t } = useTranslation()

  const small = [
    [
      {
        cat: "Surf Fins",
        img: (
          <StaticImage
            src="../../assets/websiteImages/recycled-plastic-single-tab-surf-fin.png"
            alt="fin on rocky beach"
            style={{
              gridArea: "1/1",
            }}
          />
        ),
        href: "https://shop.eisbach-riders.com/product-category/fins/",
        link: "/products",
      },
      {
        cat: "SUP Fins",
        img: (
          <StaticImage
            src="../../assets/websiteImages/sup-paddler-looking-over-lake.jpg"
            alt="sup at lake"
            style={{
              gridArea: "1/1",
            }}
          />
        ),
        href: "https://shop.eisbach-riders.com/product-category/fins/",
        link: "/products",
      },
    ],
  ]

  return (
    <Container>
      <h2 className={classes.header}>{t("homepage.category")}</h2>
      {small.map((box, idx) => (
        <div className={classes.container} key={`box${idx}`}>
          {box.map(elem => (
            <div className={classes.box} key={`category${elem.cat}`}>
              {elem.img}
              <div className={classes.textContainer}>
                {/* <p className={classes.text}>{t(`shop.${elem.cat}Tagline`)}</p> */}
                <Link to={elem.link} className={classes.link}>
                  <Button
                    className={classes.button}
                    alt="shop"
                    variant="contained"
                    color="primary"
                  >
                    {elem.cat}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}
    </Container>
  )
}

export default ShopCategories
