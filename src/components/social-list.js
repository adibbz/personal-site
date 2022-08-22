import React from 'react'

const SocialList = ({ data }) => (
  <ul className="social-list">
    <li><a href="https://www.linkedin.com/in/adibb/" target="_blank" rel="noopener noreferrer"><i className="icon-social-linkedin"></i><span>linkedIn</span></a></li>
    <li><a href="https://www.instagram.com/andrewdibb/" target="_blank" rel="noopener noreferrer"><i className="icon-social-instagram"> </i><span>instagram</span></a></li>
    <li><a href="mailto:andrewdibb@gmail.com"><i className="icon-envelope"> </i><span>email</span></a></li>
  </ul>
)
export default SocialList;