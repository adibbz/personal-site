require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: 'Andrew Dibb',
    description: 'Andrew Dibb, a Front End Engineer from Nashville, TN, who is passionate about all things front end web.'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: ['src/styles']
        }
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.S3_BUCKET_NAME,
        acl: null
      },
    }
  ],
}
