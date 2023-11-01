import React from 'react'
import '../styles/home.scss'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faCircleInfo, faBarsStaggered, faExternalLink, faTimes } from '@fortawesome/free-solid-svg-icons';



class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { infoOpen: false, workOpen: false };
    }

    handleInfoClick = () => {
        this.setState({ infoOpen: !this.state.infoOpen, workOpen: false });
    }


    handleWorkClick = () => {
        this.setState({ workOpen: !this.state.workOpen, infoOpen: false });
    }

    render() {
        return (
            <Layout>
             <Helmet title="Andrew Dibb | Home"></Helmet>
                <div className="home-wrapper">
                    <div className="container">
                        <div id="main">
                            <div className="col content animate__animated animate__fadeIn animate__slow">
                                <div className="name">
                                    <h1>Andrew Dibb</h1>
                                    <h4>UI Engineer</h4>
                                </div>
                                <span>

                                </span>
                                <button className={"icon info " + (this.state.infoOpen ? "show-text-block" : "")}
                                      onClick={this.handleInfoClick}>
                                    <FontAwesomeIcon icon={!this.state.infoOpen ? faCircleInfo : faTimes} />
                                    <section className="text-block animate__animated animate__fadeIn">
                                        <p>Hello! I am Andrew Dibb, a UX engineer from Nashville, TN, who is passionate about all things front end web. I'm a self-starter who is very enthusiastic about learning and have a strong work ethic. Email me to talk about working together or just say hello!</p>
                                    </section>
                                </button>
                                <button className={"icon work " + (this.state.workOpen ? "show-text-block" : "")}
                                      onClick={this.handleWorkClick}>
                                    <FontAwesomeIcon icon={!this.state.workOpen ? faBarsStaggered : faTimes} />
                                    <section className="text-block animate__animated animate__fadeIn">
                                        <h4>Currently:</h4>
                                        <h2>Single Inc.</h2>
                                        <p>Primary developer for all user interfaces including main Artist Admin Dashboard, fan-facing BoostLink landing pages, Shopify product templates, transactional email templates, and more. Using Angular, Typescript, Redux/NgRx, SCSS/Bootstrap and more. Check out our <a href="https://single.xyz" target="_blank" rel="noopener noreferrer">product</a>.</p>

                                        <div class="resume-block">
                                            <a href="https://drive.google.com/file/d/0B7T-FgaP1kHeQXg4YUJWYVlhYms/view?usp=sharing&resourcekey=0-hbrSWZUO_TQkOI_JxX-KQQ" target="_blank" rel="noopener noreferrer">
                                                <span>View my full résumé</span>
                                                 <FontAwesomeIcon icon={faExternalLink} />
                                            </a>
                                        </div>
                                    </section>
                                </button>
                                <a className="icon linkedIn" href="https://www.linkedin.com/in/adibb/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a className="icon instagram" href="https://www.instagram.com/andrewdibb/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a className="icon paper-plane" href="mailto:andrewdibb@gmail.com">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </a>
                            </div>
                            {/* <div className="col image animate__animated animate__fadeInRight">
                                <div className="main-image"></div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default IndexPage