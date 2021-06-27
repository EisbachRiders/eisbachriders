import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SearchEngOpt"
import ProductCategoryOverview from "../components/products/CategoryOverview"

export default function ProductTemplate({ pageContext }) {
  const { products, category } = pageContext

  return (
    <Layout location="products">
      <Seo title={category} />
      <ProductCategoryOverview products={products} category={category} />
    </Layout>
  )
}
