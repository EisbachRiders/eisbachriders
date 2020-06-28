import React from "react"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "../ui/Container"
import Colors from "./Colors"

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: 150,
  },
  flexContainer: {
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "60%",
    },
  },
  flexContainer2: {
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "38%",
    },
  },
  imgContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  img: {
    width: "50%",
  },
  img3: {
    width: "33%",
  },
  header: {
    fontFamily: "secondary",
    fontSize: 32,
    marginBottom: 30,
  },
  subheader: {
    textTransform: "capitalize",
    fontSize: 18,
    paddingRight: 15,
  },
  attributeContainer: {
    display: "flex",
    alignItems: "center",
  },
  divider: {
    borderBottom: `1px solid ${theme.color.gray}`,
    marginTop: 30,
    marginBottom: 30,
  },
}))

function Product({ product }) {
  const { t } = useTranslation()
  const classes = useStyles()

  let colors =
    product === undefined
      ? []
      : product.paColors.edges.map((elem) => elem.node.name)

  let sizes =
    product === undefined
      ? []
      : product.paSizes.edges.map((elem) => elem.node.name)

  return (
    <Container justifyContent="spaceBetween" className={classes.container}>
      <div className={clsx(classes.flexContainer, classes.imgContainer)}>
        <img
          src={product.image.sourceUrl}
          alt={product.image.slug}
          className={classes.img}
        />
        <img
          src={product.galleryImages.edges[0].node.sourceUrl}
          alt={product.galleryImages.edges[0].node.slug}
          className={classes.img}
        />
        {product.galleryImages.edges.map((elem, idx) => {
          if (idx !== 0) {
            return (
              <img
                key={`img${idx}`}
                src={elem.node.sourceUrl}
                alt={elem.node.slug}
                className={classes.img3}
              />
            )
          }
        })}
      </div>

      <div className={classes.flexContainer2}>
        <Typography variant="h6" component="h1" className={classes.header}>
          {product.name}
        </Typography>

        {colors.length > 0 && (
          <div className={classes.attributeContainer}>
            <p className={classes.subheader}>{t("product.colors")}:</p>
            <Colors colors={colors} variant="long" />
          </div>
        )}
        {sizes.length > 0 && (
          <div className={classes.attributeContainer}>
            <p className={classes.subheader}>{t("product.sizes")}:</p>
            {sizes.map((elem) => (
              <p className={classes.subheader} key={`size_${elem}`}>
                {elem}
              </p>
            ))}
          </div>
        )}

        <div className={classes.divider}></div>

        <p className={classes.subheader}>{t("product.features")}</p>
        <div
          dangerouslySetInnerHTML={{ __html: product.shortDescription }}
          className={classes.text}
        />
      </div>
    </Container>
  )
}

export default Product
