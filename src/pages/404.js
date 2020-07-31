import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import Layout from "../components/Layout"
import Container from "../components/ui/Container"
import SEO from "../components/seo"
import FinnImg from "../assets/websiteImages/finsLost.png"

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    width: "50%",
  },
  link: {
    cursor: "pointer",
  },
}))

const NotFoundPage = ({ data, location }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <Container className={classes.container}>
        <h1>{t("404.notFound")}</h1>
        <p className={classes.text}>{t("404.pageText")}</p>
        <Link to="/" className={classes.link}>
          {t("404.homepage")}
        </Link>
        <img src={FinnImg} alt="lost fins" className={classes.img} />
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
