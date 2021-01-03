import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import RecycledFins from "../components/recycledFins/RecycledFins"
import Ad from "../components/homepage/Ad"

const RecycledFinPage = () => {
  return (
    <Layout location="faq">
      <SEO />
      <Ad />
      <RecycledFins />
    </Layout>
  )
}

export default RecycledFinPage
