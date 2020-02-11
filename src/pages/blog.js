import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Blog from '../components/blog/Blog'

function BlogIndex({ data }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulBlogPost.edges
  const footerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('footer')
  )
  const blogImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('blogAbout')
  )
  return (
    <Layout siteTitle={siteTitle} footerImg={footerImg}>
      <Blog posts={posts} blogImg={blogImg} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`
