import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Legal from '../components/Legal'

function LegalPage({ data }) {
  const headerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('header')
  )
  return (
    <Layout img={headerImg}>
      <Legal />
    </Layout>
  )
}

export default LegalPage

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
