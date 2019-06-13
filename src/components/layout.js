import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/main.scss'
import Navigation from '../components/navigation'

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
        <Helmet
          title={`${data.site.siteMetadata.title}`}
          meta={[
            { name: 'description', content: data.site.siteMetadata.title },
            { name: 'keywords', content: 'web development, front-end' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Navigation></Navigation>
          {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
