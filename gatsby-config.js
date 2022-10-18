module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "crysna.dev",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'Source Code Pro']
        }
      }
    }
  ],
};
