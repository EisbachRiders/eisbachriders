import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import i18n from '../i18n/i18n'

import Layout from '../components/layout'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import About from '../components/About'
import Hero from '../components/Hero'

class Index extends Component {
  state = {
    activePage: '/',
    language: 'en',
  }

  handlePageChange = activePage => {
    this.setState({
      activePage,
    })
  }

  handleLanguageChange = () => {
    const lng = this.state.language === 'en' ? 'de' : 'en'
    i18n.changeLanguage(lng)
    this.setState({
      language: lng,
    })
  }

  render() {
    const { data } = this.props
    const { activePage, language } = this.state
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const heroImg = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes('backsplash')
    )
    const logo = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes('logo')
    )
    const aboutImg = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes('homepage1')
    )

    return (
      <Layout
        location={this.props.location}
        handleLanguageChange={this.handleLanguageChange}
        handlePageChange={this.handlePageChange}
        activePage={activePage}
        language={language}
      >
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Hero img={heroImg} logo={logo} />
        <Newsletter />
        <About img={aboutImg} />
        <Products />
      </Layout>
    )
  }
}

Index.propTypes = {}

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

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD MMMM, YYYY")
//             title
//           }
//         }
//       }
//     }
//     allImageSharp {
//       edges {
//         node {
//           id
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `
