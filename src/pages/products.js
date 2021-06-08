import * as React from "react"
import Seo from "../components/SearchEngOpt"
import Layout from "../components/Layout"
import ProductsOverview from "../components/products/ProductsOverview"

const ProductsPage = () => {
  return (
    <Layout location="products">
      <Seo />
      <ProductsOverview />
    </Layout>
  )
}

export default ProductsPage
