import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
  },
  container: {
    padding: "75px 30px 30px 30px",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      padding: "200px 0 60px 60px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  x: {
    fontSize: 24,
    fontWeight: 700,
    color: theme.color.white,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      fontSize: 36,
    },
  },
  title: {
    textTransform: "capitalize",
    fontSize: 24,
    fontWeight: 700,
    color: theme.color.white,
    marginBottom: 15,
    [theme.breakpoints.up("sm")]: {
      fontSize: 36,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 48,
    },
  },
  text: {
    fontSize: 16,
    color: theme.color.white,
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
  },
  img1: {
    height: 30,
    width: 55,
    [theme.breakpoints.up("sm")]: {
      height: 45,
      width: 75,
    },
  },
  img2: {
    height: 30,
    width: 90,
    [theme.breakpoints.up("md")]: {
      height: 45,
      width: 110,
    },
  },
}))

function Sustainability() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container>
      <div className={classes.root}>
        <StaticImage
          style={{
            gridArea: "1/1",
          }}
          layout="fullWidth"
          aspectRatio={3 / 1}
          alt="waves"
          placeholder="blurred"
          objectPosition="top"
          src="../../assets/websiteImages/waves.jpg"
          formats={["auto", "webp", "avif"]}
        />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "left",
            display: "grid",
          }}
        >
          <div className={classes.container}>
            <div className={classes.imageContainer}>
              <div className={classes.img1}>
                <StaticImage
                  alt="logo"
                  placeholder="blurred"
                  src="../../assets/logos/logo_white.svg"
                  formats={["auto", "webp", "avif"]}
                  layout="fullWidth"
                />
              </div>
              <p className={classes.x}>X</p>
              <div className={classes.img2}>
                <StaticImage
                  alt="1% for the planet"
                  placeholder="blurred"
                  src="../../assets/logos/onePercentForThePlanet.png"
                  formats={["auto", "webp", "avif"]}
                  layout="fullWidth"
                />
              </div>
            </div>
            <p className={classes.title}>{t("homepage.sustainable")}</p>
            <p className={classes.text}>{t("about.sustainability")}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Sustainability
