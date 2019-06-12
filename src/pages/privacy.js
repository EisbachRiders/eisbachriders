import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Privacy from '../components/Privacy'

function PrivacyPage({ data }) {
  const headerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('header')
  )
  return (
    <Layout img={headerImg}>
      <Privacy />
    </Layout>
  )
}

export default PrivacyPage

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
