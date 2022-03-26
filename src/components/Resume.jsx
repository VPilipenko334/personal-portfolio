import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Resume = () => {

    return (
        <div className="terminal-outer">
            <div className="terminal-inner">
                <div className="terminal-tabs">
                    <Link to="/"><button className="red"></button></Link>
                    <button className="yellow"></button>
                    <button className="green"></button>
                </div>

                <NavBar/>

                <div className="banner-link-outer">
                    <a href="Veronika Pilipenko Resume.pdf" target="_blank" className="banner-link" id="link">🧡 Click here to download my resume 🧡</a>
                </div>

                <div className="work-experience">
                    <div className="heading-top">Work Experience:</div>
                        <div className="heading-top">Vault Health</div>
                            <div className="info" id="heading1">
                                ~Training-Lead/Customer-Experience-Associate
                            </div>
                                <p className="info-inner">
                                    🐸Coordinated and implemented an onboarding program for new employees; trained 3+ new hires each week <br/>
                                    🐸Managed and organized ongoing technical training, visual aids, and educational material for team-members<br />
                                    🐸Effectively managed and solved 150+ customer service inquires daily<br />
                                    🐸Proficiently worked with technologies such as Slack, Zoom, Kustomer, EMR, Tableau, TalkDesk, and Salesforce<br />
                                </p>

                        <div className="heading-top">Go H20 Swimming</div>
                            <div className="info" id="heading2">
                                ~Founder/Main-Swim-Instructor
                            </div>
                                <p className="info-inner">
                                    🚀Built and managed a clientele of over 50 people; assisting each in their own personal aquatic goals<br />
                                    🚀Developed and managed all marketing and operational efforts including online ads, email blasts, social media<br />
                                    and direct client outreach<br />
                                    🚀Directed all organizational and client operations in order to maximize productivity and company growth<br />
                                    🚀Taught swimming to children and adults ranging from months of age to elderly, including competition level<br />
                                </p>

                </div>
                <div className="skills">
                    <div className="heading-top">Skills:</div>
                    <p className="info-inner">
                        JavaScript, React, Redux, HTML, CSS, Ruby, Ruby on Rails,
                         Mongoose, MongoDB, Node.js, Express.js, SQL, SQLite3, 
                         PostgreSQL, Webpack, jQuery, Git, Heroku, Webflow, WordPress, 
                         SquareSpace, Figma, Canva 
                    </p>

                </div>
                
                <div className="languages">
                    <div className="heading-top">Languages:</div>
                        <p className="info-inner">
                        English, Russian, Spanish(learning)</p>
                </div>
            </div>
        </div>
    )
}

export default Resume;