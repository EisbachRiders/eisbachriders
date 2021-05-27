import React from "react"
import Seo from "../components/Seo"
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
