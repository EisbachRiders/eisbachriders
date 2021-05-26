import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Link from "../components/ui/Link"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Container from "../components/ui/Container"

const shortcodes = Link // Provide common components here

export default function PageTemplate({ pageContext }) {
  const { title, body } = pageContext
  console.log(pageContext)
  return (
    <Layout>
      <Seo title={title} />
      <Container flexDirection="column">
        <h1>{title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Container>
    </Layout>
  )
}
