import React from 'react';
import './Projects.css';
import './Button.css';
import img1 from "../images/BuildAQuiz.png";
import img2 from "../images/PortfolioSite.jpg";
import img3 from "../images/eat-this.jpg";
import Fade from 'react-reveal/Fade';

function Projects(props) {
    return (
        <section className='projects-section'>
            <div className="projects-wrapper">
                <Fade>
                    <h2 className="projects-title" id="projects">Projects</h2>
                </Fade>
                
                <div className="inner-wrapper">
                <Fade>
                        <div className="project">
                            <div className="project-text">
                                <h4 className="project-num">Proj 01.</h4>
                                <h3 className="project-title">Eat This</h3>
                                <div className="paragraph-background">
                                    <p className="project-paragraph">A web app built to help you find recipes, fit them into a meal plan, and add their ingredients to a shopping list. Utilizes React useState to store data from user input and useEffect to update API results upon search. I used this project as an opportunity to teach myself SASS and to practice React Router, and handling data from an API.</p>
                                </div>
                                <ul className ='project-list'>
                                    <li className=""><span className="diamond">✦</span>  React</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  JavaScript</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  SASS</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  React Router</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  JSON</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  API</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  CSS</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  HTML</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  Netlify</li>
                                </ul>
                                <div className="project-btn">
                                    <a href="https://github.com/WAbby404/eat-this" target="_blank" rel="noopener noreferrer"><button className="btn btn--outline-small">Github</button></a>
                                    <a href="https://eat-this-abbyw.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="btn btn--outline-small">Live</button></a>
                                </div>
                            </div>
                            <img src={img3} className="project-img" alt="Eat This homepage"/>
                        </div>
                    </Fade>

                    <Fade>
                        <div className="project opposite-img">
                            <img src={img1} className="project-img" alt="Build a Quiz Screenshot"/>
                            <div className="project-text">
                                <h4 className="project-num opposite">Proj 02.</h4>
                                <h3 className="project-title opposite">Build a Quiz</h3>
                                <div className="paragraph-background opposite">
                                    <p className="project-paragraph">An editable quiz game that lets users create quizzes based on topics inputted by the user. Uses React, managing state with useState, referencing elements on the DOM through useRef, and taking in data from a form.</p>
                                </div>
                                <ul className ='project-list opposite'>
                                    <li className="project-list-item"><span className="diamond">✦</span>  React</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  JavaScript</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  CSS</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  HTML</li>
                                </ul>
                                <div className="project-btn opposite">
                                    <a href="https://github.com/WAbby404/Build-a-Quiz" target="_blank" rel="noopener noreferrer"><button className="btn btn--outline-small">Github</button></a>
                                    <a href="https://build-a-quiz-abbyw.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="btn btn--outline-small">Live</button></a>
                                </div>
                            </div>
                        </div>
                    </Fade>
    
                    <Fade>
                        <div className="project">
                            <div className="project-text">
                                <h4 className="project-num">Proj 03.</h4>
                                <h3 className="project-title">Portfolio Site</h3>
                                <div className="paragraph-background">
                                    <p className="project-paragraph">This is the second version of my Portfolio site, now built in React with animations, better responsive behavior and a form to send me an email. This project demonstrates managing state, taking in data from a from, and the use of packages to enhance user experience.</p>
                                </div>
                                <ul className ='project-list'>
                                    <li className=""><span className="diamond">✦</span>  React</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  JavaScript</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  CSS</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  HTML</li>
                                </ul>
                                <div className="project-btn">
                                    <a href="https://github.com/WAbby404/portfolio-redo" target="_blank" rel="noopener noreferrer"><button className="btn btn--outline-small">Github</button></a>
                                    <a href="https://wabby404.github.io/portfolio-redo/" target="_blank" rel="noopener noreferrer"><button className="btn btn--outline-small">Live</button></a>
                                </div>
                            </div>
                            <img src={img2} className="project-img" alt="Portfolio site Hero"/>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default Projects;