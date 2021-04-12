import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import RecycledFins from "../components/recycledFins/RecycledFins"

const RecycledFinPage = () => {
  return (
    <Layout location="faq">
      <Seo />
      <RecycledFins />
    </Layout>
  )
}

export default RecycledFinPage
