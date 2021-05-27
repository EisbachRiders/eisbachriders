import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import Link from "../ui/Link"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "../ui/Container"
import Contact from "../contact/Contact"
import faqData from "./faqData"
import HelpIcon from "@material-ui/icons/Help"

const useStyles = makeStyles(theme => ({
  headerContainer: {
    position: "relative",
    height: 150,
    [theme.breakpoints.up("md")]: {
      height: 200,
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
    },
  },
  backgroundContainer: {
    position: "absolute",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  backgroundImg: {
    width: "100%",
    height: 150,
    [theme.breakpoints.up("md")]: {
      height: 200,
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
    },
  },
  h1: {
    textAlign: "center",
    fontFamily: "secondary",
    textTransform: "capitalize",
    fontSize: 32,
    fontWeight: 500,
    letterSpacing: 3,
    color: "white",
    [theme.breakpoints.up("md")]: {
      fontSize: 50,
    },
  },
  h2: {
    fontFamily: "secondary",
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 32,
    fontWeight: 500,
    letterSpacing: 3,
    marginBottom: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 50,
    },
  },
  fullWidth: {
    width: "100%",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 60,
  },
  card: {
    flexBasis: "100%",
    display: "flex",
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "48%",
    },
  },
  icon: {
    color: theme.palette.primary.main,
    margin: "20px 15px 0 0",
  },
  question: {
    fontWeight: "bold",
  },
}))

function FrequentlyAskedQuestions() {
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  return (
    <>
      <div className={classes.headerContainer}>
        <StaticImage
          src="../../assets/websiteImages/person-putting-on-surfboard-leash.jpg"
          alt="surfer putting on leash"
          placeholder="blurred"
          className={classes.backgroundImg}
        />
        <div className={classes.backgroundContainer}>
          <h1 className={classes.h1}>{t("links.faq")}</h1>
        </div>
      </div>

      <Container
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        background="grayLt"
      >
        {Object.keys(faqData).map((elem, idx) => (
          <div key={`section${elem}`} className={classes.fullWidth}>
            <Typography variant="h5" component="h2" className={classes.h2}>
              {elem}
            </Typography>
            <div className={classes.container}>
              {faqData[elem].nav.map((item, idx) => (
                <div key={`faq_${elem}${idx}`} className={classes.card}>
                  <HelpIcon alt="help" className={classes.icon} />
                  <div>
                    <p className={classes.question}>
                      {t(`faq.${item.key}_question`)}
                    </p>
                    <p className={classes.answer}>
                      {t(`faq.${item.key}_answer`)}
                    </p>
                    {item.img_en && (
                      <img
                        src={item[`img_${i18n.language}`]}
                        alt={item.key}
                        className={classes.fullWidth}
                      />
                    )}
                    {item.button && (
                      <Contact variant="outlined" align="right" />
                    )}
                    {item.blog && (
                      <Link to={`/blog/${item.key}`}>{t("faq.learnMore")}</Link>
                    )}
                    {item.link && (
                      <Link to={`/${item.key}`}>{t("faq.learnMore")}</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </>
  )
}

export default FrequentlyAskedQuestions
