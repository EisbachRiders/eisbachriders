import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Link from "../components/ui/Link"
import Layout from "../components/Layout"
import Seo from "../components/SearchEngOpt"
import Container from "../components/ui/Container"

const shortcodes = Link // Provide common components here

export default function PageTemplate({ pageContext }) {
  const { title, body } = pageContext

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
