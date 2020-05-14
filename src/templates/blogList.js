import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Blog from "../components/blog/Blog"

export default function BlogListTemplate({ data: { allMdx }, pageContext }) {
  const { currentPage, numPages } = pageContext
  return (
    <Layout>
      <SEO />
      <Blog
        posts={allMdx.edges}
        numPages={numPages}
        currentPage={currentPage}
      />
    </Layout>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { label: { in: "article" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            description
            tags
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
