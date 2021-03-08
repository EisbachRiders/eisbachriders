import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Button from "@material-ui/core/Button"
import Container from "../ui/Container"
import BeerIcon from "../../assets/websiteImages/beer.svg"
import RecycleIcon from "../../assets/websiteImages/recycle-sign.svg"
import OnePercentIcon from "../../assets/websiteImages/1ftp_BusinessMember_Vertical_Black.png"
import Paper from "@material-ui/core/Paper"
import Timeline from "./Timeline"

const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
  },
  container: {
    marginBottom: 100,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
      flexWrap: "nowrap",
    },
    marginBottom: 100,
  },
  flexCenter: {
    alignItems: "center",
  },
  reverse: {
    flexDirection: "column-reverse",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  text: {
    [theme.breakpoints.up("sm")]: {
      flexBasis: "60%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 30,
    },
  },
  img: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%",
      height: 500,
    },
  },
  title: {
    textTransform: "uppercase",
    fontSize: 32,
    letterSpacing: 3,
    margin: 0,
    marginBottom: 10,
  },
  right: {
    textAlign: "right",
  },
  bottom: {
    marginBottom: 45,
  },
  paper: {
    backgroundColor: theme.palette.primary.dark,
    flexBasis: "100%",
    padding: 15,
    marginBottom: 30,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "30%",
      marginBottom: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 60,
    },
  },
  icon: {
    width: 100,
    height: 132,
    marginBottom: 15,
    [theme.breakpoints.up("sm")]: {
      marginBottom: 40,
    },
  },
  cardTitle: {
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: 700,
    margin: 0,
    [theme.breakpoints.up("lg")]: {
      fontSize: 28,
    },
  },
  question: {
    fontWeight: 700,
  },
}))

function RecycledFins() {
  const classes = useStyles()
  const { t } = useTranslation()
  const images = useStaticQuery(graphql`
    query {
      shape: file(
        relativePath: {
          eq: "eisbach-riders-quick-lock-touring-fin-paddling-on-the-bodensee.jpg"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      unsplash: file(relativePath: { eq: "kyle-hinkson-unsplash.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fileName: file(relativePath: { eq: "quickLockAD.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile: file(relativePath: { eq: "quickLockAD-mobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Hidden mdDown>
        <Img
          fluid={images.fileName.childImageSharp.fluid}
          alt="quick lock ad"
          placeholderStyle={{ backgroundColor: `white` }}
          className={classes.banner}
          imgStyle={{ objectPosition: "center center" }}
        />
      </Hidden>
      <Hidden mdUp>
        <Img
          fluid={images.mobile.childImageSharp.fluid}
          alt="quick lock ad"
          placeholderStyle={{ backgroundColor: `white` }}
          className={classes.banner}
          imgStyle={{ objectPosition: "center center" }}
        />
      </Hidden>
      <div className={clsx(classes.flex, classes.flexCenter, classes.reverse)}>
        <Img
          fluid={images.shape.childImageSharp.fluid}
          alt="sup fin"
          placeholderStyle={{ backgroundColor: `white` }}
          className={classes.img}
          imgStyle={{ objectPosition: "center center" }}
        />
        <div className={classes.text}>
          <div>
            <p className={classes.title}>{t("recycled.touringShape")}</p>
            <p>{t("recycled.touringShapeInfo")}</p>
            <p className={classes.bottom}>{t("recycled.touringStrokeInfo")}</p>
          </div>
          <div>
            <p className={clsx(classes.right, classes.title)}>
              {t("recycled.durability")}
            </p>
            <p className={clsx(classes.right, classes.bottom)}>
              {t("recycled.durabilityInfo")}
            </p>
          </div>
          <div>
            <p className={classes.title}>{t("recycled.compatible")}</p>
            <p className={classes.bottom}>{t("recycled.compatibleInfo")}</p>
          </div>
        </div>
      </div>

      <div className={classes.flex}>
        <Paper classes={{ root: classes.paper }}>
          <img src={BeerIcon} className={classes.icon} alt="germany icon" />
          <p className={classes.cardTitle}>{t("recycled.madeInGermany")}</p>
          <p className={classes.cardText}>{t("recycled.madeInGermanyInfo")}</p>
        </Paper>
        <Paper className={classes.paper}>
          <img
            src={OnePercentIcon}
            className={classes.icon}
            alt="1% for the planet logo"
          />
          <p className={classes.cardTitle}>{t("recycled.onePercentPlanet")}</p>
          <p className={classes.cardText}>
            {t("recycled.onePercentPlanetInfo")}
          </p>
        </Paper>
        <Paper className={classes.paper}>
          <img src={RecycleIcon} className={classes.icon} alt="recycle icon" />
          <p className={classes.cardTitle}>{t("recycled.recycling")}</p>
          <p className={classes.cardText}>{t("recycled.recyclingInfo")}</p>
        </Paper>
      </div>

      <div className={classes.flex}>
        <div className={classes.text}>
          <p className={classes.title}>{t("recycled.projectHistory")}</p>
          <p>{t("recycled.projectHistoryInfo1")}</p>
          <p>{t("recycled.projectHistoryInfo2")}</p>
          <p>{t("recycled.projectHistoryInfo3")}</p>
        </div>
        <Img
          fluid={images.unsplash.childImageSharp.fluid}
          alt="wave"
          placeholderStyle={{ backgroundColor: `blue` }}
          className={classes.img}
          imgStyle={{ objectPosition: "center center" }}
        />
      </div>

      <div className={classes.container}>
        <p className={classes.title}>{t("recycled.timeline")}</p>
        <p>{t("recycled.timelineInfo")}</p>
        <Timeline />
      </div>

      <div className={classes.container}>
        <p className={classes.title}>{t("links.faq")}</p>
        <p className={classes.question}>{t("recycled.faq1")}</p>
        <p>{t("recycled.faq1answer")}</p>
        <p className={classes.question}>{t("recycled.faq2")}</p>
        <p>{t("recycled.faq2answer")}</p>
        <p className={classes.question}>{t("recycled.faq3")}</p>
        <p>{t("recycled.faq3answer")}</p>
        <p className={classes.question}>{t("recycled.faq4")}</p>
        <p>{t("recycled.faq4answer")}</p>
        <p className={classes.question}>{t("recycled.faq5")}</p>
        <p>{t("recycled.faq5answer")}</p>
        <Button
          variant="contained"
          color="primary"
          href="https://secondwavesurfing.com/shop/product/sup-single-fin-us-box-touring/"
          rel="noopener"
          target="_blank"
        >
          {t("product.buy")}
        </Button>
        <p className={classes.question}>{t("recycled.faq6")}</p>
        <p>{t("recycled.faq6answer")}</p>
      </div>
    </Container>
  )
}

export default RecycledFins
