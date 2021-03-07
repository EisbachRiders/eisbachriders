import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby-theme-material-ui"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: 30,
    textTransform: "capitalize",
  },
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
    marginTop: 0,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: 700,
  },
  subtitle: {
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 3,
    marginBottom: 25,
  },
  textContainer: {
    position: "absolute",
    bottom: "0%",
    left: "0%",
    padding: 30,
    textAlign: "left",
  },

  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
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

  const small = [
    [
      {
        cat: "fins",
        path: "fiberglass-single-tab-on-rocks-at-beach",
        href: "https://shop.eisbach-riders.com/product-category/fins/",
        link: "/products/surfboard-fins",
      },
      {
        cat: "leashes",
        path: "surfer-putting-on-blue-leash-at-beach",
        href: "https://shop.eisbach-riders.com/product-category/leashes/",
        link: "/products/leashes",
      },
      {
        cat: "apparel",
        path: "girl-sitting-at-lake",
        href: "https://shop.eisbach-riders.com/product-category/apparel/",
        link: "/products/apparel",
      },
      {
        cat: "accessories",
        path: "wax-comb-peeling-wax-off-surfboard",
        href: "https://shop.eisbach-riders.com/product-category/accessories/",
        link: "/products/accessories",
      },
    ],
  ]

  return (
    <Container>
      <h2 className={classes.header}>{t("homepage.category")}</h2>
      {small.map((box, idx) => (
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
              <div className={classes.textContainer}>
                <p className={classes.text}>{t(`shop.${elem.cat}Tagline`)}</p>
                <Link to={elem.link} className={classes.link}>
                  <Button
                    className={classes.button}
                    alt="shop van der waal surf grip"
                    variant="contained"
                    color="primary"
                  >
                    {t(`shop.${elem.cat}`)}
                  </Button>
                </Link>
              </div>
              {/* <div className={classes.textbox}>
                <p className={clsx(classes.text, classes.title)}>
                  {t(`shop.${elem.cat}`)}
                </p>
                <p className={clsx(classes.text, classes.subtitle)}>
                  {t(`shop.${elem.cat}Tagline`)}
                </p>
                <Link to={elem.link} className={classes.button}>
                  {t("shop.viewCollection")}
                </Link>
              </div> */}
            </div>
          ))}
        </div>
      ))}
    </Container>
  )
}

export default ShopCategories
