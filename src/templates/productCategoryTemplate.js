import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import CategoryOverview from "../components/products/CategoryOverview"

export default function ProductTemplate({ pageContext }) {
  const { products, category } = pageContext

  return (
    <Layout>
      <Seo title={category} />
      <CategoryOverview products={products} category={category} />
    </Layout>
  )
}
