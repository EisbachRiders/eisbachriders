import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Blog from '../components/blog/Blog'

function BlogIndex({ data }) {
  console.log(data)
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulBlogPost.edges
  const instagram = data.allInstaNode
  const footerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('footer')
  )
  const blogImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('blogAbout')
  )
  const blog1 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('blog1')
  )
  const blog2 = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('blog2')
  )
  return (
    <Layout siteTitle={siteTitle} footerImg={footerImg}>
      <Blog
        posts={posts}
        blogImg={blogImg}
        instagram={instagram}
        blogHeaders={[blog1, blog2]}
      />
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
    allContentfulBlogPost(sort: { order: DESC, fields: publishDate }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 1000, maxHeight: 1000, resizingBehavior: SCALE) {
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
