import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Checkout from '../components/checkout/Checkout'

function CheckoutPage({ data }) {
  const footerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('footer')
  )
  return (
    <Layout footerImg={footerImg}>
      <Checkout />
    </Layout>
  )
}

export default CheckoutPage

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
