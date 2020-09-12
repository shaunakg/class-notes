module.exports = {
  siteMetadata: {
    title: 'Class Notes',
    author: 'Shaunak G'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Class notes',
        short_name: 'Class notes',
        start_url: '/',
        background_color: '#0a0a0a',
        theme_color: '#fafafa',
        display: 'minimal-ui',
        icon: `images/icon.png`
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-katex`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
            },
          },
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-143676169-6'
      }
    },
    'gatsby-plugin-offline'
  ],
}
