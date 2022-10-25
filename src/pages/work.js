import React from 'react'
import Layout from '../components/layout'
import '../styles/work.scss'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll';

class WorkIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Andrew Dibb | Work"></Helmet>
        <div className="workpage-wrapper">
          <div id="main">
            <ScrollAnimation className="content" animateIn="fadeIn" animateOnce={true} duration={2}>
              <h1>Work</h1>
              <hr className="line" />
              <section id="work-list">
                <div className="work-item">
                  <h5>01. Single Music Work</h5>
                  <p>Primary developer for all user interfaces including main Artist Admin Dashboard, fan-facing BoostLink landing pages, Shopify product templates, transactional email templates, and more. Using Angular, Typescript, Redux/NgRx, SCSS/Bootstrap and more. Check out our product: <a href="https://singlemusic.com/" target="_blank" rel="noopener noreferrer">https://singlemusic.com/</a> </p>
                </div>
                <div className="work-item">
                  <h5>02. ResultStack Work</h5>
                  <p>Worked on a team that foucsed on whole systems development for various clients (Including a national restaurant chain, local food startup and more) using various technologies ranging from Angular/TypeScript and React front-ends, ASP.NET and Node.js backends, Windows Services, AWS Lambda, SNS, SQS for automation, React Native and Ionic 3 for cross-platform mobile development.</p>
                </div>
              </section>
            </ScrollAnimation>
          </div>
        </div>
      </Layout>
    )
  }
}

export default WorkIndex