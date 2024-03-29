import React from 'react';
import './Projects.css';
import './Button.css';
import img2 from "../images/PortfolioSite.jpg";
import floorsLikeGlass from "../images/floors-like-glass.jpg";
import Fade from 'react-reveal/Fade';

function Projects(props) {

    const projects = [
        {
            title: 'Moonlit Financial Dashboard',
            paragraph: 'A login secured financial tracking dashboard. Developed using React, Tailwind, Material UI, JavaScript, Firebase Database & Authentication, Cypress Testing and designed in Figma. *To Demo, login with: Email: demo@gmail.com | Password: password*',
            techList: ['React', 'JavaScript', 'CSS', 'HTML', 'Material UI', 'Tailwind', 'Firebase', 'Github Actions', 'Cypress', 'Figma'],
            liveLink: 'https://financial-dashboard-17bd5.web.app/',
            gitHub: 'https://github.com/WAbby404/financial-dashboard',
            imgOrVideo: <iframe width={window.innerWidth > 600 ? '500' : '300'} height="315" src="https://www.youtube.com/embed/RXZYw_gg6H4?si=MN_YCx8XvoOOUQvG" title="YouTube video player - Moonlit Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
        },
        {
            title: 'Floors Like Glass',
            paragraph: 'A Flooring Contractor website, designed & built for client based out of New Hampton, NY. Curated reusable React components to keep updates simple and effortless. Delivers a speedy and reliable website using React, React Router, NPM and optimized with PageSpeed Insights.',
            techList: ['React', 'JavaScript', 'React Router', 'CSS', 'HTML', 'Accessibility', 'Netlify', 'NPM', 'Figma'],
            liveLink: 'https://floorslikeglass.com/',
            gitHub: 'https://github.com/WAbby404/floors-like-glass',
            imgOrVideo: <img src={floorsLikeGlass} className="project-img proj-img-opposite" alt="Floors Like Glass Website"/>
        },
        {
            title: 'Eat This',
            paragraph: 'A web app built to help you find recipes, meal plan, and create shopping lists. Utilizes Edamam API to retrieve recipe information, relies on CRUD opertaions to make interactive shopping lists, and directs app state & inter-process communication with React Hooks. I also took this opportunity to practice with SASS and React Router.',
            techList: ['React', 'JavaScript', 'Sass', 'React Router', 'JSON', 'API', 'CSS', 'HTML', 'Netlify'],
            liveLink: 'https://eat-this-abbyw.netlify.app/',
            gitHub: 'https://github.com/WAbby404/eat-this',
            imgOrVideo: <iframe width={window.innerWidth > 600 ? '500' : '300'} height="315" src="https://www.youtube.com/embed/hiXg5HfBSiE" title="YouTube video player - Eat This Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>,
        },
        {
            title: 'Portfolio Site',
            paragraph: 'This is the second version of my Portfolio site, now built in React with animations, better responsive behavior and a form to send me an email. This project demonstrates managing state, taking in data from a from, and the use of packages to enhance user experience.',
            techList: ['React', 'JavaScript', 'Css', 'HTML', 'NPM', 'Github Pages', 'Email.js', 'React-reveal', 'Particle.js'],
            liveLink: 'https://wabby404.github.io/portfolio-redo/',
            gitHub: 'https://github.com/WAbby404/portfolio-redo',
            imgOrVideo: <img src={img2} className="project-img" alt="Portfolio site Hero"/>,
        },
        // {
        //     title: '',
        //     paragraph: '',
        //     techList: ['', '', '', '', '', '', ],
        //     liveLink: '',
        //     gitHub: '',
        //     imgOrVideo: ,
        // }
    ]

    return (
        <section className='projects-section'>
            <div className="projects-wrapper">
                <Fade>
                    <h2 className="projects-title" id="projects">Projects</h2>
                </Fade>
                <div className="inner-wrapper">
                    {projects.map((project, index) => {
                        return (
                            <Fade>
                                <div className={`project ${index % 2 > 0 && 'opposite-img'}`}>
                                    <div className="project-text">
                                        <h4 className={`project-num ${index % 2 > 0 && 'opposite'}`}>{`Proj 0${index + 1}.`}</h4>
                                        <h3 className={`project-title ${index % 2 > 0 && 'opposite'}`}>{project.title}</h3>
                                        <div className={`paragraph-background ${index % 2 > 0 && 'opposite'}`}>
                                            <p className="project-paragraph">{project.paragraph}</p>
                                        </div>
                                        <ul className={`project-list ${index % 2 > 0 && 'opposite'}`}>
                                            {project.techList.map((projTech) => {
                                                return (
                                                    <li className="project-list-item"><span className="pink">✦ </span>{projTech}</li>
                                                )
                                            })}
                                        </ul>
                                        <div className={`project-btn ${index % 2 > 0 && 'opposite'}`}>
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn--outline-small">Live Site</a>
                                            <a href={project.gitHub} target="_blank" rel="noopener noreferrer" className="btn btn--outline-small">GitHub</a>
                                        </div>
                                    </div>
                                    {project.imgOrVideo}
                                </div>
                            </Fade>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;