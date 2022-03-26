import React from "react";

const Resume = () => {

    return (
        <div className="terminal-outer">
            <div className="terminal-inner">
                <div className="terminal-tabs">
                    <button className="red"></button>
                    <button className="yellow"></button>
                    <button className="green"></button>
                </div>
                Click below to download my resume:
                <br/>
                <a href="Veronika Pilipenko Resume.pdf" target="_blank" className="resume">Resume</a>
            </div>
        </div>
    )
}

export default Resume;