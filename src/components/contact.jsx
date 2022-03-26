import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Contact = () => {

    return (
        <div className="terminal-outer">
            <div className="terminal-inner">
                <div className="terminal-tabs">
                    <Link to="/"><button className="red"></button></Link>
                    <button className="yellow"></button>
                    <button className="green"></button>
                </div>
                email: veronika.pilipenko@gmail.com 
                <br/>
                phone number: (646)-283-6114
                <br/>
                <button 
                    className="contact-button"
                    onClick={() => window.location = 'mailto:veronika.pilipenko@gmail.com'}>
                    Contact Me
                </button>
            
            </div>
        </div>
    )
}

export default Contact;