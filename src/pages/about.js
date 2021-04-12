import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import About from "../components/about/About"

const AboutPage = () => {
  return (
    <Layout location="about">
      <Seo />
      <About />
    </Layout>
  )
}

export default AboutPage
