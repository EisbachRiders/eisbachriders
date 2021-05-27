import * as React from "react"
import { useTranslation } from "react-i18next"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Colors from "./Colors"
import ProductDetails from "./ProductDetails"
import ProductImages from "./ProductImages"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 30,
  },
  flexContainer: {
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "48%",
    },
  },
  imgContainer: {
    width: "70%",
    margin: "0 auto",
  },
  padding: {
    padding: 30,
    [theme.breakpoints.up("md")]: {
      padding: 60,
    },
  },
  header: {
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
  const image = product?.mainImage ? getImage(product.mainImage) : null

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "40%" }}>
          {image && <GatsbyImage image={image} alt={product.name} />}
        </Box>

        <div className={clsx(classes.flexContainer, classes.padding)}>
          <Typography variant="h6" component="h1" className={classes.header}>
            {product.name}
          </Typography>

          {product.color?.length > 0 && (
            <div className={classes.attributeContainer}>
              <p className={classes.subheader}>{t("product.colors")}:</p>
              <Colors colors={product.color} variant="large" />
            </div>
          )}

          {/* {sizes.length > 0 && (
          <div className={classes.attributeContainer}>
            <p className={classes.subheader}>{t("product.sizes")}:</p>
            {sizes.map(elem => (
              <p className={classes.subheader} key={`size_${elem}`}>
                {elem}
              </p>
            ))}
          </div>
        )}
        {plugs.length > 0 && (
          <div className={classes.attributeContainer}>
            <p className={classes.subheader}>{t("product.plugs")}:</p>
            {plugs.map(elem => (
              <p className={classes.subheader} key={`plug_${elem}`}>
                {elem}
              </p>
            ))}
          </div>
        )}
        {amounts.length > 0 && (
          <div className={classes.attributeContainer}>
            <p className={classes.subheader}>{t("product.amounts")}:</p>
            {amounts.map(elem => (
              <p className={classes.subheader} key={`amounts_${elem}`}>
                {elem}
              </p>
            ))}
          </div>
        )}
        {waterTemps.length > 0 && (
          <div className={classes.attributeContainer}>
            <p className={classes.subheader}>{t("product.waterTemps")}:</p>
            {waterTemps.map(elem => (
              <p className={classes.subheader} key={`temps_${elem}`}>
                {elem}
              </p>
            ))}
          </div>
        )} */}

          <div className={classes.divider}></div>

          <p className={classes.subheader}>{t("product.features")}</p>
          {/* <div
          dangerouslySetInnerHTML={{ __html: product.shortDescription }}
          className={classes.text}
        /> */}

          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              // href={product.link}
              fullWidth
            >
              {t("product.buy")}
            </Button>
          </div>
        </div>
      </Box>
      <ProductDetails product={product} />
    </Container>
  )
}

export default Product
