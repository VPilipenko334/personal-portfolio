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
                    <div className="heading-top">Projects</div>
                    
                    <div className="info" id="heading1">
                        ~/InAFlash
                    </div>

                <div className="info-inner">
                    <a href="https://inaflash.herokuapp.com/#/" target="_blank"><img src="https://inaflash.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBNdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0a7b789a193357d5c79bfbf887e8a74637171cb6/InAFlash.png" className="project-pictures" /></a>
                    <p>InAFlash, a 500px clone, is an online photo-sharing platform which allows users to create accounts, upload, view, and share photos.  </p>

                    <b><i>Frontend Frameworks:</i></b> React, Redux, AJAX, Webpck, Google Maps API <br />
                    <b><i>Backend Frameworks:</i></b> Ruby on Rails, PostgrSQL, AWS S3, BCrypt  <br />

                    <br/>

                    <a href="https://github.com/VPilipenko334/InAFLASH" target="_blank" id="link"><i class="fa-brands fa-github fa-3x" id="social-link"></i></a>
                    &nbsp; &nbsp;
                    <a href="https://inaflash.herokuapp.com/#/" target="_blank" id="link"><i class="fa-solid fa-arrow-up-right-from-square fa-3x" id="social-link"></i></a>
                </div>

                <br />

                <div className="info" id="heading2">
                    ~/GreenMarket
                </div>

                <div className="info-inner">
                    <a href="https://the-greenmarket.herokuapp.com/" target="_blank"><img src="https://inaflash.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9ee468d13ccec8eae5bebf7c6304f9be6c10bbfa/GreenMarket.png" className="project-pictures" /></a>
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
                    <a href="https://vpilipenko334.github.io/coffeehouse-card-catch/" target="_blank"><img src="https://inaflash.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBPUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bcf5780e30aff5aed2d6f5d7a76ca643a9410492/card_catch.png" className="project-pictures" /></a>
                    <p>CoffeeHouse Card Catch is an interactive game that allows players to match cards based on coffee ingredients with one
                        another.</p>

                    <p>The game also has a pop-up instructions module that will greet the player at the beginning of the game, as well as a random coffee recipe generator.</p>

                    <b><i>Made using:</i></b> Vanilla JavaScript, Webpack, HTML, CSS<br /><br />


                    <a href="https://github.com/VPilipenko334/coffeehouse-card-catch" target="_blank" id="link"><i class="fa-brands fa-github fa-3x" id="social-link"></i></a>
                    &nbsp; &nbsp;
                    <a href="https://vpilipenko334.github.io/coffeehouse-card-catch/" target="_blank" id="link"><i class="fa-solid fa-arrow-up-right-from-square fa-3x" id="social-link"></i></a>
                        
                </div>

                <br/>

                <div className="info" id="heading1">
                    ~/Portfolio
                </div>

                <div className="info-inner">
                    <Link to="/"><img src="https://inaflash.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBPdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c6dd11521ee052ac680e0bce17c5af297ea55544/portfolio.png" className="project-pictures"/></Link>
                    <p>
                        The portfolio website that you are reading this on is completely made by me!
                        This is a very special project because once I finished bootcamp, I had sketched out the idea
                        and design for how I wanted to build out my portfolio. I am so happy to say that it's finished now and one of my 
                        favorite things that I've ever built - visually and how it's coded out!
                    </p>

                    <b><i>Made using:</i></b> React, Node.js, Webpack, HTML, CSS<br />

                    <p>Oh -- and by the way, I built this entire thing out in less than 24 hours!💖</p>
                </div>


                <div className="heading">
                    Weblow 
                </div>

                <div className="info" id="heading2">
                    ~/RecruitingFromScratch
                </div>

                <div className="info-inner">
                    <a href="https://www.recruitingfromscratch.com/" target="_blank"><img src="https://inaflash.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBQUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dc7e869833ddaf843182cb75bc468cc7904d565d/rfs.png" className="project-pictures" /></a>
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

export default AboutMe;