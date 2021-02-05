import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import RecycledFins from "../components/recycledFins/RecycledFins"

const RecycledFinPage = () => {
  return (
    <Layout location="faq">
      <SEO />
      <RecycledFins />
    </Layout>
  )
}

export default RecycledFinPage
