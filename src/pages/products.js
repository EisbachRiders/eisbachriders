import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import ProductsOverview from "../components/products/ProductsOverview"

const ProductsPage = () => {
  return (
    <Layout>
      <SEO />
      <ProductsOverview />
    </Layout>
  )
}

export default ProductsPage
