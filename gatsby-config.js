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
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        redirect: [
          "RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]",
          {
            from: "/blog",
            to: "secondwavesurfing.com/blog",
          },
          {
            from: "/shop",
            to: "secondwavesurfing.com/shop",
          },
          {
            from:
              "/blog/product-insights-gnarwall-surfboard-hangers-from-sheppsolutions",
            to:
              "secondwavesurfing.com/blog/product-insights-gnarwall-surfboard-hangers-from-SHEPPSolutions",
          },
          {
            from:
              "/blog/provide-the-slide-collecting-and-donating-surfboards-to-spread-the-joy-of-surfing",
            to:
              "secondwavesurfing.com/blog/provide-the-slide-collecting-and-donating-surfboards-for-liberia",
          },
          {
            from: "/blog/8-things-you-can-do-as-landlocked-surfer",
            to:
              "secondwavesurfing.com/blog/8-things-you-can-do-as-landlocked-surfer",
          },
          {
            from: "/blog/fuerteventura-the-european-winter-surf-destination",
            to:
              "secondwavesurfing.com/blog/fuerteventura-the-european-winter-surf-destination",
          },
          {
            from: "/blog/big-city-surf-escape-in-hong-kong",
            to: "secondwavesurfing.com/blog/big-city-surf-escape-in-hong-kong",
          },
          {
            from: "/blog/product-insights-organic-surf-wax-by-bee-swell",
            to:
              "secondwavesurfing.com/blog/product-insights-organic-surf-wax-by-bee-swell",
          },
          {
            from: "/blog/where-to-find-used-surfboards",
            to: "secondwavesurfing.com/blog/where-to-find-used-surfboards",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
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
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: "https://shop.eisbach-riders.com/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-130658859-1", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
        },
        googleTagManager: {
          trackingId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-tagmanager", // default
          dataLayerName: "dataLayer", // default
        },
        facebookPixel: {
          pixelId: "", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-facebook-pixel", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
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
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/logos/logo.png`,
      },
    },
    "gatsby-theme-material-ui",
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
