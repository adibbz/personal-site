import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/main.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
          {children}
      </>
    )}
  />
)

export const Head = ({ data }) => (
  <>
    <html lang="en" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.title} />
      <meta name="keywords" content="web development, front-end, ui, ui engineer" />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
