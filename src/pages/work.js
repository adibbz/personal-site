import React from 'react'
import Layout from '../components/layout'
import '../styles/work.scss'

class WorkIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div className="workpage-wrapper">
          <div id="main">
            <div className="content">
              <h1>Work</h1>
              <hr className="line" />
              <section id="work-list">
                <div className="work-item">
                  <h5>01. Custom Website built for G/O Digital<a href="https://www.ridgeviewcommunitynetwork.org/" target="_blank" rel="noopener noreferrer"><i className="icon-link"></i></a></h5>
                  <p>Convert PSD designs into code. Custom provider select form that dynamically changes menu and stores selected provider in cookie. Utilize Wordpress CMS. Built on top of Foundation Starter Theme with SCSS/CSS and Gulp. Custom HTML and PHP page templates.</p>
                </div>
                <div className="work-item">
                  <h5>02. Custom Website - Sample<a href="http://ec2-52-24-120-57.us-west-2.compute.amazonaws.com/" target="_blank" rel="noopener noreferrer"><i className="icon-link"></i></a></h5>
                  <p>This is a sample site to display custom functionality built for client. Built custom employee search using custom posts, custom fields and AJAX. Search by name or zipcode and an AJAX request is made to search for custom posts and return the results in a popup. Utilize Wordpress CMS. Built on top of Foundation Starter Theme with SCSS/CSS and Gulp. Custom HTML and PHP page templates.</p>
                </div>
                <div className="work-item">
                  <h5>03. Streaming Royalties Calculator<a href="http://royaltycalc.com/" target="_blank" rel="noopener noreferrer"><i className="icon-link"></i></a></h5>
                  <p>Side project. Single Page App with custom design. Utilizing Angular 1.5. Version control with Git via command line. It is a simple calculator to help estimate your payout for streams on Spotify, Apple and Tidal. Recieves ~300 views a day and currently running a brand collaboration.</p>
                </div>
                <div className="work-item">
                  <h5>04. Custom Website built for G/O Digital<a href="http://www.principalcharityclassNameic.com/" target="_blank" rel="noopener noreferrer"><i className="icon-link"></i></a></h5>
                  <p>Covert PSD designs into code. Utilize Wordpress CMS. Built on top of Foundation Starter Theme with SCSS/CSS and Gulp. Custom HTML and PHP page templates.</p>
                </div>
                <div className="work-item">
                  <h5>05. Webhost Manager MEAN App<a href="https://powerful-shore-59287.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-link"></i><a href="https://github.com/adibbz/GO-Host_MEAN" target="_blank" rel="noopener noreferrer"><i className="icon-social-github"></i></a></a></h5>
                  <p>Side project. MEAN(Mongo, Express, Angular, Node) App. Data is stored in local Mongo DB and Angular reads, posts, updates and deletes data through Express API. Version control with Git via command line.</p>
                </div>
                <div className="work-item">
                  <h5>06. Personal Website<a href="https://github.com/adibbz/personalSite" target="_blank" rel="noopener noreferrer"><i className="icon-social-github"></i></a></h5>
                  <p>Design and Developement. HTML built with Pug template engine. SCSS/CSS. Animate.css animation library. Barba.js PJAX for page transitions. Custom Gulp file. Version control with Git via command line. </p>
                </div>
                <div className="work-item">
                  <h5>07. Custom Website - Freelance<a href="http://www.morristownrunning.org/" target="_blank" rel="noopener noreferrer"><i className="icon-link"></i></a></h5>
                  <p>Freelance project. Design and Developement. Utilize Wordpress CMS, custom post types and custom fields for results with filter. Built on top of Foundation Starter Theme with SCSS/CSS and Gulp. Custom HTML and PHP page templates. </p>
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