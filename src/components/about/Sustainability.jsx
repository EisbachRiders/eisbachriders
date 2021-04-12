import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    height: 600,
  },
  container: {
    width: "50%",
    padding: "200px 0 0 60px",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  x: {
    fontSize: 48,
    fontWeight: 700,
    color: theme.color.white,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 0,
  },
  title: {
    textTransform: "capitalize",
    fontSize: 48,
    fontWeight: 700,
    color: theme.color.white,
    marginBottom: 15,
  },
  text: {
    fontSize: 24,
    color: theme.color.white,
  },
  img1: {
    height: 75,
    width: 105,
  },
  img2: {
    height: 75,
    width: 170,
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
            maxHeight: 600,
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
