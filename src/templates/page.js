import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Link from "../components/ui/Link"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Container from "../components/ui/Container"

const shortcodes = Link // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Seo title={mdx.frontmatter.title} />
      <Container flexDirection="column">
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
