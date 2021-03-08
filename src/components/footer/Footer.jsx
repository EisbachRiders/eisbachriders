import React from "react"
import { useTranslation } from "react-i18next"
import Link from "../ui/Link"
import clsx from "clsx"
import { makeStyles } from "@material-ui/styles"
import Hidden from "@material-ui/core/Hidden"
import Newsletter from "./newsletter/Newsletter"
import Container from "./ui/Container"
import Contact from "./Contact"
import { StaticImage } from "gatsby-plugin-image"
import logo from "../assets/logos/logo_white.svg"

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "column",
  },
  title: {
    textTransform: "capitalize",
    letterSpacing: 3,
    marginBottom: 15,
    color: theme.color.white,
    fontWeight: 600,
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
  },
  text: {
    textTransform: "capitalize",
    color: theme.color.white,
    letterSpacing: 2,
    marginBottom: 15,
    fontSize: 12,
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  copyrightContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    color: theme.color.white,
    paddingTop: 10,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 0,
    },
  },
  textSmall: {
    color: theme.color.white,
    fontSize: 12,
    textTransform: "capitalize",
    letterSpacing: 2,
    fontWeight: 500,
    padding: "0 10px",
    width: "49%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: 75,
    color: theme.color.white,
  },
  linksContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    margin: "0 15px",
    [theme.breakpoints.up("md")]: {
      margin: "0 45px",
    },
  },
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
  },
  feature: {
    fontSize: 16,
    letterSpacing: 3,
    marginTop: 0,
    marginBottom: 5,
    [theme.breakpoints.up("sm")]: {
      fontSize: 13,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 22,
    },
  },
  featureText: {
    marginTop: 0,
    color: theme.color.textLight,
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
  },
  copyright: {
    width: "100%",
    marginTop: 0,
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  logo: {
    fontFamily: "secondary",
    color: theme.color.white,
    margin: 0,
    fontSize: 62,
    paddingLeft: 30,
    paddingRight: 30,
  },
  image: {
    marginBottom: 30,
  },
}))

function Footer() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <footer className={classes.footer}>
      <Newsletter />

      {/* <Container alignItems="center" background="blackLt">
        <div className={classes.imgContainer}>
          <img src={fullLogo} alt="logo" className={classes.img} />
        </div>
      </Container> */}

      <Container
        justifyContent="center"
        background="black"
        alignItems="center"
        padding="none"
        className={classes.container}
      >
        <div className={classes.logoContainer}>
          <p className={classes.logo}>Eisbach</p>
          <img src={logo} alt="logo" className={classes.img} />
          <p className={classes.logo}>Riders</p>
        </div>

        <StaticImage
          src="../../assets/websiteImages/1ftp_BusinessMember_Horizontal_White.png"
          alt="1% for the planet"
          placeholder="blurred"
          layout="fixed"
          width={150}
          className={classes.image}
        />

        <div className={classes.copyrightContainer}>
          <Link
            to="/dataProtection"
            className={clsx(classes.textSmall, classes.link)}
          >
            {t("links.data")}
          </Link>
          |
          <Link
            to="/termsAndConditions"
            className={clsx(classes.textSmall, classes.link)}
          >
            {t("links.terms")}
          </Link>
          <Hidden smDown>|</Hidden>
          <Link to="/imprint" className={clsx(classes.textSmall, classes.link)}>
            {t("links.imprint")}
          </Link>
          |
          <Link to="/credit" className={clsx(classes.textSmall, classes.link)}>
            {t("links.credit")}
          </Link>
          |
          <Link to="/faq" className={clsx(classes.textSmall, classes.link)}>
            {t("links.faq")}
          </Link>
          |
          <Link
            to="/stockist"
            className={clsx(classes.textSmall, classes.link)}
          >
            Stockist
          </Link>
          |
          <Contact variant="link" />
        </div>

        <p className={clsx(classes.textSmall, classes.copyright)}>
          &copy; Eisbach Riders
        </p>
      </Container>
    </footer>
  )
}

export default Footer
