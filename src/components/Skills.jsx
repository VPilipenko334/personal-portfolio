import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
import TopBar from "./TopBar";

const Skills = () => {

    return (
        <div className="terminal-outer">
            <div className="terminal-inner">
                <TopBar/>

                <NavBar/>

                <ul class="skills-list">
                    <li class="skill-icon">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="skill-image" />
                        <p  id="icon-text">JavaScript</p>
                    </li>



                    <li class="skill-icon">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" className="skill-image" />
                        <p id="icon-text">Ruby</p>
                    </li>


                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" className="skill-image" />
                            <p id="icon-text">JQuery</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" className="skill-image" />
                            <p id="icon-text">MongoDB</p>
                        </li>




                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="skill-image" />
                            <p id="icon-text">Node.js</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" className="skill-image" />
                            <p id="icon-text">NPM</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="skill-image" />
                            <p id="icon-text">PostgreSQL</p>
                        </li>


                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" className="skill-image" />
                            <p id="icon-text">Rails</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="skill-image" />
                            <p id="icon-text">React</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className="skill-image" />
                            <p id="icon-text">Redux</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="skill-image" />
                            <p id="icon-text">VS Code</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" className="skill-image" />
                            <p id="icon-text">Webpack</p>
                        </li>





                        {/* <!-- <h2>Web Design:</h2> --> */}



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" className="skill-image" />
                            <p id="icon-text">Canva</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="skill-image" />
                            <p id="icon-text">CSS</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="skill-image" />
                            <p id="icon-text">HTML</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="skill-image" />
                            <p id="icon-text">Figma</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" className="skill-image" />
                            <p id="icon-text">Photoshop</p>
                        </li>





                        {/* <!-- <h2>Other:</h2> --> */}



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="skill-image" />
                            <p id="icon-text">Github</p>
                        </li>



                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" className="skill-image" />
                            <p id="icon-text">Heroku</p>
                        </li>


                        <li class="skill-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" className="skill-image" />
                            <p id="icon-text">AWS</p>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;