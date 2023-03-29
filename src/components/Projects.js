import React from 'react';
import './Projects.css';
import './Button.css';
import img1 from "../images/BuildAQuiz.png";
import img2 from "../images/PortfolioSite.jpg";
import floorsLikeGlass from "../images/floors-like-glass.jpg";
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
                                <h3 className="project-title">Floors Like Glass</h3>
                                <div className="paragraph-background">
                                    <p className="project-paragraph">A Flooring Contractor website, designed & built for client based out of New Hampton, NY.  Curated reusable React components to keep updates simple and effortless. Delivers a speedy and reliable website using React, React Router, NPM and optimized with PageSpeed Insights. </p>
                                </div>
                                <ul className ='project-list'>
                                    <li className=""><span className="diamond">✦</span>  React</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  JavaScript</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  React Router</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  CSS</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  HTML</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  Acessibility</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  Netlify</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  NPM</li>
                                    <li className="project-list-item"><span className="diamond">✦</span>  Figma</li>
                                </ul>
                                <div className="project-btn">
                                    <a href="https://github.com/WAbby404/floors-like-glass" target="_blank" rel="noopener noreferrer"><button className="btn btn--outline-small">Github</button></a>
                                    <a href="https://floorslikeglass.com/" target="_blank" rel="noopener noreferrer"><button className="btn btn--outline-small">Live site</button></a>
                                </div>
                            </div>
                            <img src={floorsLikeGlass} className="project-img" alt="Floors Like Glass Website"/>
                        </div>
                    </Fade>
                    <Fade>
                        <div className="project">
                            <div className="project-text">
                                <h4 className="project-num">Proj 02.</h4>
                                <h3 className="project-title">Eat This</h3>
                                <div className="paragraph-background">
                                    <p className="project-paragraph">A web app built to help you find recipes, meal plan, and create shopping lists. Utilizes Edamam API to retrieve recipe information, relies on CRUD opertaions to make interactive shopping lists, and directs app state & inter-process communication with React Hooks. I also took this opportunity to practice with SASS and React Router.</p>
                                    <p className="project-sidenote">*If recipes do not load, please try again in a few minutes*</p>
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
                                    <a href="https://eat-this-abbyw.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="btn btn--outline-small">Live site</button></a>
                                </div>
                            </div>
                            <iframe width="500" height="315" src="https://www.youtube.com/embed/hiXg5HfBSiE" title="YouTube video player - Eat This Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                    </Fade>

                    <Fade>
                        <div className="project opposite-img">
                            <img src={img1} className="project-img" alt="Build a Quiz Screenshot"/>
                            <div className="project-text">
                                <h4 className="project-num opposite">Proj 03.</h4>
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
                                <h4 className="project-num">Proj 04.</h4>
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