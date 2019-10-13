import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Product from '../components/product/Product'

function ProductPage({ data }) {
  const footerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('footer')
  )
  return (
    <Layout footerImg={footerImg}>
      <Product />
    </Layout>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
