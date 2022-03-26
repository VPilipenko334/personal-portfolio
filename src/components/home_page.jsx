import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const HomePage = () => {

    return (
        <div className="terminal-outer">
            <div className="terminal-inner">
                <div className="terminal-tabs">
                    <button className="red"></button>
                    <button className="yellow"></button>
                    <button className="green"></button>
                </div>
                <div className="background">
                    <Link to="/about" className="homepage-links">About Me</Link>
                    <Link to="/projects" className="homepage-links">Projects</Link>
                    <Link to="/skills" className="homepage-links">Skills</Link>
                    <Link to="/resume" className="homepage-links">Resume</Link>
                    <Link to="/contact" className="homepage-links">Contact</Link>
                </div>
                <div className="outer-homepage-container">
                    <div className="about-me">
                    <h1>Hi, I'm Veronika Pilipenko.</h1>
                    <h2>A fullstack software engineer with a passion for creating.</h2>
                    <h3>veronika.pilipenko@gmail.com</h3>
                    {/* <p> This portfolio was created by me using React!</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;