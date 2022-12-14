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
                        <p className="about-paragraph">Hello! I'm Abby, I'm a software developer with a background in Graphic Design. I took an interest in computers when I was a kid, and my love for technology only grew when I discovered programming in highschool. In my free time I love to go on hikes with my dog, paint, care for my plants and play many video games!</p>
                    </Fade>
                    <Fade>
                        <h3 className="about-skills">Skills & Tools</h3>
                        <ul className="skills-list">
                            <li className="skill-list-item"><span className="diamond">???</span> React</li>
                            <li className="skill-list-item"><span className="diamond">???</span> Javascript</li>
                            <li className="skill-list-item"><span className="diamond">???</span> HTML</li>
                            <li className="skill-list-item"><span className="diamond">???</span> CSS</li>
                            <li className="skill-list-item"><span className="diamond">???</span> Git</li>
                            <li className="skill-list-item"><span className="diamond">???</span> JSX</li>
                            <li className="skill-list-item"><span className="diamond">???</span> API</li>
                            <li className="skill-list-item"><span className="diamond">???</span> JSON</li>
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