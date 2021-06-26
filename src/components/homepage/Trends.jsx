import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"
import Container from "../ui/Container"

const useStyles = makeStyles(theme => ({
  container: {
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  header: {
    marginBottom: 30,
    textTransform: "capitalize",
  },
  innerContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
    },
  },
  flexItem: {
    display: "grid",
    flexBasis: "100%",
    maxHeight: 600,
    position: "relative",
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "48%",
      marginBottom: 0,
    },
  },
  textContainer: {
    position: "absolute",
    bottom: "0%",
    left: "0%",
    padding: 30,
  },
  text: {
    color: theme.color.white,
    fontSize: 20,
    fontWeight: "bold",
  },
}))

function Trends() {
  const classes = useStyles()
  const { t } = useTranslation()

  const categories = [
    {
      cat: "sup",
      path: "sup-at-lake",
      href: "https://shop.eisbach-riders.com/product-category/sup/",
      img: (
        <StaticImage
          src="../../assets/websiteImages/sup-at-lake.jpg"
          alt="sup at like"
          style={{
            gridArea: "1/1",
          }}
        />
      ),
    },
    {
      cat: "rapidSurfing",
      path: "surfer-at-eisbach",
      href: "https://shop.eisbach-riders.com/product-category/rapid-surfing/",
      img: (
        <StaticImage
          src="../../assets/websiteImages/surfer-at-eisbach.jpg"
          alt="surfer at eisbach"
          style={{
            gridArea: "1/1",
          }}
        />
      ),
    },
  ]

  return (
    <Container className={classes.container}>
      <h2 className={classes.header}>{t("homepage.sport")}</h2>

      <div className={classes.innerContainer}>
        {categories.map((elem, idx) => (
          <div className={classes.flexItem} key={`trend${idx}`}>
            {elem.img}
            <div className={classes.textContainer}>
              <p className={classes.text}>{t(`shop.${elem.cat}Tagline`)}</p>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                {t(`shop.${elem.cat}`)}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Trends
