import * as React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import EisbachHeader from "../components/eisbach/EisbachHeader"
import EisbachMap from "../components/eisbach/EisbachMap"
// import EisbachForecast from "../components/eisbach/EisbachForecast"
// import EisbachFaq from "../components/eisbach/EisbachFaq"

const EisbachPage = () => {
  return (
    <Layout location="urban">
      <Seo />
      <EisbachHeader />
      <EisbachMap />
      {/* <EisbachForecast /> */}
      {/* <EisbachFaq /> */}
    </Layout>
  )
}

export default EisbachPage
