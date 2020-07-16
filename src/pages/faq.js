import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import FrequentlyAskedQuestions from "../components/faq/FrequentlyAskedQuestions"

const FaqPage = () => {
  return (
    <Layout location="faq">
      <SEO />
      <FrequentlyAskedQuestions />
    </Layout>
  )
}

export default FaqPage
