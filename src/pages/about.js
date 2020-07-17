import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import About from "../components/about/About"

const AboutPage = () => {
  return (
    <Layout location="about">
      <SEO />
      <About />
    </Layout>
  )
}

export default AboutPage
