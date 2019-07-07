import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Weather from '../components/weather/Weather'

function WeatherPage({ data }) {
  const headerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('header')
  )
  const waveImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('wave')
  )
  return (
    <Layout waveImg={waveImg} img={headerImg}>
      <Weather />
    </Layout>
  )
}

export default WeatherPage

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
