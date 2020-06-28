const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
// const { access } = require("fs")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve("src/templates/page.js")
  const productTemplate = path.resolve("src/templates/productTemplate.js")

  const result = await graphql(`
    query {
      pagesRemark: allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      fins: wpgraphql {
        products(
          where: { category: "Fins", tagIn: "Eisbach Riders", tagNotIn: "sup" }
        ) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              galleryImages {
                edges {
                  node {
                    sourceUrl
                    slug
                  }
                }
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              shortDescription(format: RENDERED)
              paSizes {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
            }
          }
        }
      }
      leashes: wpgraphql {
        products(where: { category: "Leashes", tagIn: "Eisbach Riders" }) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              galleryImages {
                edges {
                  node {
                    sourceUrl
                    slug
                  }
                }
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              shortDescription(format: RENDERED)
              paSizes {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
            }
          }
        }
      }
      sup: wpgraphql {
        products(
          where: { category: "SUP", tagIn: "Eisbach Riders", tagNotIn: "leash" }
        ) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              galleryImages {
                edges {
                  node {
                    sourceUrl
                    slug
                  }
                }
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              shortDescription(format: RENDERED)
              paSizes {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
            }
          }
        }
      }
      accessories: wpgraphql {
        products(where: { category: "Accessories", tagIn: "Eisbach Riders" }) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              galleryImages {
                edges {
                  node {
                    sourceUrl
                    slug
                  }
                }
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              shortDescription(format: RENDERED)
              paSizes {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
            }
          }
        }
      }
      apparel: wpgraphql {
        products(where: { category: "Apparel", tagIn: "Eisbach Riders" }) {
          edges {
            node {
              name
              image {
                sourceUrl
                slug
              }
              galleryImages {
                edges {
                  node {
                    sourceUrl
                    slug
                  }
                }
              }
              paColors {
                edges {
                  node {
                    name
                  }
                }
              }
              shortDescription(format: RENDERED)
              paSizes {
                edges {
                  node {
                    name
                  }
                }
              }
              slug
            }
          }
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const pages = result.data.pagesRemark.edges
  const fins = result.data.fins.products.edges
  const leashes = result.data.leashes.products.edges
  const sup = result.data.sup.products.edges
  const accessories = result.data.accessories.products.edges
  const apparel = result.data.apparel.products.edges

  // Create pages
  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: pageTemplate,
      context: { id: node.id },
    })
  })

  fins.forEach(({ node }) => {
    createPage({
      path: `product/${node.slug}`,
      component: productTemplate,
      context: { product: node },
    })
  })

  leashes.forEach(({ node }) => {
    createPage({
      path: `product/${node.slug}`,
      component: productTemplate,
      context: { product: node },
    })
  })

  sup.forEach(({ node }) => {
    createPage({
      path: `product/${node.slug}`,
      component: productTemplate,
      context: { product: node },
    })
  })

  accessories.forEach(({ node }) => {
    createPage({
      path: `product/${node.slug}`,
      component: productTemplate,
      context: { product: node },
    })
  })

  apparel.forEach(({ node }) => {
    createPage({
      path: `product/${node.slug}`,
      component: productTemplate,
      context: { product: node },
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
