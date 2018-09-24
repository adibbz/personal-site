import React from 'react'
import Link from 'gatsby-link'
import { Location } from '@reach/router';

export default (props) => {
  // className={location.pathname === '/' ? 'homeNav' : ''}
  return (
    <Location>
      {({ location }) => {
        return <nav id="site-navigation" role="navigation" className={location.pathname === '/' ? 'homeNav' : ''}>
          <ul>
            <li>
              <Link to="/">
                <span>+ home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>+ about</span>
              </Link>
            </li>
            <li>
              <Link to="/work">
                <span>+ work</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span>+ blog</span>
              </Link>
            </li>
          </ul>
        </nav>
      }}
    </Location>
  )
}
