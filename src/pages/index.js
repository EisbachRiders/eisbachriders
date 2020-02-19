import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Feature from '../components/homepage/Feature'
import NewProduct from '../components/homepage/NewProduct'
import Showcase from '../components/homepage/Showcase'
import Hero from '../components/homepage/Hero'
import HeroBottom from '../components/homepage/HeroBottom'

function Index({ data }) {
  const heroImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('blogHeader')
  )
  const featureImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('fin2')
  )
  const newImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('newProduct')
  )
  const detailImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('newDetail')
  )
  const footerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('footer')
  )

  return (
    <div id="body">
      <Layout isHomepage footerImg={footerImg}>
        <Hero img={heroImg} />
        <HeroBottom />
        <Feature img={featureImg} />
        <NewProduct img={newImg} detailImg={detailImg} />
        <Showcase />
      </Layout>
    </div>
  )
}

export default Index

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
