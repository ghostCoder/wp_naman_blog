module.exports = {
  siteMetadata: {
    title: "Naman",
    description: "Work in progress!",
    subtitle: "Work in progress!"
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `chequeredthoughts.wordpress.com`,
        protocol: `https`,
        hostingWPCOM: true,
        useACF: false
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "images"
      }
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: "naman_anand"
      }
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: "static"
      }
    }
  ]
};
