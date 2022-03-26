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

                Click below to download my resume:
                <br/>
                <a href="Veronika Pilipenko Resume.pdf" target="_blank" className="resume">Resume</a>

                <br/>
                <div className="work-experience">
                    <h2>Work Experience:</h2>
                        <h3>Vault Health</h3>
                            <p>Coordinated and implemented an onboarding program for new employees; trained 3+ new hires each week
                                ● Managed and organized ongoing technical training, visual aids, and educational material for team-members
                                ● Effectively managed and solved 150+ customer service inquires daily
                                ● Proficiently worked with technologies such as Slack, Zoom, Kustomer, EMR, Tableau, TalkDesk, and Salesforce
                            </p>

                        <h3>Go H20 Swimming</h3>
                            <p>● Built and managed a clientele of over 50 people; assisting each in their own personal aquatic goals
                                ● Developed and managed all marketing and operational efforts including online ads, email blasts, social media
                                and direct client outreach
                                ● Directed all organizational and client operations in order to maximize productivity and company growth
                                ● Taught swimming to children and adults ranging from months of age to elderly, including competition level
                            </p>

                </div>
                <div className="skills">
                    <h2>Skills:</h2>
                    <p>JavaScript, React, Redux, HTML, CSS, Ruby, Ruby on Rails,
                         Mongoose, MongoDB, Node.js, Express.js, SQL, SQLite3, 
                         PostgreSQL, Webpack, jQuery, Git, Heroku, Webflow, WordPress, 
                         SquareSpace, Figma, Canva 
                    </p>

                </div>
                
                <div className="languages">
                    <h2>Languages:</h2>
                        <p>English, Russian, Spanish(learning)</p>
                </div>
            </div>
        </div>
    )
}

export default Resume;