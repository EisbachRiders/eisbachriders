import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProductFinder from '../components/productFinder/ProductFinder'

function ProductFinderPage({ data }) {
  const waveImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('wave')
  )
  const fin1 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('finderfin1')
  )
  const fin2 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('finderfin2')
  )
  const fin3 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('finderfin3')
  )
  return (
    <Layout waveImg={waveImg}>
      <ProductFinder img={[fin1, fin2, fin3]} />
    </Layout>
  )
}

export default ProductFinderPage

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
