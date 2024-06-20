import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PricingItem from '../Components/PricingItem';

//------ images -------

import aboutbg1 from '../assets/images/bg/about-bg-1.png'
import algo from '../assets/images/icons/algo.svg'
import Tradcafe from '../assets/images/icons/tradingcafe.png'
import cup from '../assets/images/bg/about1.webp'
import franchise from '../assets/images/icons/franchise.svg'
import medal from '../assets/images/icons/medal.svg'
import monthly from '../assets/images/icons/monthly.svg'
import weekly from '../assets/images/icons/weekly.svg'
import day from '../assets/images/icons/day.svg'
import wtsapp from '../assets/images/icons/whtspp.webp'
import { Fade } from 'react-awesome-reveal';

const Home = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0 });
    }
    return (

        <div id="__next">
            {/* <div id="preloader">
                <div id="ctn-preloader" className="ctn-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="P" className="letters-loading">P</span
                            ><span data-text-preloader="I" className="letters-loading">I</span
                            ><span data-text-preloader="X" className="letters-loading">X</span
                            ><span data-text-preloader="E" className="letters-loading">E</span
                            ><span data-text-preloader="N" className="letters-loading">N</span>
                        </div>
                    </div>
                    <div className="loader">
                        <div className="row">
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <section className="hero position-relative">
                <div className="swiper" autoplaydisableoninteraction="false">
                    {/* <div className="swiper-wrapper">
                        <div
                            className="swiper-slide swiper-slide-duplicate"
                            data-swiper-slide-index="1"
                        > */}
                    <div className="hero__item" style={{ position: "relative" }} >
                        <div className="container-fluid p-0">
                            <div className="row no-gutters" style={{ background: "radial-gradient(ellipse 55% 50%, #00FAFF46, #df313100)", backgroundRepeat: "no-repeat", backgroundPosition: "right", }}>
                                <div className="col-xl-6 col-lg-7" >
                                    <Fade direction="left" duration={2000} triggerOnce="true">
                                        <div className="hero__content">
                                            <h2
                                                className="hero__title"
                                                data-animation="fadeIn"
                                                data-delay=".2s"
                                                data-duration=".5s"
                                            >
                                                TRADE SMART, EAT WELL, DINING MEETS MARKET
                                                MASTERY
                                            </h2>
                                            <p
                                                data-animation="fadeInUp"
                                                data-delay=".5s"
                                                data-duration=".7s"
                                            >
                                                Discover the Flavor of Trade, India’s first largest company and Kerala's first trading Cafe
                                                Network.
                                            </p>
                                            {/* <Link
                                                    data-animation="fadeInUp"
                                                    data-delay=".7s"
                                                    data-duration=".9s"
                                                    className="site-btn"
                                                    to="about"
                                                ><span className="icon"
                                                ><FontAwesomeIcon icon={faArrowRight} />
                                                    </span>
                                                    Read More</Link> */}
                                            {/* <div className="shape">
                                                    <img src={hero_shape} alt="hero_shape" />
                                                </div> */}
                                        </div>
                                    </Fade>

                                    <img className='hero_img' src={cup} alt="banner_img" style={{ position: "absolute", top: "250px", right: "250px", maxWidth: '450px' }} />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* </div> */}


                    {/* </div> */}
                </div>

            </section>
            <a
                href={`https://wa.me/8089530707`}
                target="_blank"
                rel="noopener noreferrer"
            ><img src={wtsapp} alt="whatsapp" style={{ width: '50px', position: "fixed", bottom: "80px", right: "30px", zIndex: '9', cursor: "pointer" }} /></a>
            <Fade direction="left" duration={2000} triggerOnce="true">
                <section className="about-area pt-130 pb-130">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-6 pr-0">
                                <div
                                    className="about__bg"
                                    data-tilt="true"
                                    data-tilt-perspective="3000"
                                >
                                    <img className='home_about_cup' src={cup} alt="banner_img" />
                                    <img className='home_about' src={aboutbg1} alt="" />
                                </div>
                            </div>
                            <div className="col-xl-6 pl-80">
                                <div className="section-header mb-40">
                                    <h4 className="sub-heading mb-10">About Us</h4>
                                    <h2 className="section-title mb-35">
                                        ENJOY THE PERFECT BLEND AT EAT FOOD AND TRADE
                                    </h2>
                                    <p>
                                        India’s first largest company and Kerala’s first trading cafe network aims to expand into
                                        the 2023 stock market, forging a dynamic presence with our unique blend of culture and
                                        investment process. Join us in shaping the future of trading.
                                    </p>
                                </div>
                                <div className="about-lists">
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon icon={faCheck} />&nbsp;&nbsp; Commitment to providing proper training.
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faCheck} />&nbsp;&nbsp; We aim to bring a demat account to every household in Kerala.
                                        </li>
                                    </ul>
                                    <Link
                                        data-animation="fadeInUp"
                                        data-delay=".7s"
                                        data-duration=".9s"
                                        className="site-btn mt-55"
                                        to="about"
                                    ><span className="icon"
                                    ><FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                        Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
            <section className="service-area pt-125 pb-125">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header mb-75">
                                <h4 className="sub-heading mb-25">
                                    <span
                                    ><img
                                            src="../assets/images/shape/heading-shape-1.png"
                                            className="mr-10"
                                            alt="" /></span
                                    >Our Services<span
                                    ><img
                                            src="../assets/images/shape/heading-shape-2.png"
                                            className="ml-10"
                                            alt=""
                                        /></span>
                                </h4>
                                <h2 className="section-title">Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <Fade direction="up" duration={2000} triggerOnce="true">
                        <div className="row mt-none-50">
                            <div className="col-xl-6 col-lg-6 mt-50">
                                <div className="service-item service-item__2 d-flex">
                                    <div
                                        className="service-item__icon service-item__icon--noborder service-item__icon--1 "
                                    >
                                        <img src={Tradcafe} alt="" style={{ width: '100px' }} />
                                    </div>
                                    <div className="service-item__content service-item__content--2">
                                        <h4 className="service-item__title">Trading Cafe</h4>
                                        <p>
                                            Our Trading Cafe offers a rich tapestry of real-time discussions, expert sessions, and
                                            live trading experiences, creating an environment that fosters growth and collaboration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mt-50">
                                <div className="service-item service-item__2 d-flex">
                                    <div
                                        className="service-item__icon service-item__icon--noborder service-item__icon--1 "
                                    >
                                        <img src={franchise} alt="" style={{ width: '100px' }} />
                                    </div>
                                    <div className="service-item__content service-item__content--2">
                                        <h4 className="service-item__title">Franchise</h4>
                                        <p>
                                            District franchise, Zonal franchise, and Mobile franchise to navigate the world of trading
                                            and investments, while benefiting from a rewarding entrepreneurial venture.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mt-50">
                                <div className="service-item service-item__2 d-flex">
                                    <div
                                        className="service-item__icon service-item__icon--noborder service-item__icon--1 "
                                    >
                                        <img src={medal} alt="certified" style={{ width: '100px' }} />
                                    </div>
                                    <div className="service-item__content service-item__content--2">
                                        <h4 className="service-item__title"> Certified Online-Offline Batches </h4>
                                        <p>
                                            Market journey provides online trading courses on the art of financial markets. Teaches effective trading strategies, and gain the confidence to navigate the online trading landscape.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mt-50">
                                <div className="service-item service-item__2 d-flex">
                                    <div
                                        className="service-item__icon service-item__icon--noborder service-item__icon--1 "
                                    >
                                        <img src={algo} alt="certified" style={{ width: '100px' }} />
                                    </div>
                                    <div className="service-item__content service-item__content--2">
                                        <h4 className="service-item__title"> Algo </h4>
                                        <p>
                                            Algorithms built by industry experts are  available on a single click with uTrade Originals. Just pick a strategy that aligns with your algo trading objectives and subscribe to it.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Fade>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="view-all mt-55">
                                <p>
                                    We help take your small business to the next level.
                                    <Link onClick={scrollTop} to="service">All Services</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-area pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header mb-50">
                                {/* <h4 className="sub-heading mb-25">
                                    <span
                                    ><img
                                            src="../assets/images/shape/heading-shape-1.png"
                                            className="mr-5"
                                            alt="" /></span

                                    >Company Feature<span
                                    ><img
                                            src="../assets/images/shape/heading-shape-2.png"
                                            className="ml-5"
                                            alt=""
                                        /></span>
                                </h4> */}
                                <h2 className="section-title">Awareness Program</h2>
                            </div>
                        </div>
                    </div>
                    <Fade direction="up" duration={1500} triggerOnce="true">

                        <div className="row mt-none-30 justify-content-center" style={{ marginBottom: "100px" }}>
                            <div className="col-xl-3 col-lg-6 col-md-6 mt-30 ">
                                <div className="feature-item h-100">
                                    <div className="feature-item__icon ">
                                        <img src={monthly} alt="" />
                                    </div>
                                    <div className="feature-item__content">
                                        <h4 className="feature-item__title">Monthly Awareness</h4>
                                        <p>
                                            7th of  Each month, we delve into different aspects of trading, from market trends and analysis to risk management strategies and emerging opportunities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                                <div className="feature-item h-100">
                                    <div className="feature-item__icon ">
                                        <img src={weekly} alt="" />
                                    </div>
                                    <div className="feature-item__content">
                                        <h4 className="feature-item__title">Weekly Awareness</h4>
                                        <p>
                                            Every Saturday, we offer a curated selection of insightful sessions, workshops, and discussions aimed at keeping you informed and empowered in the ever-evolving realm of trading.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                                <div className="feature-item h-100">
                                    <div className="feature-item__icon ">
                                        <img src={day} alt="" />
                                    </div>
                                    <div className="feature-item__content">
                                        <h4 className="feature-item__title">Daily 9 AM</h4>
                                        <p>
                                            Daily at 9 AM for a power-packed session designed to kick start your trading day with insight and strategy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div className="feature-item">
                                <div className="feature-item__icon feature-item__icon--4">
                                    <img src="../assets/images/icons/f-4.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title">Offset Printing</h4>
                                    <p>
                                        Dis duis auctor an cum vel enim felis proins parturient port
                                        nostra penas
                                    </p>
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </Fade>
                </div>
            </section>

            {/* <section className="cta-area theme-bg pt-90 pb-95">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="section-header">
                                <h2 className="section-title section-title__white">
                                    We Love To Hear <br />From You
                                </h2>
                            </div>
                        </div>
                        <div className="col-xl-4 text-right">
                            <div className="cta-right">
                                <p>Extra Support</p>
                                <Link className="site-btn site-btn__s3" to="contact"
                                ><span className="icon"><FontAwesomeIcon icon={faArrowRight} /></span>Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="pricing-area pt-125 pb-125">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header mb-80">
                                <h4 className="sub-heading mb-25">
                                    <span
                                    ><img
                                            src="../assets/images/shape/heading-shape-1.png"
                                            className="mr-10"
                                            alt="" /></span
                                    >affordable price<span
                                    ><img
                                            src="../assets/images/shape/heading-shape-2.png"
                                            className="ml-10"
                                            alt=""
                                        /></span>
                                </h4>
                                <h2 className="section-title">Pricing Package</h2>
                            </div>
                        </div>
                    </div>
                    <Fade direction="right" duration={2000} triggerOnce="true">
                        <div className="row mt-none-30">
                            {/* <div className="col-xl-4 col-lg-6 mt-30">
                            <div className="pricing-item">
                                <div className="pricing-item__head">
                                    <h2 className="heading-title">Standard</h2>
                                    <h4 className="sub-heading-title">Regular Price</h4>
                                </div>
                                <div className="pricing-item__price"><h2>$50.00</h2></div>
                                <ul className="pricing-item__lists">
                                    <li>Living aboves saying</li>
                                    <li>Evening a gather</li>
                                    <li>Waters move replenish</li>
                                    <li>Lesser land replenis</li>
                                    <li>Bear morn divide divided</li>
                                    <li>Under beginning</li>
                                </ul>
                                <a className="price-btn" href="pricing"
                                ><span className="icon"><FontAwesomeIcon icon={faArrowRight} /></span
                                >select plan</a
                                >
                            </div>
                        </div> */}
                            <PricingItem title={'District Franchise'} price={'200000'} benifits={[{
                                text: "Direct Mobile franchise",
                                key: "10%"
                            },
                            { text: "Direct Zonal franchise", key: "10%" },
                            { text: " Mobile franchise bonus", key: "5%" },
                            { text: " Total customer earnings", key: "5%" },
                            { text: " Product purchasing bonus", key: "2%" },
                            ]} />
                            <PricingItem title={'Zonal Franchise'} price={'50000'} benifits={[{
                                text: "Direct Mobile franchise",
                                key: "10%"
                            },
                            { text: "Direct District franchise", key: "10%" },
                            { text: " Mobile franchise referral", key: "8%" },
                            { text: " Total customer earnings", key: "8%" },
                            { text: " Product purchasing bonus", key: "3%" },
                            ]} />
                            <PricingItem title={'Mobile Franchise'} price={'5000'} benifits={[{
                                text: "Direct Mobile franchise",
                                key: "10%"
                            },
                            { text: "Direct product referal", key: "10%" },
                            { text: " District/Zonal franchise", key: "10%" },
                            { text: " Brokerage", key: "50%" },
                            { text: " Product purchasing bonus", key: "25%" },
                            ]} />
                            {/* <div className="col-xl-4 col-lg-6 mt-30">
                            <div className="pricing-item">
                                <div className="pricing-item__head">
                                    <h2 className="heading-title">Business</h2>
                                    <h4 className="sub-heading-title">Regular Price</h4>
                                </div>
                                <div className="pricing-item__price"><h2>$60.00</h2></div>
                                <ul className="pricing-item__lists">
                                    <li>Living aboves saying</li>
                                    <li>Evening a gather</li>
                                    <li>Waters move replenish</li>
                                    <li>Lesser land replenis</li>
                                    <li>Bear morn divide divided</li>
                                    <li>Under beginning</li>
                                </ul>
                                <a className="price-btn" href="pricing"
                                ><span className="icon"><FontAwesomeIcon icon={faArrowRight} /></span
                                >select plan</a
                                >
                            </div>
                        </div> */}
                            {/* <div className="col-xl-4 col-lg-6 mt-30">
                            <div className="pricing-item">
                                <div className="pricing-item__head">
                                    <h2 className="heading-title">Premium</h2>
                                    <h4 className="sub-heading-title">Regular Price</h4>
                                </div>
                                <div className="pricing-item__price"><h2>$70.00</h2></div>
                                <ul className="pricing-item__lists">
                                    <li>Living aboves saying</li>
                                    <li>Evening a gather</li>
                                    <li>Waters move replenish</li>
                                    <li>Lesser land replenis</li>
                                    <li>Bear morn divide divided</li>
                                    <li>Under beginning</li>
                                </ul>
                                <a className="price-btn" href="pricing"
                                ><span className="icon"><FontAwesomeIcon icon={faArrowRight} /></span
                                >select plan</a
                                >
                            </div>
                        </div> */}
                        </div>
                    </Fade>
                </div>
            </section>
            {/* <section className="news-area grey-bg pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="section-header mb-80">
                                <h4 className="sub-heading mb-10">Recent Articles</h4>
                                <h2 className="section-title">Pixen News Room</h2>
                            </div>
                        </div>
                        <div className="col-xl-5 text-right news-right">
                            <Link className="inline-btn" to="/article"
                            ><span className="icon"><FontAwesomeIcon icon={faArrowRight} /></span>Go
                                to blog</Link>
                        </div>
                    </div>
                    <div className="row mt-none-30">
                        <div className="col-xl-4 col-lg-6 mt-30">
                            <article className="post-box">
                                <div className="post-box__thumb">
                                    <img src={article1} alt="" /><span
                                        className="post-box__cat"
                                    >Megazine</span
                                    >
                                </div>
                                <div className="post-box__content text-center">

                                    <h4 className="post-box__title">
                                        <Link to="article"
                                        >Fermentum metu fringilla convallis primis</Link>
                                    </h4>
                                    <Link className="inline-btn" to="article"
                                    ><span className="icon"><FontAwesomeIcon icon={faArrowRight} /></span
                                    >continue Reading</Link>
                                </div>
                            </article>
                        </div>
                        <div className="col-xl-4 col-lg-6 mt-30">
                            <article className="post-box">
                                <div className="post-box__thumb">
                                    <img src={article2} alt="" /><span
                                        className="post-box__cat"
                                    >Megazine</span
                                    >
                                </div>
                                <div className="post-box__content text-center">

                                    <h4 className="post-box__title">
                                        <Link to="article"
                                        >Fermentum metu fringilla convallis primis</Link>
                                    </h4>
                                    <Link className="inline-btn" to="article"
                                    ><span className="icon"><FontAwesomeIcon icon={faArrowRight} /></span
                                    >continue Reading</Link >
                                </div>
                            </article>
                        </div>
                        <div className="col-xl-4 col-lg-6 mt-30">
                            <article className="post-box">
                                <div className="post-box__thumb">
                                    <img src={article3} alt="" /><span
                                        className="post-box__cat"
                                    >Megazine</span
                                    >
                                </div>
                                <div className="post-box__content text-center">

                                    <h4 className="post-box__title">
                                        <Link to="article"
                                        >Fermentum metu fringilla convallis primis</Link>
                                    </h4>
                                    <Link className="inline-btn" to="article"
                                    ><span className="icon"><FontAwesomeIcon icon={faArrowRight} /></span
                                    >continue Reading</Link>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section className="cta-area theme-bg pt-105 pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="section-header">
                                <h2 className="section-title section-title__white">
                                    Need Design Solution <br />For your Brand
                                </h2>
                            </div>
                        </div>
                        <div className="col-xl-4 text-right">
                            <div className="cta-right">
                                <p>Extra Support</p>
                                <a className="site-btn site-btn__s3" href="contact"
                                ><span className="icon"><FontAwesomeIcon icon={faArrowRight} /></span
                                >Contact us</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section className="gta-area pt-125 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div>
                                <div className="google-map" id="contact-map">
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            margin: 0,
                                            padding: 0,
                                            position: 'relative'
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                left: 0,
                                                top: 0,
                                                margin: 0,
                                                padding: 0,
                                                position: 'absolute'
                                            }}
                                        ></div>
                                        <div
                                            style={{
                                                width: '50%',
                                                height: '50%',
                                                left: '50%',
                                                top: '50%',
                                                margin: 0,
                                                padding: 0,
                                                position: 'absolute'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    left: 0,
                                                    top: 0,
                                                    margin: 0,
                                                    padding: 0,
                                                    position: 'absolute'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: 0,
                                                        height: 0,
                                                        left: '-349.52533333329484px',
                                                        top: 0,
                                                        backgroundColor: 'transparent',
                                                        position: 'absolute'
                                                    }}
                                                >
                                                    <div className="circle">
                                                        <span className="circleText" title="Round Pond">1</span>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        width: 0,
                                                        height: 0,
                                                        left: '-139.81013333331794px',
                                                        top: '-74.8746044258587px',
                                                        backgroundColor: 'transparent',
                                                        position: 'absolute'
                                                    }}
                                                >
                                                    <div className="circle">
                                                        <span className="circleText" title="The Long Water"
                                                        >2</span
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        width: 0,
                                                        height: 0,
                                                        left: '116.50844444474205px',
                                                        top: '37.43606978980824px',
                                                        backgroundColor: 'transparent',
                                                        position: 'absolute'
                                                    }}
                                                >
                                                    <div className="circle">
                                                        <span className="circleText" title="The Serpentine"
                                                        >3</span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 pl-70">
                            <div className="section-header mb-50">
                                <h4 className="sub-heading mb-15">Send Message</h4>
                                <h2 className="section-title">Get in Touch</h2>
                            </div>
                            <div className="contact-form">
                                <form action="#" method="POST" id="contact-form">
                                    <div className="form-group mt-25">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="form-group mt-25">
                                        <input
                                            type="email"
                                            name="email"
                                            id="mail"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="form-group mt-25">
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="site-btn site-btn__s2 mt-15">
                                        <span className="icon icon__black"
                                        ><FontAwesomeIcon icon={faArrowRight} /></span
                                        >Contact us
                                    </button>
                                    <p className="ajax-response"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



        </div>

    )
}

export default Home