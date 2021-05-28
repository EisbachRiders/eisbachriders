import * as React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import EisbachHeader from "../components/eisbach/EisbachHeader"
import EisbachMap from "../components/eisbach/EisbachMap"

const EisbachPage = () => {
  return (
    <Layout location="urban">
      <Seo />
      <EisbachHeader />
      <EisbachMap />
    </Layout>
  )
}

export default EisbachPage
