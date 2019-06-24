import React from 'react'
import '../styles/home.scss'
import Layout from '../components/layout'
import SocialList from '../components/social-list'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll';

class IndexPage extends React.Component {

    render() {
        return (
            <Layout>
             <Helmet title="Andrew Dibb | Home"></Helmet>
                <div className="home-wrapper">
                    <div id="main">
                        <ScrollAnimation className="content" animateIn="fadeIn" animateOnce={true} duration={2}>
                            <h1>Andrew Dibb</h1>
                            <hr className="line" />
                            <h4>I am a front end developer</h4>
                            <SocialList />
                        </ScrollAnimation>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default IndexPage