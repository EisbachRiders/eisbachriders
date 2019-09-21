import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import About from '../components/about/About'

function AboutPage({ data }) {
  const about1 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('about1')
  )
  const about2 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('about2')
  )
  const about3 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('about3')
  )
  const about4 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('groupWalking')
  )
  const about5 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('author1')
  )
  const about6 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('author2')
  )

  return (
    <Layout>
      <About img={[about1, about2, about3, about4, about5, about6]} />
    </Layout>
  )
}

export default AboutPage

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
