import * as React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import FrequentlyAskedQuestions from "../components/faq/FrequentlyAskedQuestions"

const FaqPage = () => {
  return (
    <Layout location="faq">
      <Seo />
      <FrequentlyAskedQuestions />
    </Layout>
  )
}

export default FaqPage
