import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Shop from '../components/shop/Shop'

function ShopPage({ data }) {
  const footerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('footer')
  )
  const bannerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('shopBanner')
  )
  const apparelImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('apparel')
  )
  const finsImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('fin')
  )
  const leashesImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('leash')
  )
  const accessoriesImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('accessories')
  )
  return (
    <Layout footerImg={footerImg}>
      <Shop
        images={[bannerImg, apparelImg, finsImg, leashesImg, accessoriesImg]}
      />
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
