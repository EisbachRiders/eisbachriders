import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Product from "../components/products/Product"

export default function ProductTemplate({ pageContext }) {
  const { product, variant } = pageContext
  return (
    <Layout>
      <Seo title={product.name} />
      <Product product={product} variant={variant} />
    </Layout>
  )
}
