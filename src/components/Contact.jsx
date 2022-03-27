import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

const Contact = () => {

    return (
        <div className="terminal-outer">
            <div className="terminal-inner">
                <TopBar/>
                <NavBar/>
                    <div
                        className="banner-link-outer"
                        onClick={() => window.location = 'mailto:veronika.pilipenko@gmail.com'}
                        id="banner-link">
                        🤎 Click here to send me an email 🤎
                    </div>
                
                <div className="contact-div">
                    
                    <p className="info-inner">
                        Hi, thanks for stopping by! <br/>
                        I hope you enjoyed my portfolio.<br />
                        For any requests, inquiries or just to chat, please reach out 
                        using the information below. <br />
                        I am open to opportunities, contract work or just to make a new friend!
                    </p>

                    <div className="info" id="heading1">
                        ~Veronika-Pilipenko/Email
                    </div>

                        <p className="info-inner">
                        veronika.pilipenko@gmail.com <br/>
                        veronikalikestocode@gmail.com
                        </p>

                    <div className="info" id="heading2">
                        ~Veronika-Pilipenko/Phone-Number
                    </div>
                        
                        <p className="info-inner">
                        (646)-283-6114
                        </p>

                    <div className="info" id="heading3">
                        ~Veronika-Pilipenko/Socials
                    </div>
                        <p className="info-inner">
                        you can also find me on 
                        <a href="https://www.linkedin.com/in/veronikapilipenko/" className="social-link" target="_blank">Linkedin, </a>
                        <a href="https://angel.co/u/veronika-pilipenko" className="social-link" target="_blank">AngelList, </a> and 
                        <a href="https://github.com/VPilipenko334" className="social-link" target="_blank">Github.</a>
                        </p>

                    <p className="info-inner">
                        Goodbye!
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Contact;