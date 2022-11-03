import React from "react";
import { Link } from "react-router-dom";
import NavBar from './NavBar'
import TopBar from "./TopBar";

const Projects = () => {

    return (
        <div className="terminal-outer">
            <div className="terminal-inner">
                <TopBar />
                <NavBar />
                <div className="heading-top">Projects</div>

                <div className="info" id="heading1">
                    ~/InAFlash
                </div>

                <div className="info-inner">
                    <a href="https://inaflash.herokuapp.com/#/" target="_blank"><img src="/InAFlash.png" className="project-pictures" /></a>
                    <p>InAFlash, a 500px clone, is an online photo-sharing platform which allows users to create accounts, upload, view, and share photos.  </p>

                    <b><i>Frontend Frameworks:</i></b> React, Redux, AJAX, Webpck, Google Maps API <br />
                    <b><i>Backend Frameworks:</i></b> Ruby on Rails, PostgrSQL, AWS S3, BCrypt  <br />

                    <br />

                    <a href="https://github.com/VPilipenko334/InAFLASH" target="_blank" id="link"><i class="fa-brands fa-github fa-3x" id="social-link"></i></a>
                    &nbsp; &nbsp;
                    <a href="https://inaflash.herokuapp.com/#/" target="_blank" id="link"><i class="fa-solid fa-arrow-up-right-from-square fa-3x" id="social-link"></i></a>
                </div>
                <br />

                <div className="info" id="heading2">
                    ~/GreenMarket
                </div>

                <div className="info-inner">
                    <a href="https://the-greenmarket.herokuapp.com/" target="_blank"><img src="GreenMarket.png" className="project-pictures" /></a>
                    <p>A MERN stack online directory/ application which allows users to create accounts, browse, purchase and locate local goods and services.  </p>

                    <b><i>Frontend Frameworks:</i></b> React, Redux, Axiox, Sass, Webpack<br />
                    <b><i>Backend Frameworks:</i></b> Node.js, MongoDB, Express, Passport.js, AWS S3<br />
                    <br />

                    <a href="https://github.com/internetmara/GreenMarket/" target="_blank" id="link"><i class="fa-brands fa-github fa-3x" id="social-link"></i></a>
                    &nbsp; &nbsp;
                    <a href="https://the-greenmarket.herokuapp.com/" target="_blank" id="link"><i class="fa-solid fa-arrow-up-right-from-square fa-3x" id="social-link"></i></a>
                    <br />

                </div>

                <br />

                <div className="info" id="heading3">
                    ~/CoffeeHouse-Card-Catch
                </div>

                <div className="info-inner">
                    <a href="https://vpilipenko334.github.io/coffeehouse-card-catch/" target="_blank"><img src="card_catch.png" className="project-pictures" /></a>
                    <p>CoffeeHouse Card Catch is an interactive game that allows players to match cards based on coffee ingredients with one
                        another.</p>

                    <p>The game also has a pop-up instructions module that will greet the player at the beginning of the game, as well as a random coffee recipe generator.</p>

                    <b><i>Made using:</i></b> Vanilla JavaScript, Webpack, HTML, CSS<br /><br />


                    <a href="https://github.com/VPilipenko334/coffeehouse-card-catch" target="_blank" id="link"><i class="fa-brands fa-github fa-3x" id="social-link"></i></a>
                    &nbsp; &nbsp;
                    <a href="https://vpilipenko334.github.io/coffeehouse-card-catch/" target="_blank" id="link"><i class="fa-solid fa-arrow-up-right-from-square fa-3x" id="social-link"></i></a>

                </div>

                <br />

                <div className="info" id="heading1">
                    ~/Portfolio
                </div>

                <div className="info-inner">
                    <Link to="/"><img src="portfolio.png" className="project-pictures" /></Link>
                    <p>
                        The portfolio website that you are reading this on is completely made by me!
                        This is a very special project because once I finished bootcamp, I had sketched out the idea
                        and design for how I wanted to build out my portfolio. I am so happy to say that it's finished now and one of my
                        favorite things that I've ever built - visually and how it's coded out!
                    </p>

                    <b><i>Made using:</i></b> React, Node.js, JavaScript, HTML, CSS<br />

                </div>


                <div className="heading-top">
                    Weblow
                </div>

                <div className="info" id="heading2">
                    ~/RecruitingFromScratch
                </div>

                <div className="info-inner">
                    <a href="https://www.recruitingfromscratch.com/" target="_blank"><img src="rfs.png" className="project-pictures" /></a>
                    <p>
                        Made with webflow -- an online visual editor platform allows users
                        to design, edit and build a website, I came up with the original concept for the design,
                        edited with CSS and HTML and incorporated RFS' data using a SEO.
                    </p>

                    <b><i>Made using:</i></b> Webflow, HTML, CSS<br /><br />
                </div>
            </div>
        </div>
    )
}

export default Projects;