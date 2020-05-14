import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby-theme-material-ui"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/ui/Container"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: 18,
    textAlign: "center",
  },
  featuredImg: {
    height: 500,
    margin: "0 auto",
  },
  nav: {
    width: "100%",
  },
  ul: {
    display: "flex",
    justifyContent: "space-between",
    listStyleType: "none",
    padding: 0,
  },
  link: {
    color: theme.color.white,
    background: theme.palette.primary.main,
    padding: "9px 27px",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 3,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "none",
      background: theme.palette.primary.light,
    },
  },
  marginLeft: {
    marginLeft: 15,
  },
  marginRight: {
    marginRight: 15,
  },
  img: {
    height: 400,
  },
  sub: {
    fontSize: 12,
    textAlign: "center",
  },
}))

export default function BlogPostTemplate({ data: { mdx }, pageContext }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const { previous, next } = pageContext

  const shortcodes = {
    Link,
    img: (props) => <img {...props} className={classes.img} />,
    sub: (props) => <sub {...props} className={classes.sub} />,
  }

  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.excerpt}
      />
      <>
        <article>
          <Container flexDirection="column">
            <h1 className={classes.h1}>{mdx.frontmatter.title}</h1>
            <Img
              alt={mdx.frontmatter.title}
              fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
              placeholderStyle={{ backgroundColor: `blue` }}
              className={classes.img}
            />
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </Container>
        </article>
        <Container>
          <nav className={classes.nav}>
            <ul className={classes.ul}>
              <li>
                {previous && (
                  <Link to={previous} rel="prev" className={classes.link}>
                    <ChevronLeftIcon className={classes.marginRight} />
                    {t("common.previous")}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next} rel="next" className={classes.link}>
                    {t("common.next")}
                    <ChevronRightIcon className={classes.marginLeft} />
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Container>
      </>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      excerpt
      body
      frontmatter {
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2000) {
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
`
