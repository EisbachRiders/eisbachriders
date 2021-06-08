import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SearchEngOpt"
import Product from "../components/products/Product"

export default function ProductTemplate({ pageContext }) {
  const { product } = pageContext
  return (
    <Layout location="products">
      <Seo title={product.name} />
      <Product product={product} />
    </Layout>
  )
}
