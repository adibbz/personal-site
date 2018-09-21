import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <nav id="site-navigation" role="navigation">
    <ul>
      <li>
        <Link to="/">
          <span>+ home</span>
        </Link>
      </li>
      <li>
        <Link to="/about/">
          <span>+ about</span>
        </Link>
      </li>
      <li>
        <Link to="/work/">
          <span>+ work</span>
        </Link>
      </li>
      <li>
        <Link to="/blog/">
          <span>+ blog</span>
        </Link>
      </li>
    </ul>
  </nav>
)
