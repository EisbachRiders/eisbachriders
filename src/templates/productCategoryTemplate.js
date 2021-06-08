import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SearchEngOpt"
import CategoryOverview from "../components/products/CategoryOverview"

export default function ProductTemplate({ pageContext }) {
  const { products, category } = pageContext

  return (
    <Layout location="products">
      <Seo title={category} />
      <CategoryOverview products={products} category={category} />
    </Layout>
  )
}
