import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Product from "../components/products/Product"

export default function ProductTemplate({ pageContext }) {
  const { product } = pageContext

  return (
    <Layout>
      <SEO title={product.name} />
      <Product product={product} />
    </Layout>
  )
}
