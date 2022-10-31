import React, { useEffect, useState } from 'react';
import './Button.css';
import './Navbar.css';
import logo from '../images/AWlogo.svg';
import { Link } from 'react-scroll';
import resume from '../images/Resume.pdf';


function Navbar(props) {
    const [showNav, setShowNav] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const [clicked, setClicked] = useState(false);

    const clickedBars = () => {
        setClicked(!clicked);
    }

    useEffect(() => {
        const controlNavbar = () => {
            if(window.scrollY > lastScroll){
                setShowNav(false);
                // setClicked(false);
            } else {
                setShowNav(true);
                // setClicked(false);
            }
            setLastScroll(window.scrollY);
        }
        window.addEventListener('scroll', controlNavbar)

        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScroll])

    setTimeout(() => {
        if(lastScroll === 0){
            setShowNav(true);
        }

    }, 2000)

    return (
        <nav className={`${!showNav && 'hide-up'}`}>
            <div className="nav-wrapper">
                <img src={logo} className='logo' alt="Abby Waddell logo"/>
                <div className="nav-logo-text">Abby Waddell</div>
                <i className= {clicked ? "icon fa-solid fa-xmark fa-2x" : "icon fa-solid fa-bars fa-2x"}
                    onClick={ () => clickedBars() }></i>
                <div className= {clicked ? "nav-menu active" : "nav-menu"}>
                    <Link smooth={true} to="about"><button className='btn btn--nav' onClick={() => setClicked(false)}>About</button></Link>
                    <Link smooth={true} to="projects"><button className='btn btn--nav' onClick={() => setClicked(false)}>Projects</button></Link>
                    <Link smooth={true} to="contact"><button className='btn btn--nav' onClick={() => setClicked(false)}>Contact</button></Link>
                    <a href={resume} target="_blank" rel="noopener noreferrer" onClick={() => setClicked(false)}><button className='btn btn--nav'>Resume</button></a>
                </div> 
            </div>
        </nav>
    );
}

export default Navbar;