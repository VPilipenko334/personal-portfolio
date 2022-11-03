import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

const HomePage = () => {

    return (
        <div className="terminal-outer">
            <div className="terminal-inner">
                <TopBar />

                <NavBar />
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
                    <h3>*this portfolio page was created by me using React.</h3>
                </div>
            </div>
        </div>
    )
}
export default HomePage;