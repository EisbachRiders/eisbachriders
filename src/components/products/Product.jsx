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
}))

function Product({ product }) {
  const { t } = useTranslation()
  const classes = useStyles()
  const image = product?.mainImage ? getImage(product.mainImage) : null

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ flexBasis: "40%" }}>
          {image && (
            <GatsbyImage
              image={image}
              alt={product.name}
              placeholder="blurred"
            />
          )}
        </Box>

        <Box
          sx={{
            flexBasis: { xs: "100%", md: "50%" },
            pt: 4,
            pb: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography sx={{ fontSize: 32, marginBottom: 10 }}>
              {product.name}
            </Typography>

            {product.color?.length > 0 && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: 18,
                    pr: 4,
                  }}
                >
                  {t("product.colors")}:
                </Typography>
                <Colors colors={product.color} variant="large" />
              </Box>
            )}
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              href={product.shopLink}
              fullWidth
            >
              {t("product.buy")}
            </Button>
          </div>
        </Box>
      </Box>
      <ProductDetails product={product} />
    </Container>
  )
}

export default Product
