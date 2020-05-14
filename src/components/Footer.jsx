import React, { Fragment } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby-theme-material-ui"
import clsx from "clsx"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import Hidden from "@material-ui/core/Hidden"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer"
import ReplyIcon from "@material-ui/icons/Reply"
import LocalShippingIcon from "@material-ui/icons/LocalShipping"
import Newsletter from "./newsletter/Newsletter"
import Container from "./ui/Container"
import Contact from "./Contact"
import fullLogo from "../assets/logos/ER_full_black.svg"

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.color.white,
  },
  container: {
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
    },
  },
  title: {
    textTransform: "lowercase",
    fontSize: 16,
    letterSpacing: 3,
    marginBottom: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
  },
  text: {
    textTransform: "capitalize",
    color: theme.color.black,
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
    width: 150,
    marginBottom: 30,
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
  socialContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  iconSocial: {
    color: theme.color.black,
    width: 22,
    height: 22,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  iconContainer: {
    display: "flex",
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "30%",
    },
    [theme.breakpoints.up("sm")]: {
      flexBasis: "25%",
      justifyContent: "space-around",
    },
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 30,
    [theme.breakpoints.up("sm")]: {
      width: 24,
      height: 24,
    },
    [theme.breakpoints.up("md")]: {
      width: 32,
      height: 32,
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: 30,
      width: 42,
      height: 42,
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
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
  },
}))

function Footer() {
  const classes = useStyles()
  const { t } = useTranslation()
  const blog = ["lifestyle", "travel", "gear", "community"]
  const shop = ["rapid", "fins", "sup", "leashes", "accessories", "apparel"]
  const customerService = ["faq", "contact", "shipping", "returns"]
  const features = [
    {
      title: "emailSupport",
      icon: <QuestionAnswerIcon className={classes.icon} />,
    },
    {
      title: "30dayReturns",
      icon: <ReplyIcon className={classes.icon} />,
    },
    {
      title: "freeShipping",
      icon: <LocalShippingIcon className={classes.icon} />,
    },
  ]
  return (
    <footer className={classes.footer}>
      <Container justifyContent="spaceAround">
        {features.map((elem, idx) => (
          <div className={classes.iconContainer} key={`feature${idx}`}>
            {elem.icon}
            <div>
              <p className={classes.feature}>{t(`footer.${elem.title}`)}</p>
              <p className={classes.featureText}>
                {t(`footer.${elem.title}Text`)}
              </p>
            </div>
          </div>
        ))}
      </Container>

      <Newsletter />

      <Container alignItems="flexStart" className={classes.container}>
        <div className={classes.imgContainer}>
          <img src={fullLogo} alt="logo" className={classes.img} />
          <div className={classes.socialContainer}>
            <IconButton
              href="https://www.facebook.com/EisbachRiders/"
              aria-label="facebook"
              size="small"
            >
              <FacebookIcon className={classes.iconSocial} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/eisbachriders/"
              aria-label="instagram"
              size="small"
            >
              <InstagramIcon className={classes.iconSocial} />
            </IconButton>
            <IconButton
              href="https://www.pinterest.com/eisbachriders/"
              aria-label="pinterest"
              size="small"
            >
              <PinterestIcon className={classes.iconSocial} />
            </IconButton>
          </div>
        </div>
        <Hidden xsDown>
          <div className={classes.linksContainer}>
            <div className={classes.list}>
              <p className={classes.title}>{t("links.blog")}</p>
              {blog.map((elem, idx) => (
                <Link
                  key={`blog${idx}`}
                  to={`/tags/${elem}`}
                  className={clsx(classes.text, classes.link)}
                >
                  {t(`links.${elem}`)}
                </Link>
              ))}
            </div>
            <div className={classes.list}>
              <p className={classes.title}>{t("links.shop")}</p>
              {shop.map((elem, idx) => (
                <Link
                  key={`shop${idx}`}
                  to={`/${elem}`}
                  className={clsx(classes.text, classes.link)}
                >
                  {t(`links.${elem}`)}
                </Link>
              ))}
            </div>
            <div className={classes.list}>
              <p className={classes.title}>{t("links.customerService")}</p>
              {customerService.map((elem, idx) => (
                <Fragment key={`customerService${idx}`}>
                  {elem === "contact" ? (
                    <Contact variant="link" />
                  ) : (
                    <Link
                      to={`/${elem}`}
                      className={clsx(classes.text, classes.link)}
                    >
                      {t(`links.${elem}`)}
                    </Link>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </Hidden>
      </Container>

      <Container
        justifyContent="spaceBetween"
        background="black"
        alignItems="center"
        padding="none"
      >
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
        </div>
        <p className={clsx(classes.textSmall, classes.copyright)}>
          &copy; Eisbach Riders
        </p>
      </Container>
    </footer>
  )
}

export default Footer
