import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade';
import resume from '../images/Resume_Abby_Waddell.pdf';


function Contact(props) {
    const form = useRef();
    const [success, setSuccess] = useState(false);


    // Built with Email.js - sends an email to myself with info from the form
    const sendEmail = (e) => {
        e.preventDefault();

        console.log(e);

        if(e.target)
    
        emailjs.sendForm('service_185gmlu', 'template_gsb2ino', form.current, 'W-EOG31wqYEI-lsjv')
          .then((result) => {
              console.log(result.text);
              setSuccess(true);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();

        // make a box appear that says email was successful! Thank you~
      };

    useEffect(() => {

        if(success === true){
            const interval = setInterval(() => {
                setSuccess(false);
            }, 10000);
            return () => clearInterval(interval);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success]);

    return (
        <div>
            <footer className="contact-section">
                <div className="contact-wrapper">
                    <Fade>
                        <div className="contact-intro" id="contact">
                            <h3 className="contact-subtitle">Interested?</h3>
                            <h2 className="contact-title">Get in contact with me!</h2>
                            <p className="contact-paragraph">If you are interested in my work, shoot me an email! I post updates to my site, github and social medias frequently, and am constantly working on new projects. I would love to hear from you. Thanks for visiting!</p>
                        </div>
                    </Fade>

                    <div className="contact-info-flex">
                        <div className="contact-info">
                            <Fade>
                                <h4 className="contact-logo-text">Abby Waddell</h4>
                                <hr/>
                                    <a className="contact-link" href={resume} target="_blank" rel="noopener noreferrer">
                                        <i className="fa-solid fa-file fa-2x highlight-icon"></i>
                                        <div className="contact-link-text">Resume</div>
                                    </a>
                                    <a className="contact-link" href="mailto:Wabby.404@gmail.com">
                                        <i className="fa-solid fa-envelope fa-2x highlight-icon"></i>
                                        <div className="contact-link-text">Wabby.404@gmail.com</div>
                                    </a>

                                    <a className="contact-link" href="https://www.linkedin.com/in/abbywaddell4042/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin fa-2x highlight-icon"></i>
                                        <div className="contact-link-text">/abbywaddell4042</div>
                                    </a>
                                    <a className="contact-link" href="https://github.com/WAbby404" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-square-github fa-2x highlight-icon"></i>
                                        <div className="contact-link-text">/WAbby404</div>
                                    </a>
                            </Fade>

                        </div>
                        <Fade>
                            <div>
                                <form className='contact-form' ref={form} onSubmit={sendEmail}>
                                        <h4 className="form-title">Send me an Email</h4>
                                        <input placeholder="Name" type='text' className="small-input" name="name" required/>
                                        <input placeholder="Your Email" type='email' className="small-input" name="email" required/>
                                        <textarea placeholder="Message" name="message" required/>
                                        <input type="submit" value="Send"/>
                                        { success ? <div className="success-box">Email was a success!</div> : <div className="hide">Email was a success!</div>}
                                </form>
                            </div>
                        </Fade>
                    </div>
                </div>
            </footer>
            <div className="contact-built-by">Built by Abby Waddell 2022</div>
        </div>
    );
}

export default Contact;