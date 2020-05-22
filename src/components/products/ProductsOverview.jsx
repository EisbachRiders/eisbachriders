import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    fontWeight: 700,
    width: "100%",
    fontFamily: "secondary",
    fontSize: 32,
    marginBottom: 15,
  },
}))

function ProductsOverview() {
  const classes = useStyles()
  const { t } = useTranslation()
  // const data = useStaticQuery(graphql`
  //   query {
  //     api: wpgraphql {
  //       products {
  //         edges {
  //           node {
  //             name
  //             image {
  //               altText
  //               mediaItemUrl
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Container variant="center" className={classes.container}>
      <p className={classes.header}>{t("links.products")}</p>
    </Container>
  )
}

export default ProductsOverview
