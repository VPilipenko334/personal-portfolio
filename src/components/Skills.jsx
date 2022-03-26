import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";

const Skills = () => {

    return (
        <div className="terminal-outer">
            <div className="terminal-inner">
                <div className="terminal-tabs">
                    <Link to="/"><button className="red"></button></Link>
                    <button className="yellow"></button>
                    <button className="green"></button>
                </div>

                <NavBar/>

                <ul class="skills-list">
                    <li class="skill-icon">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="skill-image" />
                        <p>JavaScript</p>
                    </li>



                    <li class="skill-icon">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" className="skill-image" />
                        <p>Ruby</p>
                    </li>


                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" className="skill-image" />
                            <p>JQuery</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" className="skill-image" />
                            <p>MongoDB</p>
                        </li>




                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="skill-image" />
                            <p>Node.js</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" className="skill-image" />
                            <p>NPM</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="skill-image" />
                            <p>PostgreSQL</p>
                        </li>


                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" className="skill-image" />
                            <p>Rails</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="skill-image" />
                            <p>React</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className="skill-image" />
                            <p>Redux</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="skill-image" />
                            <p>VS Code</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" className="skill-image" />
                            <p>Webpack</p>
                        </li>





                        {/* <!-- <h2>Web Design:</h2> --> */}



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" className="skill-image" />
                            <p>Canva</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="skill-image" />
                            <p>CSS</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="skill-image" />
                            <p>HTML</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="skill-image" />
                            <p>Figma</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" className="skill-image" />
                            <p>Photoshop</p>
                        </li>





                        {/* <!-- <h2>Other:</h2> --> */}



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="skill-image" />
                            <p>Github</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" className="skill-image" />
                            <p>Heroku</p>
                        </li>


                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" className="skill-image" />
                            <p>AWS</p>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;