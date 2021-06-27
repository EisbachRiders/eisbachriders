import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SearchEngOpt"
import ProductsOverview from "../components/products/ProductsOverview"

export default function AllProductsTemplate({ pageContext }) {
  const { products } = pageContext
  return (
    <Layout location="products">
      <Seo title="ER products" />
      <ProductsOverview products={products} />
    </Layout>
  )
}
