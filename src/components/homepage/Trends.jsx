import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  img: {
    width: "100%",
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
    flexBasis: "100%",
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

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "shopCategory" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const categories = [
    {
      cat: "sup",
      path: "sup-at-lake",
      href: "https://shop.eisbach-riders.com/product-category/sup/",
    },
    {
      cat: "rapidSurfing",
      path: "surfer-at-eisbach",
      href: "https://shop.eisbach-riders.com/product-category/rapid-surfing/",
    },
  ]

  return (
    <Container className={classes.container}>
      <h2 className={classes.header}>{t("homepage.sport")}</h2>

      <div className={classes.innerContainer}>
        {categories.map((elem, idx) => (
          <div className={classes.flexItem}>
            <Img
              fluid={
                data.allFile.edges.find(
                  (img) =>
                    img.node.childImageSharp.fluid.originalName ===
                    `${elem.path}.jpg`
                ).node.childImageSharp.fluid
              }
              alt="brands"
              placeholderStyle={{ backgroundColor: `white` }}
              className={classes.img}
              imgStyle={{ objectPosition: "center center" }}
            />
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
