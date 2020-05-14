import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.up("lg")]: {
      marginBottom: 30,
    },
  },
  box: {
    position: "relative",
    textAlign: "center",
    background: theme.color.black,
  },
  boxBig: {
    flexBasis: "100%",
    marginBottom: 30,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "48%",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "48%",
    },
  },
  boxSmall: {
    flexBasis: "100%",
    marginBottom: 30,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "48%",
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "22%",
    },
  },
  img: {
    width: "100%",
    opacity: 0.8,
  },
  imgBig: {
    height: 200,
    [theme.breakpoints.up("lg")]: {
      height: 300,
    },
  },
  imgSmall: {
    height: 200,
  },
  textbox: {
    position: "absolute",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  text: {
    color: theme.color.white,
    fontSize: 18,
    fontWeight: 600,
    marginTop: 0,
    marginBottom: 5,
  },
  title: {
    textTransform: "capitalize",
  },
  subtitle: {
    textTransform: "uppercase",
    letterSpacing: 3,
    marginBottom: 25,
  },
  button: {
    borderColor: theme.color.white,
  },
}))

function ShopCategories() {
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
  const big = [
    { cat: "sup", path: "sup-on-lake-bavaria" },
    { cat: "rapidSurfing", path: "surfer-at-eisbach" },
  ]
  const small = [
    { cat: "fins", path: "fiberglass-single-tab-on-rocks-at-beach" },
    { cat: "leashes", path: "surfer-putting-on-blue-leash-at-beach" },
    { cat: "apparel", path: "girl-sitting-at-lake" },
    { cat: "accessories", path: "surfboards-hanging-on-wall" },
  ]
  const boxes = [big, small]

  return (
    <Container>
      {boxes.map((box, idx) => (
        <div className={classes.container} key={`box${idx}`}>
          {box.map((elem) => (
            <div
              className={clsx(
                classes.box,
                idx === 0 ? classes.boxBig : classes.boxSmall
              )}
              key={`category${elem.cat}`}
            >
              <Img
                fluid={
                  data.allFile.edges.find(
                    (img) =>
                      img.node.childImageSharp.fluid.originalName ===
                      `${elem.path}.jpg`
                  ).node.childImageSharp.fluid
                }
                alt={elem.path}
                className={clsx(
                  classes.img,
                  idx === 0 ? classes.imgBig : classes.imgSmall
                )}
                imgStyle={{ objectPosition: "center center" }}
              />
              <div className={classes.textbox}>
                <p className={clsx(classes.text, classes.title)}>
                  {t(`shop.${elem.cat}`)}
                </p>
                <p className={clsx(classes.text, classes.subtitle)}>
                  {t(`shop.${elem.cat}Tagline`)}
                </p>
                <Button variant="contained" className={classes.button}>
                  {t("shop.viewCollection")}
                </Button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </Container>
  )
}

export default ShopCategories
