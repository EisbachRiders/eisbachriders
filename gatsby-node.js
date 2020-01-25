const createPosts = require(`./gatsby/createPosts`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
}
