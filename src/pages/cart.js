import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Cart from '../components/cart/Cart'

function CartPage({ data }) {
  const footerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('footer')
  )
  return (
    <Layout footerImg={footerImg}>
      <Cart />
    </Layout>
  )
}

export default CartPage

export const pageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
