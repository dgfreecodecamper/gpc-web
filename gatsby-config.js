module.exports = {
  siteMetadata: {
    title: `Glendermott Presbyterian Church`,
  },
  plugins: [
            `gatsby-plugin-react-helmet`,
            `gatsby-plugin-sass`,
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                // name: `pages`,
                path: `${__dirname}/src/book/`,
              },
            },
            `gatsby-transformer-remark`,
          ],
}
