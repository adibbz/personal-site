import React from 'react'
import '../styles/home.scss'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
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
                <div className="home-wrapper">
                    <div className="container">
                        <div id="main">
                            <div className="col content animate__animated animate__fadeIn animate__slow">
                                <div className="name">
                                    <h1>Andrew Dibb</h1>
                                    <h4>Front End Engineer</h4>
                                </div>
                                <div className={"text-block-wrapper info-wrapper " + (this.state.infoOpen ? "show-text-block" : "")}>
                                    <button className={"icon info " + (this.state.infoOpen ? "show-text-block" : "")}
                                        onClick={this.handleInfoClick}
                                        aria-label="Toggle Info">
                                        <FontAwesomeIcon icon={!this.state.infoOpen ? faCircleInfo : faTimes} />
                                    </button>
                                    <section className="text-block animate__animated animate__fadeIn">
                                        <p>Hello! I am Andrew Dibb, a UI engineer from Nashville, TN, who is passionate about all things front end web. I'm a self-starter who is very enthusiastic about learning and have a strong work ethic. Email me to talk about working together or just say hello!</p>
                                    </section>
                                </div>
                                <div className={"text-block-wrapper work-wrapper " + (this.state.workOpen ? "show-text-block" : "")}>
                                    <button className={"icon work"}
                                        onClick={this.handleWorkClick}
                                        aria-label="Toggle Work">
                                        <FontAwesomeIcon icon={!this.state.workOpen ? faBarsStaggered : faTimes} />
                                    </button>
                                    <section className="text-block animate__animated animate__fadeIn">
                                        <h4>Currently:</h4>
                                        <h2>Single Inc.</h2>
                                        <p>Lead engineer architecting, creating, and maintaining features on the front end. Utilizing Angular, NgRx, Typescript, SCSS and Bootstrap to implement structured component design and NgRx patterns. Check out our <a href="https://single.xyz" target="_blank" rel="noopener noreferrer">product</a>.</p>
                                        <p>I've also been practicing React while learning Next.js and Tailwind CSS. It's been fun bulding a Strava "clone" and you can check it out <a href="https://next-run-tracker.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="strava clone">here</a>.</p>
                                        <div class="resume-block">
                                            <a href="https://drive.google.com/file/d/0B7T-FgaP1kHeQXg4YUJWYVlhYms/view?usp=sharing&resourcekey=0-hbrSWZUO_TQkOI_JxX-KQQ" target="_blank" rel="noopener noreferrer">
                                                <span>View my full résumé</span>
                                                <FontAwesomeIcon icon={faExternalLink} size="xs" />
                                            </a>
                                        </div>
                                    </section>
                                </div>
                                <a className="icon linkedIn" href="https://www.linkedin.com/in/adibb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                {/* <a className="icon instagram" href="https://www.instagram.com/andrewdibb/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a> */}
                                <a className="icon paper-plane" href="mailto:andrewdibb@gmail.com" aria-label="Email">
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

export const Head = () => <title>Andrew Dibb | Home</title>

export default IndexPage