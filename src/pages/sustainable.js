import * as React from "react"
import Seo from "../components/SearchEngOpt"
import Layout from "../components/Layout"
import RecycledFins from "../components/recycledFins/RecycledFins"

const RecycledFinPage = () => {
  return (
    <Layout location="sustainable">
      <Seo />
      <RecycledFins />
    </Layout>
  )
}

export default RecycledFinPage
