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
                                I'm Abby, I'm a self taught software developer with a <span className="pink">degree in Graphic Design</span>. Since receiving my <span className="pink">Codecademy Front-End Engineer Certificate</span> I have done <span className="pink">freelancing work</span> along with many personal projects.
                                <br/>
                                <br/>
                                I am currently looking for a <span className="pink">Front-End React.js Web Developer</span> position at a company with a dev team that shares my passion for creating powerful websites & web apps. Being part of a team who is eager to share what they know about the vast world of coding is my main goal in my job search.
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