import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import About from '../components/About'

function AboutPage({ data }) {
  const headerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('header')
  )
  return (
    <Layout img={headerImg}>
      <About />
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
