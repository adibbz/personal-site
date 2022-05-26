import React from 'react'
import '../styles/about.scss'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll';

class AboutIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Andrew Dibb | About"></Helmet>
        <div className="about-wrapper">
          <div id="main">
            <ScrollAnimation className="content" animateIn="fadeIn" animateOnce={true} duration={2}>
              <h1>About</h1>
              <hr className="line" />
              <p>Hello! I am Andrew Dibb, a UX engineer from Nashville, TN, who is passionate about all things front end web. I'm  a self-starter who is very enthusiastic about learning and have a strong work ethic. <a href="mailto:andrewdibb@gmail.com">Email</a> me to talk about working together or just say hello!</p>
              <h5>Things I use:</h5>
              <ul className="cols">
                <li>Angular</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Ionic</li>
                <li>React Native</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>Figma</li>
                <li>Sketch</li>
                <li>Photoshop</li>
              </ul>
              {/* <h5>Things I'm Learning:</h5>
              <p>React, React Native, Project management</p> */}
              <h5>In my free time:</h5>
              <ul>
                <li>Running and Working Out</li>
                <li>Hanging out with my wife and daughter</li>
                <li>Everything Green Bay Packers #gopackgo</li>
                <li>Discovering new music</li>
                <li>Reading a good book</li>
              </ul>
              <a className="btn" href="https://drive.google.com/open?id=0B7T-FgaP1kHeQXg4YUJWYVlhYms" target="_blank" rel="noopener noreferrer">Download Résumé</a>
            </ScrollAnimation>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AboutIndex