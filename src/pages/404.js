import * as React from "react"
import Link from "../components/ui/Link"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import Layout from "../components/Layout"
import Container from "../components/ui/Container"
import Seo from "../components/SearchEngOpt"
import FinnImg from "../assets/websiteImages/finsLost.png"

const useStyles = makeStyles(theme => ({
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

const NotFoundPage = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title="404: Not Found" />
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
