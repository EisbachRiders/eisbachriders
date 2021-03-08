module.exports = {
  siteMetadata: {
    title: "Eisbach Riders: Surf Equipment from Munich",
    titleTemplate: "",
    description:
      "Local brand from Munich that offers sustainably packaged surf accessories and equipment for SUP, River Surfing, Ocean Surfing, Kite Surfing and more!",
    url: "https://www.eisbach-riders.com", // No trailing slash allowed!
    siteUrl: "https://www.eisbach-riders.com",
    image: "/src/assets/logos/logo.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@EisbachRiders",
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-wordpress-experimental`,
    //   options: {
    //     url: `https://secondwavesurfing.com/shop/graphql`,
    //     schema: {
    //       //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
    //       // typePrefix: `Wp`,

    //       requestConcurrency: 2, // currently set to undefined
    //       previewRequestConcurrency: 2, // currently set to undefined
    //       timeout: 60000,
    //     },
    //     develop: {
    //       //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
    //       hardCacheMediaFiles: true,
    //     },
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-htaccess",
    //   options: {
    //     redirect: [
    //       "RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]",
    //       {
    //         from: "/blog",
    //         to: "secondwavesurfing.com/blog",
    //       },
    //       {
    //         from: "/shop",
    //         to: "secondwavesurfing.com/shop",
    //       },
    //       {
    //         from:
    //           "/blog/product-insights-gnarwall-surfboard-hangers-from-sheppsolutions",
    //         to:
    //           "secondwavesurfing.com/blog/product-insights-gnarwall-surfboard-hangers-from-SHEPPSolutions",
    //       },
    //       {
    //         from:
    //           "/blog/provide-the-slide-collecting-and-donating-surfboards-to-spread-the-joy-of-surfing",
    //         to:
    //           "secondwavesurfing.com/blog/provide-the-slide-collecting-and-donating-surfboards-for-liberia",
    //       },
    //       {
    //         from: "/blog/8-things-you-can-do-as-landlocked-surfer",
    //         to:
    //           "secondwavesurfing.com/blog/8-things-you-can-do-as-landlocked-surfer",
    //       },
    //       {
    //         from: "/blog/fuerteventura-the-european-winter-surf-destination",
    //         to:
    //           "secondwavesurfing.com/blog/fuerteventura-the-european-winter-surf-destination",
    //       },
    //       {
    //         from: "/blog/big-city-surf-escape-in-hong-kong",
    //         to: "secondwavesurfing.com/blog/big-city-surf-escape-in-hong-kong",
    //       },
    //       {
    //         from: "/blog/product-insights-organic-surf-wax-by-bee-swell",
    //         to:
    //           "secondwavesurfing.com/blog/product-insights-organic-surf-wax-by-bee-swell",
    //       },
    //       {
    //         from: "/blog/where-to-find-used-surfboards",
    //         to: "secondwavesurfing.com/blog/where-to-find-used-surfboards",
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: "https://secondwavesurfing.com/shop/graphql",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/logos`,
        name: `logos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/websiteImages`,
        name: `websiteImages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shopCategory`,
        path: `${__dirname}/src/assets/shopCategory`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://secondwavesurfing.us19.list-manage.com/subscribe/post?u=37a2f35f3b8bc53ace7af50eb&amp;id=7bdc6b47ed",
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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

          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-130658859-2", // leave empty if you want to disable the tracker
          anonymize: true, // default
        },
        googleTagManager: {
          trackingId: "", // leave empty if you want to disable the tracker
          dataLayerName: "dataLayer", // default
        },
        facebookPixel: {
          pixelId: "", // leave empty if you want to disable the tracker
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production"],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eisbach Riders`,
        short_name: `ER`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00d7a2`,
        display: "standalone",
        icon: `${__dirname}/src/assets/logos/logo.png`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    "gatsby-plugin-emotion",
  ],
}
