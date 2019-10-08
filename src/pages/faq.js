import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import FAQ from '../components/faq/Faq'

function FaqPage({ data }) {
  const footerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('footer')
  )
  return (
    <Layout footerImg={footerImg}>
      <FAQ />
    </Layout>
  )
}

export default FaqPage

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
