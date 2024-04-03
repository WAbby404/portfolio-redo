import React, { useEffect, useState } from 'react';
import './About.css';
import './Button.css';
import Fade from 'react-reveal/Fade';
import Portfolio from '../images/Portfolio.png';
import Moonlit from '../images/Moonlit.png';
import FloorsLikeGlass from '../images/FloorsLikeGlass.png';
import EatThis from '../images/EatThis.png';

function About(props) {

    const slideImages = [{
        image: Moonlit,
        caption: 'Moonlit - Personal Finance Dashboard'
    },
    {
        image: FloorsLikeGlass,
        caption: 'Floors Like Glass'
    },
    {
        image: EatThis,
        caption: 'Eat This'
    },
    {
        image: Portfolio,
        caption: 'My Portfolio site'
    },
    ]

    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(slide === slideImages.length -1){
                setSlide(0);
            } else {
                setSlide(slide + 1);
            }
          }, 5000);
          return () => clearInterval(interval);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slide]);

    const specialized = ['React', 'JavaScript', 'HTML', 'CSS', 'Git / Github', 'Responsive Design', 'Figma'];
    const exposedTo = ['Cypress', 'Tailwind', 'Sass', 'Material UI', 'React Router', 'Firebase', 'Github Actions', 'APIs', 'NPM'];

    return (
        <div className="about-section">
            <div className="about-wrapper">
                    <Fade>
                        <h2 className="about-title" id="about">About Me</h2>
                    </Fade>
                    <Fade>
                        <div className="about-text-img">
                            <div className="about-text">
                                <p className="about-paragraph">
                                Hello!
                                <br/>
                                I'm Abby, I'm a <span className="pink">Frontend developer</span> who specializes in <span className="pink">React</span>, <span className="pink">JavaScript</span>, <span className="pink">Cypress</span>, <span className="pink">Tailwind</span> and <span className="pink">Figma</span>. My current interests include <span className="pink">TypeScript</span>, <span className="pink">Material UI</span>, and <span className="pink">Firebase</span>. I have about a year of experience in software development and have focused on building applications that are the face of companies on the web.
                                <br/>
                                <br/>
                                As a Frontend developer who is transitioning from freelance work to larger-scale projects, I am looking for a collaborative environment that supports my growth as a Frontend engineer.
                                <br/>
                                <br/>
                                    <span className="pink">Take a look at my projects</span>
                                </p>
                            </div>
                            <div className="about-slideshow">
                                <img src={slideImages[slide].image} className="slideshow-img" alt={slideImages[slide].caption}/>
                                <div className="caption">{slideImages[slide].caption}</div>
                                <div className="slideshow-btns">
                                    {slideImages.map((img, index) => {
                                        return(
                                            <i className={`fa-solid fa-circle ${slide === index && 'highlight'}`} onClick={() => setSlide(index)}></i>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade>
                        <h3 className="about-skills">Tools I'm specialized in</h3>
                        <ul className="skills-list">
                            {specialized.map((tool) => {
                                return(
                                    <li className="skill-list-item"><span className="pink">✦</span> {tool}</li>
                                )
                            })}
                        </ul>
                    </Fade>
                    <Fade>
                        <h3 className="about-skills">Tools I've had exposure to</h3>
                        <ul className="skills-list">
                            {exposedTo.map((tool) => {
                                return(
                                    <li className="skill-list-item"><span className="pink">✦</span> {tool}</li>
                                )
                            })}
                        </ul>
                    </Fade>
            </div>
        </div>
    );
}

export default About;