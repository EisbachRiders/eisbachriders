require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Eisbach Riders',
    author: 'Alyssa Butler',
    description: 'Eisbach Riders - Surf Accessories',
    siteUrl: 'https://www.eisbach-riders.com',
    url: 'https://www.eisbach-riders.com', // No trailing slash allowed!
    image: 'src/assets/logos/icon-192.png',
  },
  pathPrefix: '/eisbach-riders',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "woocommerceAPI",
    //     fieldName: "woo",
    //     url: "https://rickandmortyapi-gql.now.sh/",
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/LayoutMdx.jsx'),
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_KEY,
        anonymize: true,
        respectDNT: true,
        cookie_expires: 0,
        cookieDomain: 'https://eisbach-riders.com',
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eisbach Riders`,
        short_name: `ER`,
        start_url: `/`,
        background_color: `#0b0c10`,
        theme_color: `#66fcf1`,
        display: `minimal-ui`,
        icon: `src/assets/logos/icon-192.png`,
      },
    },
    'gatsby-plugin-top-layout',
    'gatsby-plugin-material-ui',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
