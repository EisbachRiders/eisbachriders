import React from "react"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
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
    alignItems: "flex-start",
  },
  img: {
    width: "50%",
  },
  imgFull: {
    width: "100%",
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
  text: {
    marginBottom: 60,
  },
  divider: {
    borderBottom: `1px solid ${theme.color.gray}`,
    marginTop: 30,
    marginBottom: 30,
  },
  buttonContainer: {
    textAlign: "center",
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
  let plugs =
    product === undefined
      ? []
      : product.paFinPlugs.edges.map((elem) => elem.node.name)
  let waterTemps =
    product === undefined
      ? []
      : product.paWaterTemps.edges.map((elem) => elem.node.name)
  let amounts =
    product === undefined
      ? []
      : product.paAmounts.edges.map((elem) => elem.node.name)

  return (
    <Container justifyContent="spaceBetween" className={classes.container}>
      <div className={clsx(classes.flexContainer, classes.imgContainer)}>
        <img
          src={product.image.sourceUrl}
          alt={product.image.slug}
          className={
            product.galleryImages.edges.length === 0
              ? classes.imgFull
              : classes.img
          }
        />
        {product.galleryImages.edges.length > 0 && (
          <>
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
          </>
        )}
      </div>

      <div className={classes.flexContainer2}>
        <Typography variant="h6" component="h1" className={classes.header}>
          {product.name}
        </Typography>

        {colors.length > 0 && (
          <div className={classes.attributeContainer}>
            <p className={classes.subheader}>{t("product.colors")}:</p>
            <Colors colors={colors} variant="large" />
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
        {plugs.length > 0 && (
          <div className={classes.attributeContainer}>
            <p className={classes.subheader}>{t("product.plugs")}:</p>
            {plugs.map((elem) => (
              <p className={classes.subheader} key={`plug_${elem}`}>
                {elem}
              </p>
            ))}
          </div>
        )}
        {amounts.length > 0 && (
          <div className={classes.attributeContainer}>
            <p className={classes.subheader}>{t("product.amounts")}:</p>
            {amounts.map((elem) => (
              <p className={classes.subheader} key={`amounts_${elem}`}>
                {elem}
              </p>
            ))}
          </div>
        )}
        {waterTemps.length > 0 && (
          <div className={classes.attributeContainer}>
            <p className={classes.subheader}>{t("product.waterTemps")}:</p>
            {waterTemps.map((elem) => (
              <p className={classes.subheader} key={`temps_${elem}`}>
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

        <div className={classes.buttonContainer}>
          <Button variant="contained" color="primary" href={product.link}>
            {t("product.buy")}
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Product
