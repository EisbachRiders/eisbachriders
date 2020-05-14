import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import EisbachForecast from "../components/eisbach/EisbachForecast"
import EisbachMap from "../components/eisbach/EisbachMap"
import EisbachFaq from "../components/eisbach/EisbachFaq"

const EisbachPage = () => {
  return (
    <Layout>
      <SEO />
      <EisbachForecast />
      <EisbachMap />
      <EisbachFaq />
    </Layout>
  )
}

export default EisbachPage
