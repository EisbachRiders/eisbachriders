import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProductFinder from '../components/productFinder/ProductFinder'

function ProductFinderPage({ data }) {
  const waveImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('wave')
  )
  const img1 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('groupWalkingHome')
  )
  const fin1 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('fin1')
  )
  const fin2 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('fin2')
  )
  const fin3 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('fin3')
  )
  return (
    <Layout waveImg={waveImg}>
      <ProductFinder img={[img1, fin1, fin2, fin3]} />
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
