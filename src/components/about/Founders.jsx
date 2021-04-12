import React from "react"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 100,
    marginBottom: 100,
  },
  textContainer: {
    paddingTop: 30,
  },
  flexItem: {
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "48%",
    },
  },
  title: {
    fontSize: 52,
    fontWeight: 700,
    marginTop: 15,
    marginBottom: 30,
  },
  logo: {
    width: 85,
  },
}))

function Founders() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container
      flexWrap="wrap"
      justifyContent="spaceBetween"
      className={classes.container}
    >
      <div className={clsx(classes.flexItem, classes.textContainer)}>
        <StaticImage
          src="../../assets/logos/logo.png"
          alt="logo"
          placeholder="blurred"
          className={classes.logo}
        />
        <p className={classes.title}>Eisbach Riders</p>
        <p className={classes.text}>{t("about.founders1")}</p>
        <p className={classes.text}>{t("about.founders2")}</p>
      </div>
      <StaticImage
        src="../../assets/websiteImages/founders.jpg"
        alt="founders"
        placeholder="blurred"
        className={classes.flexItem}
      />
    </Container>
  )
}

export default Founders
