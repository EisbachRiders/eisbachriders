import * as React from "react"
import Seo from "../components/SearchEngOpt"
import Layout from "../components/Layout"
import EisbachMap from "../components/eisbach/EisbachMap"

const EisbachPage = () => {
  return (
    <Layout location="urban">
      <Seo />
      <EisbachMap />
    </Layout>
  )
}

export default EisbachPage
