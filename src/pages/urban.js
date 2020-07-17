import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import EisbachHeader from "../components/eisbach/EisbachHeader"
import EisbachMap from "../components/eisbach/EisbachMap"
import EisbachForecast from "../components/eisbach/EisbachForecast"
// import EisbachFaq from "../components/eisbach/EisbachFaq"

const EisbachPage = () => {
  return (
    <Layout location="urban">
      <SEO />
      <EisbachHeader />
      <EisbachMap />
      {/* <EisbachForecast /> */}
      {/* <EisbachFaq /> */}
    </Layout>
  )
}

export default EisbachPage
