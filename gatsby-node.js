const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve("src/templates/page.js")
  const blogPostTemplate = path.resolve("src/templates/blogPost.js")
  const blogListTemplate = path.resolve("src/templates/blogList.js")
  const tagTemplate = path.resolve("src/templates/tags.js")

  const result = await graphql(`
    query {
      pagesRemark: allMdx(
        filter: { frontmatter: { label: { nin: "article" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      postsRemark: allMdx(
        filter: { frontmatter: { label: { in: "article" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
          next {
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges
  const pages = result.data.pagesRemark.edges
  const tags = result.data.tagsGroup.group

  // Create pages, posts, and tags
  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: pageTemplate,
      context: { id: node.id },
    })
  })

  posts.forEach(({ node, previous, next }) => {
    const previousSlug = previous ? previous.fields.slug : null
    const nextSlug = next ? next.fields.slug : null
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: { id: node.id, previous: previousSlug, next: nextSlug },
    })
  })

  // create pagination on blog
  const postsPerPage = 5
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  tags.forEach((tag) => {
    let postLen = posts.filter(
      (elem) => elem.node.frontmatter.tags[0] === tag.fieldValue
    ).length
    let numPages = Math.ceil(postLen / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/tags/${tag.fieldValue}`
            : `/tags/${tag.fieldValue}/${i + 1}`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: value,
    })
  }
}
