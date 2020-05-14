import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel"
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import Container from "../ui/Container"
import Contact from "../Contact"
import faqData from "./faqData"

const useStyles = makeStyles((theme) => ({
  banner: {
    height: 300,
    position: "relative",
  },
  bannerImg: {
    width: "100%",
    height: "100%",
  },
  header: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(255,255,255,.8)",
    padding: "30px 60px",
  },
  flexItem: {
    flexBasis: "100%",
    height: 700,
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "48%",
    },
  },
  sectionTitle: {
    fontFamily: "secondary",
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
  },
  img: {
    width: "100%",
  },
}))

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel)

const ExpansionPanelSummary = withStyles((theme) => ({
  root: {
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
}))(MuiExpansionPanelSummary)

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: 30,
    paddingLeft: 60,
    display: "flex",
    flexDirection: "column",
  },
}))(MuiExpansionPanelDetails)

function FrequentlyAskedQuestions() {
  const [expanded, setExpanded] = useState(null)
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  const data = useStaticQuery(graphql`
    query {
      fileName: file(
        relativePath: { eq: "person-putting-on-surfboard-leash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className={classes.banner}>
        <Img
          alt={`surfers sitting in water`}
          fluid={data.fileName.childImageSharp.fluid}
          placeholderStyle={{ backgroundColor: `blue` }}
          className={classes.bannerImg}
          imgStyle={{ objectPosition: "center center" }}
        />
        <h1 className={classes.header}>FAQ</h1>
      </div>

      <Container
        justifyContent="spaceBetween"
        alignItems="center"
        background="gray"
      >
        {Object.keys(faqData).map((elem) => (
          <div key={`section${elem}`} className={classes.flexItem}>
            <Typography
              variant="h5"
              component="h2"
              className={classes.sectionTitle}
            >
              {elem}
            </Typography>
            <div className={classes.expansionPanelContainer}>
              {faqData[elem].nav.map((item, idx) => (
                <ExpansionPanel
                  key={`faq_${elem}${idx}`}
                  square
                  expanded={expanded === `panel${elem}${idx}`}
                  onChange={handleChange(`panel${elem}${idx}`)}
                  href={`#${elem}/${item.key}`}
                >
                  <ExpansionPanelSummary
                    aria-controls={`panel${elem}${idx}d-content`}
                    id={`panel${elem}${idx}d-header`}
                  >
                    <Typography className={classes.title}>
                      {t(`faq.${item.key}_question`)}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <>
                      <p>{t(`faq.${item.key}_answer`)}</p>
                      {item.img_en && (
                        <img
                          src={item[`img_${i18n.language}`]}
                          alt={item.key}
                          className={classes.img}
                        />
                      )}
                      {item.button && <Contact />}
                      {item.blog && (
                        <Link to={`/blog/${item.key}`}>
                          {t("faq.learnMore")}
                        </Link>
                      )}
                      {item.link && (
                        <Link to={`/${item.key}`}>{t("faq.learnMore")}</Link>
                      )}
                    </>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </>
  )
}

export default FrequentlyAskedQuestions
