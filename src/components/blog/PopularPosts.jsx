import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlogPreview from "./BlogPreview"

export default function PopularPosts() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: frontmatter___date, order: ASC }
        limit: 3
        filter: { frontmatter: { tags: { in: "popular" } } }
      ) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
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
  `)

  return (
    <>
      {data.allMdx.edges &&
        data.allMdx.edges.map((elem, idx) => (
          <BlogPreview post={elem} idx={idx} key={`popularPost${idx}`} />
        ))}
    </>
  )
}
