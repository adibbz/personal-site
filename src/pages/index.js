import React from 'react'
import '../styles/home.scss'
import Layout from '../components/layout'
import SocialList from '../components/social-list'
import { Helmet } from 'react-helmet'

class IndexPage extends React.Component {

    render() {
        return (
            <Layout>
             <Helmet title="Andrew Dibb | Home"></Helmet>
                <div className="home-wrapper">
                    <div id="main">
                            <div className="content">
                                <h1>Andrew Dibb</h1>
                                <hr className="line" />
                                <h4>I am a front end developer</h4>
                                <SocialList />
                            </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default IndexPage