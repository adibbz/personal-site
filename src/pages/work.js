import React from 'react'
import Layout from '../components/layout'
import '../styles/work.scss'
import { Helmet } from 'react-helmet'

class WorkIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Andrew Dibb | Work"></Helmet>
        <div className="workpage-wrapper">
          <div id="main">
            <div className="content">
              <h1>Work</h1>
              <hr className="line" />
              <section id="work-list">
                <div className="work-item">
                  <h5>01. Current Work</h5>
                  <p>Contact me to learn more about what I'm currently working on. I work on a team that foucses on whole systems development for clients using various technologies ranging from Angular/TypeScript front-ends, ASP.NET backends, Windows Services, AWS Lambda, SNS, SQS for automation, and Ionic 3 for cross-platform mobile development.</p>
                </div>
                <div className="work-item">
                  <h5>02. Custom Website built for G/O Digital<a href="https://www.ridgeviewcommunitynetwork.org/" target="_blank" rel="noopener noreferrer"><i className="icon-link"></i></a></h5>
                  <p>Convert PSD designs into code. Custom provider select form that dynamically changes menu and stores selected provider in cookie. Utilize Wordpress CMS. Built on top of Foundation Starter Theme with SCSS/CSS and Gulp. Custom HTML and PHP page templates.</p>
                </div>
                <div className="work-item">
                  <h5>03. Custom Website - Sample<a href="http://ec2-52-24-120-57.us-west-2.compute.amazonaws.com/" target="_blank" rel="noopener noreferrer"><i className="icon-link"></i></a></h5>
                  <p>This is a sample site to display custom functionality built for client. Built custom employee search using custom posts, custom fields and AJAX. Search by name or zipcode and an AJAX request is made to search for custom posts and return the results in a popup. Utilize Wordpress CMS. Built on top of Foundation Starter Theme with SCSS/CSS and Gulp. Custom HTML and PHP page templates.</p>
                </div>
                <div className="work-item">
                  <h5>04. Custom Website built for G/O Digital<a href="http://www.principalcharityclassic.com/" target="_blank" rel="noopener noreferrer"><i className="icon-link"></i></a></h5>
                  <p>Covert PSD designs into code. Utilize Wordpress CMS. Built on top of Foundation Starter Theme with SCSS/CSS and Gulp. Custom HTML and PHP page templates.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default WorkIndex