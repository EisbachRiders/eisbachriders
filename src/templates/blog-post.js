import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPost from '../components/blog/BlogPost'

function BlogPostTemplate({ data }) {
  const post = data.contentfulBlogPost
  const siteTitle = data.site.siteMetadata.title
  const blogImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('blogAbout')
  )
  const footerImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('footer')
  )
  return (
    <Layout siteTitle={siteTitle} footerImg={footerImg}>
      <BlogPost post={post} blogImg={blogImg} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMdx {
          body
        }
        childMarkdownRemark {
          html
        }
      }
    }
  }
`