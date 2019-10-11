import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header/Header'
import Footer from './footer/Footer'
import SEO from './seo/SEO'
import Tracking from './tracking/Tracking'
import Container from './ui/Container'

function LayoutMdx({ children }) {
  const data = useStaticQuery(graphql`
    {
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
  `)
  const waveImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('wave')
  )
  const headerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('header')
  )
  return (
    <>
      <SEO />
      <Header isHomepage={false} img={headerImg} />
      <Container>{children}</Container>
      <Footer waveImg={waveImg} />
      {process.env.NODE_ENV !== 'development' && <Tracking />}
    </>
  )
}

export default LayoutMdx
