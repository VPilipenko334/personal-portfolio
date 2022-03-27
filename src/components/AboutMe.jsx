import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

const AboutMe = () => {

    return (
        <div className="terminal-outer">
            <div className="terminal-inner">

                <TopBar/>
                
                <NavBar/>

            <div className="info" id="heading1">
                ~/Desktop/Portfolio/About
            </div>
                <div className="info-inner">
                    My name is Veronika Pilipenko and I am a software
                    engineer based in New York City.

                    I moved to the United States from Uzbekistan at
                    the age of eleven and knew I wanted to do something
                    with technology in my adult career. By the age of
                    thirteen, I had not only learned English as my
                    second language, but started to learn a little bit
                    of HTML and CSS as well. This became my favorite
                    hobby of mine, where I would design and create
                    layouts using code. This was the exact moment that
                    I fell in love with coding -- coding gave me the
                    creative aspect of bringing my ideas and designs
                    to life at the touch of my fingertips.
                </div>

            <div className="info" id="heading2">
                ~/Desktop/Portfolio/Hobbies
            </div>
                <div className="info-inner">

                    When I am not at my computer, I love to spend
                    time outside. I like to hike, bike, and walk
                    with my Australian Shepherd, Mishka. One of my
                    all time favorite things to do is swim. I've
                    been on three different competitive swim teams
                    and have been swimming since I was very young.
                </div>

            <div className="info" id="heading3">
                ~/Desktop/Portfolio/Career
            </div>

            <div className="info-inner">
                Some of the technologies I really enjoy working with are
                Ruby on Rails for backend and JavaScript, React for front-end frameworks. I also really
                enjoy working on with UX/UI and different design
                elements to make websites beautiful.
            </div>

            </div>
        </div>
    )
}

export default AboutMe;