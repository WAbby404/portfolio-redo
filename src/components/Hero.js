import React from 'react';
import './Hero.css';
import './Button.css';
import ParticleBackground from './ParticleBackground';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import resume from '../images/Resume_Abby_Waddell.pdf';


function Hero(props) {
    return (
        <main>
            <div className="hero-wrapper" id="tsparticles">
                <ParticleBackground />
                <Fade left>
                    <h3 className="hero-small-text">Hi, I'm</h3>
                </Fade>
                <Fade delay={500}>
                    <h1 className="hero-title">Abby Waddell</h1>
                </Fade>
                <Fade delay={1000}>
                    <h2 className="hero-subtitle">I like to work with web pages</h2>
                </Fade>
                <Fade delay={1100}>
                    <p className="hero-paragraph">I'm a software engineer with an interest in building <span>web applications</span>, and a thirst for learning more.</p>
                </Fade>
                <Fade delay={1100} bottom>
                    <div className="btn-flex">
                        <Link smooth={true} to="projects"><button className="btn btn--outline">Projects</button></Link>
                        <Link smooth={true} to="contact"><button className="btn btn--outline">Contact Me</button></Link>
                        <a href={resume} target="_blank" rel="noopener noreferrer"><button className="btn btn--outline">Resume</button></a>
                    </div>
                </Fade>

            </div>
        </main>
    );
}

export default Hero;

