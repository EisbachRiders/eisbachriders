import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ProductsOverview from "../components/products/ProductsOverview"

export default function ProductTemplate({ pageContext }) {
  const { products, category } = pageContext

  return (
    <Layout>
      <SEO title={category} />
      <ProductsOverview products={products} category={category} />
    </Layout>
  )
}
