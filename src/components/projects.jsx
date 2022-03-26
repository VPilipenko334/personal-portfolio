import React from "react";

const AboutMe = () => {

    return (
        <div className="terminal-outer">
            <div className="terminal-inner">
                <div className="terminal-tabs">
                    <button className="red"></button>
                    <button className="yellow"></button>
                    <button className="green"></button>
                </div>
                <div className="info" id="heading1">
                    ~/Portfolio/InAFlash
                </div>

                <div className="info-inner">
                    <img src="InAFlash.png" className="project-pictures" />
                </div>

                <div className="info" id="heading2">
                    ~/Portfolio/GreenMarket
                </div>

                <div className="info-inner">
                    <img src="GreenMarket.png" className="project-pictures" />
                </div>

                <div className="info" id="heading3">
                    ~/Portfolio/CoffeeHouse-Card-Catch
                </div>

                <div className="info-inner">
                    <img src="card_catch3.png" className="project-pictures" />
                </div>

            </div>
        </div>
    )
}

export default AboutMe;