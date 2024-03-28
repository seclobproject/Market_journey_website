import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import logo from '../assets/images/logo/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    const [mail, setMail] = useState('')

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('message', mail)

        try {
            await fetch('https://formspree.io/f/xyyrdbwj', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            alert('Message sent successfully!');
            setMail('')
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message. Please try again later.');
        }
    };
    const scrollTop =()=>{
            window.scrollTo({ top: 0 });
    }
    return (
        <footer className="footer footer__2 pt-120">
            <div className="container">
                <div className="row mt-none-50 justify-content-center">
                    <div className="col-xl-2 col-lg-3 mt-50">
                        <Link onClick={scrollTop} className="footer__logo" to="/"
                        ><img src={logo} alt="logo"
                            /></Link>
                    </div>
                    <div className="col-xl-2 col-lg-4 mt-50 pl-45 pr-0">
                        <div className="footer-widget footer-widget__2">
                            <h4 className="widget-title">Market Journey</h4>
                            <ul>
                                <li onClick={scrollTop}>
                                    <Link to="/"
                                    ><FontAwesomeIcon icon={faAngleRight} /> Home</Link>
                                </li>
                                <li onClick={scrollTop}>
                                    <Link to="/about"
                                    ><FontAwesomeIcon icon={faAngleRight} /> About</Link>
                                </li>
                                <li onClick={scrollTop}>
                                    <Link to="/service"
                                    ><FontAwesomeIcon icon={faAngleRight} /> Service</Link>
                                </li>
                                {/* <li onClick={scrollTop}>
                                    <Link to="/article"
                                    ><FontAwesomeIcon icon={faAngleRight} /> Article</Link>
                                </li> */}
                                {/* <li onClick={scrollTop}>
                                    <Link to="/contact"
                                    ><FontAwesomeIcon icon={faAngleRight} />Contact</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-5 mt-50 pl-70 pr-0">
                        <div className="footer-widget footer-widget__2">
                            <h4 className="widget-title">Get Help</h4>
                            <div className="recent-news mt-none-20">
                                <div className="recent-news__content mt-20">
                                    <Link onClick={scrollTop} className="recent-news__title" to="/contact"
                                    >Contact Us</Link>
                                    {/* <a className="recent-news__date" href="news-details"
                                  >Sep 20. 2020</a
                                  > */}
                                </div>
                                <div className="recent-news__content mt-10">
                                    <Link className="recent-news__title" to="/privacy"
                                    >Privacy Policy</Link>
                                    {/* <a className="recent-news__date" href="news-details"
                                  >Sep 21. 2020</a
                                  > */}
                                </div>
                                <div className="recent-news__content mt-10">
                                    <Link className="recent-news__title" to="/terms"
                                    >Terms & Condition</Link>
                                    {/* <a className="recent-news__date" href="news-details"
                                  >Sep 21. 2020</a
                                  > */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-lg-6 mt-50">
                        <div className="footer-widget footer-widget__2">
                            <div className="newslater">
                                <h4 className="newslater__title">Subscribe to our Newsletter</h4>
                                <div className="newslater__form">
                                    <form onSubmit={sendEmail} action="">
                                        <input
                                            onChange={(e) => setMail(e.target.value)}
                                            type="email"
                                            name="email"
                                            required
                                            id="email"
                                            placeholder="Enter Email"
                                        /><button type="submit">
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom footer__bottom--2 mt-115">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 my-auto">
                            <div className="copyright-text">
                                <p>
                                    Copyright ©
                                    <Link onClick={scrollTop} to="/"
                                    >Market journey</Link>
                                    All Rights Reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="social__links social__links--2">
                                <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="/"><FontAwesomeIcon icon={faPinterest} /></a>
                                <a href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer