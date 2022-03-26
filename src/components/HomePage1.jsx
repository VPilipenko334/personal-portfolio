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
                <div className="tab-links">
                    <div className="background">
                        <Link to="/about" className="homepage-links">about me &nbsp; <i className="fa-regular fa-rectangle-xmark" id="closing"></i></Link>
                        <Link to="/projects" className="homepage-links">projects &nbsp;<i className="fa-regular fa-rectangle-xmark" id="closing"></i></Link>
                        <Link to="/skills" className="homepage-links">skills &nbsp;<i className="fa-regular fa-rectangle-xmark" id="closing"></i></Link>
                        <Link to="/resume" className="homepage-links">resume &nbsp;<i className="fa-regular fa-rectangle-xmark" id="closing"></i></Link>
                        <Link to="/contact" className="homepage-links">contact &nbsp;<i className="fa-regular fa-rectangle-xmark" id="closing"></i></Link>
                    </div>
                </div>
                <div className="outer-homepage-container">
                    <div className="about-me">
                    <h1>Hi, I'm Veronika Pilipenko.</h1>
                    <h2>A fullstack software engineer with a passion for creating.</h2>
                    <h3>veronika.pilipenko@gmail.com</h3>
                    </div>
                </div>
                <div className="socials">
                    <a href="https://github.com/VPilipenko334" target="_blank" className="social-link"><i className="fa-brands fa-github fa-3x" id="social"></i></a>
                    <a href="https://www.linkedin.com/in/veronikapilipenko/" target="_blank" className="social-link"><i className="fa-brands fa-linkedin fa-3x" id="social"></i></a>
                    <a href="https://angel.co/u/veronika-pilipenko" target="_blank" className="social-link"><i className="fa-brands fa-angellist fa-3x" id="social"></i></a>
                </div>
                <div className="baby-font">
                <p> This portfolio was created by me using React!</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;