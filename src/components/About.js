import React, { useState, useEffect } from 'react';
import './About.css';
import './Button.css';
import img1 from '../images/slideshow1.jpg';
import img2 from '../images/slideshow2.jpg';
import img3 from '../images/slideshow3.jpg';
import Fade from 'react-reveal/Fade';

function About(props) {
    const slideImages = [{
        image: img1,
        caption: 'This is my dog Dewie'
    },
    {
        image: img2,
        caption: 'My most recent oil painting of a Metroid'
    },
    {
        image: img3,
        caption: 'This is majority of my plants I own'
    }]

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        if(slide === slideImages.length -1){
            setSlide(0);
        } else {
            setSlide(slide + 1);
        }


    }

    const lastSlide = () => {
        if(slide === 0){
            setSlide(slideImages.length -1);
        } else {
            setSlide(slide - 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
          }, 20000);
          return () => clearInterval(interval);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slide]);


    return (
        <div className="about-section">
            <div className="about-wrapper">
                <div className="about-text about-flex">
                    <Fade>
                        <h2 className="about-title" id="about">About Me</h2>
                    </Fade>
                    <Fade>
                        <p className="about-paragraph">Hello! I'm Abby, I'm a self taught software developer with a degree in Graphic Design. Since receiving my Codecademy Front-End Engineer Certificate I have done Freelancing work along with many personal projects. I am currently looking for a Front-End React.js Web Developer position at a company with a dev team that shares my same passion for creating powerful websites & web apps. Being part of a team who is eager to share what they know about the vast world of coding is my main goal in my job search. In my free time I love to go on hikes with my dog, paint, care for my plants and play many video games!</p>
                    </Fade>
                    <Fade>
                        <h3 className="about-skills">Tools I'm specialized in</h3>
                        <ul className="skills-list">
                            <li className="skill-list-item"><span className="diamond">✦</span> React</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> Javascript</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> HTML</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> CSS</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> Git / Github</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> Responsive Design</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> Figma</li>
                        </ul>
                        <h3 className="about-skills">Tools I've had exposure to</h3>
                        <ul className="skills-list">
                            <li className="skill-list-item"><span className="diamond">✦</span> Cypress</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> Tailwind</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> Sass</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> Material UI</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> React Router</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> Firebase</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> Github Actions</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> APIs</li>
                            <li className="skill-list-item"><span className="diamond">✦</span> NPM</li>
                        </ul>
                    </Fade>
                </div>

                <Fade>
                    <div className="about-slideshow">
                        <div className="img-flex">
                            <div onClick={() => lastSlide()}>
                                <button className="btn btn--slideshow"><i className="fa-solid fa-chevron-left fa-2x"></i></button>
                            </div>
                            <img src={slideImages[slide].image} className="slideshow-img" alt={slideImages[slide].caption}/>
                            <div onClick={() => nextSlide()}>
                                <button className="btn btn--slideshow"><i className="fa-solid fa-chevron-right fa-2x"></i></button>
                            </div>
                        </div>
                        <div className="caption">{slideImages[slide].caption}</div>
                        <div className="img-flex">
                            <i className={`fa-solid fa-circle ${slide === 0 ? 'highlight' : ''}`} onClick={() => setSlide(0)}></i>
                            <i className={`fa-solid fa-circle ${slide === 1 ? 'highlight' : ''}`} onClick={() => setSlide(1)}></i>
                            <i className={`fa-solid fa-circle ${slide === 2 ? 'highlight' : ''}`} onClick={() => setSlide(2)}></i>
                        </div>
                    </div>
                </Fade>
                
            </div>
        </div>
    );
}

export default About;