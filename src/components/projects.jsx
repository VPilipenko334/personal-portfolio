import React from "react";
import { Link } from "react-router-dom";
import NavBar from './NavBar'

const AboutMe = () => {

    return (
        <div className="terminal-outer">
            <div className="terminal-inner">
                <div className="terminal-tabs">
                    <Link to="/"><button className="red"></button></Link>
                    <button className="yellow"></button>
                    <button className="green"></button>
                </div>
                    <NavBar/>
                    
                <div className="info" id="heading1">
                    ~/InAFlash
                </div>

                <div className="info-inner">
                    <a href="https://inaflash.herokuapp.com/#/" target="_blank"><img src="InAFlash.png" className="project-pictures" /></a>
                    <p>InAFlash, a 500px clone, is an online photo-sharing platform which allows users to create accounts, upload, view, and share photos.  </p>

                    Frontend Frameworks: React, Redux, AJAX, Webpck, Google Maps API <br />
                    Backend Frameworks: Ruby on Rails, PostgrSQL, AWS S3, BCrypt  <br />

                    <br/>

                    <a href="https://github.com/VPilipenko334/InAFLASH" target="_blank" id="link"><i class="fa-brands fa-github fa-3x"></i></a>
                    &nbsp; &nbsp;
                    <a href="https://inaflash.herokuapp.com/#/" target="_blank" id="link"><i class="fa-solid fa-arrow-up-right-from-square fa-3x"></i></a>
                </div>

                <br />

                <div className="info" id="heading2">
                    ~/GreenMarket
                </div>

                <div className="info-inner">
                    <a href="https://the-greenmarket.herokuapp.com/" target="_blank"><img src="GreenMarket.png" className="project-pictures" /></a>
                    <p>A MERN stack online directory/ application which allows users to create accounts, browse, purchase and locate local goods and services.  </p>

                    Frontend Frameworks: React, Redux, Axiox, Sass, Webpack<br />
                    Backend Frameworks: Node.js, MongoDB, Express, Passport.js, AWS S3<br />
                    <br />

                    <a href="https://github.com/internetmara/GreenMarket/" target="_blank" id="link"><i class="fa-brands fa-github fa-3x"></i></a>
                    &nbsp; &nbsp;
                    <a href="https://the-greenmarket.herokuapp.com/" target="_blank" id="link"><i class="fa-solid fa-arrow-up-right-from-square fa-3x"></i></a>
                <br />

                </div>

                <br />

                <div className="info" id="heading3">
                    ~/CoffeeHouse-Card-Catch
                </div>

                <div className="info-inner">
                    <a href="https://vpilipenko334.github.io/coffeehouse-card-catch/" target="_blank"><img src="card_catch3.png" className="project-pictures" /></a>
                    <p>CoffeeHouse Card Catch is an interactive game that allows players to match cards based on coffee ingredients with one
                        another.</p>

                    <p>The game also has a pop-up instructions module that will greet the player at the beginning of the game, as well as a random coffee recipe generator.</p>

                    Vanilla JavaScript, Webpack, HTML, CSS<br /><br />


                    <a href="https://github.com/VPilipenko334/coffeehouse-card-catch" target="_blank" id="link"><i class="fa-brands fa-github fa-3x"></i></a>
                    &nbsp; &nbsp;
                    <a href="https://vpilipenko334.github.io/coffeehouse-card-catch/" target="_blank" id="link"><i class="fa-solid fa-arrow-up-right-from-square fa-3x"></i></a>
                        
                </div>
            </div>
        </div>
    )
}

export default AboutMe;