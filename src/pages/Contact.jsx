import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import contactIllustation from '../assets/images/bg/contactillu.webp'
const Contact = () => {
    const [mail,setMail]=useState({})
    useEffect(() => {
        const scrollTop = () => {
            window.scrollTo({ top: 0 });
        }
        scrollTop()
    }, [])

    const sendEmail = async(e) => {
        e.preventDefault();
        
        const formData = new FormData();

        formData.append('name',mail.name)
        formData.append('email',mail.email)
        formData.append('message',mail.message)

        try {
            await fetch('https://formspree.io/f/xyyrdbwj', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            alert('Message sent successfully!');
            setMail({})
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message. Please try again later.');
        }
    };
    return (
        <div>
            <section
                className="breadcrumb-section pt-180 pb-180 bg_contact_img"
                // style={{ backgroundImage: `url(${breadcrumbbg1})`}}
                data-overlay="dark"
                data-opacity="3"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 d-flex pr-0">
                            <div className="breadcrumb-text">
                                <h2 className="breadcrumb-text__title">contact us</h2>
                                <ul className="breadcrumb-text__nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li>-</li>
                                    <li>contact us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="contact-info-area pt-130">
                <div className="container">
                    <div className="row mt-none-30">
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div className="contact-info">
                                <h4 className="contact-info__title">Kozhikode</h4>
                                <p>Briercliff Road Queens</p>
                                <a href="mailto:info@basictheme.com">marketjourney@gmail.com</a
                                ><a href="tel:2025886500">+91 8089530707</a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div className="contact-info">
                                <h4 className="contact-info__title">Malappuram</h4>
                                <p>coming soon...</p>
                                <a href="mailto:info@basictheme.com">marketjourney@gmail.com</a
                                ><a href="tel:2025886500">+91 8089530707</a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div className="contact-info">
                                <h4 className="contact-info__title">thrissur</h4>
                                <p>coming soon...</p>
                                <a href="mailto:info@basictheme.com">marketjourney@gmail.com</a
                                ><a href="tel:2025886500">+91 8089530707</a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div className="contact-info">
                                <h4 className="contact-info__title">Palakkad</h4>
                                <p>coming soon...</p>
                                <a href="mailto:info@basictheme.com">marketjourney@gmail.com</a
                                ><a href="tel:2025886500">+91 8089530707</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="gta-area gta-area__2 pt-125 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="gta-bg__2">
                                <img src={contactIllustation} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 pl-50">
                            <div className="section-header mb-50">
                                <h4 className="sub-heading sub-heading__2 mb-15">
                                    Send Message<span
                                    ><img
                                            src="images/shape/heading-shape-4.png"
                                            className="mr-10"
                                            alt=""
                                        /></span>
                                </h4>
                                <h2 className="section-title section-title__2">Get in Touch</h2>
                            </div>
                            <div className="contact-form">
                                <form onSubmit={sendEmail} action="#" method="POST" id="contact-form">
                                    <div className="form-group mt-25">
                                        <input
                                            type="text"
                                            required
                                            name="name"
                                            id="name"
                                            placeholder="Your Name"
                                            onChange={(e)=>setMail({...mail,name:e.target.value})}
                                        />
                                    </div>
                                    <div className="form-group mt-25">
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            id="mail"
                                            placeholder="Email Address"
                                            onChange={(e) => setMail({ ...mail, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group mt-25">
                                        <textarea
                                            required
                                            name="message"
                                            id="message"
                                            placeholder="Your Message"
                                            onChange={(e) => setMail({ ...mail, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="site-btn site-btn__2 mt-15">
                                        <span className="icon icon__black"
                                        ><FontAwesomeIcon icon={faArrowRight} /></span>
                                        Contact us
                                    </button>
                                    <p className="ajax-response"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="contact-map-area">
                <div id="contact-map">
                    <div className="google-map" id="contact-map">
                        <div
                            style="
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                position: relative;
              "
                        >
                            <div
                                style="
                  width: 100%;
                  height: 100%;
                  left: 0;
                  top: 0;
                  margin: 0;
                  padding: 0;
                  position: absolute;
                "
                            ></div>
                            <div
                                style="
                  width: 50%;
                  height: 50%;
                  left: 50%;
                  top: 50%;
                  margin: 0;
                  padding: 0;
                  position: absolute;
                "
                            >
                                <div
                                    style="
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    margin: 0;
                    padding: 0;
                    position: absolute;
                  "
                                >
                                    <div
                                        style="
                      width: 0;
                      height: 0;
                      left: -349.52533333329484px;
                      top: 0;
                      background-color: transparent;
                      position: absolute;
                    "
                                    >
                                        <div className="circle">
                                            <span className="circleText" title="Round Pond">1</span>
                                        </div>
                                    </div>
                                    <div
                                        style="
                      width: 0;
                      height: 0;
                      left: -139.81013333331794px;
                      top: -74.8746044258587px;
                      background-color: transparent;
                      position: absolute;
                    "
                                    >
                                        <div className="circle">
                                            <span className="circleText" title="The Long Water">2</span>
                                        </div>
                                    </div>
                                    <div
                                        style="
                      width: 0;
                      height: 0;
                      left: 116.50844444474205px;
                      top: 37.43606978980824px;
                      background-color: transparent;
                      position: absolute;
                    "
                                    >
                                        <div className="circle">
                                            <span className="circleText" title="The Serpentine">3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Contact