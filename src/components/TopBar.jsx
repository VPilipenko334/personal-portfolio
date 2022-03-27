import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {

    return (
        <div className="terminal-tabs">
            <Link to="/"><button className="red"></button></Link>
            <button className="yellow"></button>
            <button className="green"></button>
        </div>
    )
}

export default TopBar;