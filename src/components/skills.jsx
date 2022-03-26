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
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50" width="50" />
                        <p>JavaScript</p>
                    </li>



                    <li class="skill-icon">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" height="50" width="50" />
                        <p>Ruby</p>
                    </li>


                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" height="50" width="50" />
                            <p>JQuery</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" height="50" width="50" />
                            <p>MongoDB</p>
                        </li>




                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" width="50" />
                            <p>Node.js</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="50" width="50" />
                            <p>NPM</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="50" width="50" />
                            <p>PostgreSQL</p>
                        </li>


                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" height="50" width="50" />
                            <p>Rails</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" width="50" />
                            <p>React</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="50" width="50" />
                            <p>Redux</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="50" width="50" />
                            <p>VS Code</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" height="50" width="50" />
                            <p>Webpack</p>
                        </li>





                        {/* <!-- <h2>Web Design:</h2> --> */}



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" height="50" width="50" />
                            <p>Canva</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="50" width="50" />
                            <p>CSS</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="50" width="50" />
                            <p>HTML</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="50" width="50" />
                            <p>Figma</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" height="50" width="50" />
                            <p>Photoshop</p>
                        </li>





                        {/* <!-- <h2>Other:</h2> --> */}



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="50" width="50" />
                            <p>Github</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" height="50" width="50" />
                            <p>Heroku</p>
                        </li>


                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" height="50" width="50" />
                            <p>AWS</p>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;