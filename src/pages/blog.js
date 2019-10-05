import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Blog from '../components/blog/Blog'

function BlogPage({ data }) {
  const waveImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('wave')
  )
  const blogImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('blogHeader')
  )
  return (
    <Layout waveImg={waveImg} img={blogImg}>
      <Blog />
    </Layout>
  )
}

export default BlogPage

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
