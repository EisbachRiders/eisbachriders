module.exports = {
  siteMetadata: {
    title: 'Eisbach Riders',
    author: 'Alyssa Butler',
    description: 'Eisbach Riders - Surf Accessories',
    siteUrl: 'www.eisbach-riders.com',
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
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    //`gatsby-plugin-feed`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://eisbach-riders.us19.list-manage.com/subscribe/post?u=37a2f35f3b8bc53ace7af50eb&amp;id=7bdc6b47ed',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eisbach Riders`,
        short_name: `EisbachRiders`,
        start_url: `/`,
        background_color: `#0b0c10`,
        theme_color: `#66fcf1`,
        display: `minimal-ui`,
        icon: `src/assets/logos/icon-192.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
