const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
// const { access } = require("fs")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve("src/templates/page.js")
  const productTemplate = path.resolve("src/templates/productTemplate.js")
  const productCategoryTemplate = path.resolve(
    "src/templates/productCategoryTemplate.js"
  )

  const result = await graphql(`
    query {
      pagesRemark: allMdx {
        edges {
          node {
            id
            slug
            body
            frontmatter {
              title
            }
          }
        }
      }
      products: allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            name
            slug
            shopLink
            color {
              name
            }
            title {
              raw
            }
            subtitle
            mainImage {
              gatsbyImageData
            }
            featuresSubtitle
            features {
              icon {
                gatsbyImageData
              }
              subtitle
              title
            }
            bundleImage {
              gatsbyImageData
            }
            bundleDescription {
              raw
            }
            lifestyleImageBig {
              gatsbyImageData
            }
            lifestyleImageSmall {
              gatsbyImageData
            }
            colorSubtitle
            colorImage {
              gatsbyImageData
            }
          }
        }
      }
      fins: allContentfulProduct(
        filter: {
          category: { name: { eq: "Fin" } }
          node_locale: { eq: "en-US" }
        }
      ) {
        edges {
          node {
            name
            slug
            shopLink
            color {
              name
            }
            title {
              raw
            }
            subtitle
            mainImage {
              gatsbyImageData
            }
            featuresSubtitle
            features {
              icon {
                gatsbyImageData
              }
              subtitle
              title
            }
            bundleImage {
              gatsbyImageData
            }
            bundleDescription {
              raw
            }
            lifestyleImageBig {
              gatsbyImageData
            }
            lifestyleImageSmall {
              gatsbyImageData
            }
            colorSubtitle
            colorImage {
              gatsbyImageData
            }
          }
        }
      }
      accessories: allContentfulProduct(
        filter: {
          category: { name: { eq: "Accessories" } }
          node_locale: { eq: "en-US" }
        }
      ) {
        edges {
          node {
            name
            slug
            shopLink
            color {
              name
            }
            title {
              raw
            }
            subtitle
            mainImage {
              gatsbyImageData
            }
            featuresSubtitle
            features {
              icon {
                gatsbyImageData
              }
              subtitle
              title
            }
            bundleImage {
              gatsbyImageData
            }
            bundleDescription {
              raw
            }
            lifestyleImageBig {
              gatsbyImageData
            }
            lifestyleImageSmall {
              gatsbyImageData
            }
            colorSubtitle
            colorImage {
              gatsbyImageData
            }
          }
        }
      }
      leashes: allContentfulProduct(
        filter: {
          category: { name: { eq: "Leash" } }
          node_locale: { eq: "en-US" }
        }
      ) {
        edges {
          node {
            name
            slug
            shopLink
            color {
              name
            }
            title {
              raw
            }
            subtitle
            mainImage {
              gatsbyImageData
            }
            featuresSubtitle
            features {
              icon {
                gatsbyImageData
              }
              subtitle
              title
            }
            bundleImage {
              gatsbyImageData
            }
            bundleDescription {
              raw
            }
            lifestyleImageBig {
              gatsbyImageData
            }
            lifestyleImageSmall {
              gatsbyImageData
            }
            colorSubtitle
            colorImage {
              gatsbyImageData
            }
          }
        }
      }
      essential: allContentfulProduct(
        filter: {
          line: { name: { eq: "essential" } }
          node_locale: { eq: "en-US" }
        }
      ) {
        edges {
          node {
            name
            slug
            shopLink
            color {
              name
            }
            title {
              raw
            }
            subtitle
            mainImage {
              gatsbyImageData
            }
            featuresSubtitle
            features {
              icon {
                gatsbyImageData
              }
              subtitle
              title
            }
            bundleImage {
              gatsbyImageData
            }
            bundleDescription {
              raw
            }
            lifestyleImageBig {
              gatsbyImageData
            }
            lifestyleImageSmall {
              gatsbyImageData
            }
            colorSubtitle
            colorImage {
              gatsbyImageData
            }
          }
        }
      }
      sustainable: allContentfulProduct(
        filter: {
          line: { name: { eq: "sustainable" } }
          node_locale: { eq: "en-US" }
        }
      ) {
        edges {
          node {
            name
            slug
            shopLink
            color {
              name
            }
            title {
              raw
            }
            subtitle
            mainImage {
              gatsbyImageData
            }
            featuresSubtitle
            features {
              icon {
                gatsbyImageData
              }
              subtitle
              title
            }
            bundleImage {
              gatsbyImageData
            }
            bundleDescription {
              raw
            }
            lifestyleImageBig {
              gatsbyImageData
            }
            lifestyleImageSmall {
              gatsbyImageData
            }
            colorSubtitle
            colorImage {
              gatsbyImageData
            }
          }
        }
      }
      performance: allContentfulProduct(
        filter: {
          line: { name: { eq: "performance" } }
          node_locale: { eq: "en-US" }
        }
      ) {
        edges {
          node {
            name
            slug
            shopLink
            color {
              name
            }
            title {
              raw
            }
            subtitle
            mainImage {
              gatsbyImageData
            }
            featuresSubtitle
            features {
              icon {
                gatsbyImageData
              }
              subtitle
              title
            }
            bundleImage {
              gatsbyImageData
            }
            bundleDescription {
              raw
            }
            lifestyleImageBig {
              gatsbyImageData
            }
            lifestyleImageSmall {
              gatsbyImageData
            }
            colorSubtitle
            colorImage {
              gatsbyImageData
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
  const products = result.data.products.edges
  const fins = result.data.fins.edges
  const leashes = result.data.leashes.edges
  const accessories = result.data.accessories.edges
  const essentialLine = result.data.essential.edges
  const sustainableLine = result.data.sustainable.edges
  const performanceLine = result.data.performance.edges
  // const apparel = result.data.apparel.products.edges

  // Create pages
  pages.forEach(({ node }) => {
    if (node.slug) {
      createPage({
        path: node.slug,
        component: pageTemplate,
        context: {
          title: node.title, // "Using a Theme"
          body: node.body,
        },
      })
    }
  })

  // Create product category pages
  // createPage({
  //   path: "/products",
  //   component: productCategoryTemplate,
  //   context: { products: products, category: "products" },
  // })
  createPage({
    path: "/products/essential-line",
    component: productCategoryTemplate,
    context: {
      products: essentialLine,
      category: "essential-line",
    },
  })
  createPage({
    path: "/products/sustainable-line",
    component: productCategoryTemplate,
    context: {
      products: sustainableLine,
      category: "sustainable-line",
    },
  })
  createPage({
    path: "/products/performance-line",
    component: productCategoryTemplate,
    context: {
      products: performanceLine,
      category: "performance-line",
    },
  })
  createPage({
    path: "/products/fins",
    component: productCategoryTemplate,
    context: { products: fins, category: "fins" },
  })
  createPage({
    path: "/products/leashes",
    component: productCategoryTemplate,
    context: { products: leashes, category: "leashes" },
  })
  createPage({
    path: "/products/accessories",
    component: productCategoryTemplate,
    context: {
      products: accessories,
      category: "accessories",
    },
  })

  // Create individual product pages
  products.forEach(({ node }) => {
    createPage({
      path: `products/${node.slug}`,
      component: productTemplate,
      context: { product: node },
    })
  })

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
}
