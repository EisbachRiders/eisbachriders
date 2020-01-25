import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Shop from '../components/shop/Shop'

function ShopPage({ data }) {
  const footerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('footer')
  )
  const bannerImgSm = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('shopBannerSmall')
  )
  const bannerImgMd = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('shopBannerMedium')
  )
  const bannerImgLg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('shopBannerLarge')
  )
  const apparelImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('shopApparel')
  )
  const finsImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('shopFin')
  )
  const leashesImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('shopLeash')
  )
  const accessoriesImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('shopAccessories')
  )
  return (
    <Layout footerImg={footerImg}>
      <Shop
        images={[
          bannerImgSm,
          bannerImgMd,
          bannerImgLg,
          finsImg,
          leashesImg,
          apparelImg,
          accessoriesImg,
        ]}
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
