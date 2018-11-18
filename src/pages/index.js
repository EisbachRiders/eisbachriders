import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import Homepage from '../components/Homepage'

class BlogIndex extends Component {
  render() {
    const { data } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    // const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const heroImg = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes('backsplash')
    )
    const img1 = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes('homepage1')
    )
    const img2 = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes('homepage2')
    )
    const img3 = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes('homepage3')
    )
    const img4 = data.allImageSharp.edges.find(x =>
      x.node.fluid.src.includes('homepage4')
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Hero img={heroImg} />
        <Homepage img1={img1} img2={img2} img3={img3} img4={img4} />
        {/* {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                <Typography variant="h1" gutterBottom color="primary">
                  {title}
                </Typography>
              </Link>

              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })} */}
      </Layout>
    )
  }
}

BlogIndex.propTypes = {}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid {
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
