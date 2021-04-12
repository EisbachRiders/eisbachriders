import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ProductsOverview from "../components/products/ProductsOverview"

export default function ProductTemplate({ pageContext }) {
  const { products, category } = pageContext

  return (
    <Layout>
      <Seo title={category} />
      <ProductsOverview products={products} category={category} />
    </Layout>
  )
}
