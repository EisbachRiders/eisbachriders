import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

function NotFoundPage({ data }) {
  const footerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('footer')
  )
  return (
    <Layout footerImg={footerImg}>
      <h1>NOT FOUND</h1>
      <p>Sorry, the page you are looking for cannot be found.</p>
    </Layout>
  )
}

export default NotFoundPage

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
