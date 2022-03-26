import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    
    return (
        <div className="tab-links">
            <div className="background">
                <Link to="/about" className="homepage-links">about me &nbsp; < Link to="/"><i className="fa-regular fa-rectangle-xmark" id="closing"></i></Link></Link>
                <Link to="/projects" className="homepage-links">projects &nbsp;< Link to="/"><i className="fa-regular fa-rectangle-xmark" id="closing"></i></Link></Link>
                <Link to="/skills" className="homepage-links">skills &nbsp;< Link to="/"><i className="fa-regular fa-rectangle-xmark" id="closing"></i></Link></Link>
                <Link to="/resume" className="homepage-links">resume &nbsp;< Link to="/"><i className="fa-regular fa-rectangle-xmark" id="closing"></i></Link></Link>
                <Link to="/contact" className="homepage-links">contact &nbsp;< Link to="/"><i className="fa-regular fa-rectangle-xmark" id="closing"></i></Link></Link>
            </div>
        </div>
    )
}

export default NavBar;