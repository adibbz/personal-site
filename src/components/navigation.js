import React from 'react'
import Link from 'gatsby-link'
import { Location } from '@reach/router';

export default (props) => {

  return (
    <Location>
      {({ location }) => {
        return <nav id="site-navigation" role="navigation" className={location.pathname === '/' ? 'homeNav' : ''}>
          <ul>
            <li>
              <Link to="/" activeClassName="active">
                <span>+ home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
                <span>+ about</span>
              </Link>
            </li>
            <li>
              <Link to="/work" activeClassName="active">
                <span>+ work</span>
              </Link>
            </li>
            {/* <li>
              <Link to="/blog" activeClassName="active">
                <span>+ blog</span>
              </Link>
            </li> */}
          </ul>
        </nav>
      }}
    </Location>
  )
}
