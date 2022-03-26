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
            </div>
        </div>
    )
}

export default HomePage;