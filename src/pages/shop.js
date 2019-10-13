import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Shop from '../components/shop/Shop'

function ShopPage({ data }) {
  const footerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('footer')
  )
  return (
    <Layout footerImg={footerImg}>
      <Shop />
    </Layout>
  )
}

export default ShopPage

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
