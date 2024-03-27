import React from 'react'
import { Link } from 'react-router-dom'
import Tradcafe from '../assets/images/icons/tradingcafe.jpg'
import franchise from '../assets/images/icons/franchise.svg'
import medal from '../assets/images/icons/medal.svg'
import algo from '../assets/images/icons/algo.svg'
import premium from '../assets/images/icons/premium.svg'
const Service = () => {
    return (
        <div>

            <section
                className="breadcrumb-section pt-180 pb-180 bg_img"
                // style={{ backgroundImage: "url(images/bg/breadcrumb-bg-1.jpeg)" }}
                data-overlay="dark"
                data-opacity="3"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 d-flex pr-0">
                            <div className="breadcrumb-text">
                                <h2 className="breadcrumb-text__title">our service</h2>
                                <ul className="breadcrumb-text__nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li>-</li>
                                    <li>services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-area feature-area__3 pt-125 pb-125">
                <div className="container">
                    <div className="row mt-none-30">
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div className="feature-item feature-item__3">
                                <div className="feature-item__icon feature-item__icon--1">
                                    <img src="images/icons/f-1.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title">Digital Printing</h4>
                                    <p>
                                        Dis duis auctor an cum vel enim felis proins parturient port
                                        nostra penas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div className="feature-item feature-item__3">
                                <div className="feature-item__icon feature-item__icon--2">
                                    <img src="images/icons/f-2.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title">Brand Printing</h4>
                                    <p>
                                        Dis duis auctor an cum vel enim felis proins parturient port
                                        nostra penas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div className="feature-item feature-item__3">
                                <div className="feature-item__icon feature-item__icon--3">
                                    <img src="images/icons/f-3.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title">3d Printing</h4>
                                    <p>
                                        Dis duis auctor an cum vel enim felis proins parturient port
                                        nostra penas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-30">
                            <div className="feature-item feature-item__3">
                                <div className="feature-item__icon feature-item__icon--4">
                                    <img src="images/icons/f-4.png" alt="" />
                                </div>
                                <div className="feature-item__content">
                                    <h4 className="feature-item__title">Offset Printing</h4>
                                    <p>
                                        Dis duis auctor an cum vel enim felis proins parturient port
                                        nostra penas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-area service-area__2 pt-125 pb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header section-header__white mb-75">
                                <h4 className="sub-heading sub-heading__2  mb-25">
                                    <span
                                    ><img
                                            src="images/shape/heading-shape-3.png"
                                            className="mr-10"
                                            alt="" /></span
                                    >main Services<span
                                    ><img
                                            src="images/shape/heading-shape-4.png"
                                            className="ml-10"
                                            alt=""
                                        /></span>
                                </h4>
                                <h2 className="section-title section-title__2 section-title__white">
                                    quality printing
                                </h2>
                            </div>
                        </div>
                    </div>
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
                                    <img src={medal} alt="certified" style={{width:'100px'}}/>
                                </div>
                                <div className="service-item__content service-item__content--2">
                                    <h4 className="service-item__title"> Certified Online-Offline Batches</h4>
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
                                    <img src={algo} alt="algo" style={{ width: '100px' }} />
                                </div>
                                <div className="service-item__content service-item__content--2">
                                    <h4 className="service-item__title">Algo Creation</h4>
                                    <p>
                                        Algo creation service combines technology with market insights, allowing you to automate and optimize your trading decisions. Whether you're a seasoned trader or just starting, let Market Journey elevate your trading experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mt-50">
                            <div className="service-item service-item__2 d-flex">
                                <div
                                    className="service-item__icon service-item__icon--noborder service-item__icon--1 "
                                >
                                    <img src={premium} alt="premium" style={{ width: '100px' }} />
                                </div>
                                <div className="service-item__content service-item__content--2">
                                    <h4 className="service-item__title">Premium Call Outs</h4>
                                    <p>
                                        Our Premium Call Outs service provides you with helping you make informed decisions
                                        and capitalize on market opportunities. Elevate your trading experience with the
                                        precision and expertise offered by Market Journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="brand-section pt-125 grey-bg">
               
            </div>
            <section className="wp-area pt-125 pb-125">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header mb-65">
                                <h4 className="sub-heading mb-15">
                                    <span
                                    ><img
                                            src="images/shape/heading-shape-3.png"
                                            className="mr-5"
                                            alt="" /></span
                                    >working process<span
                                    ><img
                                            src="images/shape/heading-shape-4.png"
                                            className="ml-5"
                                            alt=""
                                        /></span>
                                </h4>
                                <h2 className="section-title section-title__2">How it works</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-none-40">
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                            <div className="wp-box">
                                <div className="wp-box__icon wp-box__icon--1 mb-35">
                                    <img src="images/icons/w-p-1.png" alt="" />
                                </div>
                                <div className="wp-box__content">
                                    <h4 className="wp-box__title">Booking Online</h4>
                                    <p>
                                        God They moving an firmament seed over herb gathering multis
                                        ply morning fruitful
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                            <div className="wp-box reverse-col">
                                <div className="wp-box__content">
                                    <h4 className="wp-box__title">Received Work</h4>
                                    <p>
                                        God They moving an firmament seed over herb gathering multis
                                        ply morning fruitful
                                    </p>
                                </div>
                                <div className="wp-box__icon wp-box__icon--2 mt-35">
                                    <img src="images/icons/w-p-2.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                            <div className="wp-box">
                                <div className="wp-box__icon wp-box__icon--3 mb-35">
                                    <img src="images/icons/w-p-3.png" alt="" />
                                </div>
                                <div className="wp-box__content">
                                    <h4 className="wp-box__title">Satisfied Design</h4>
                                    <p>
                                        God They moving an firmament seed over herb gathering multis
                                        ply morning fruitful
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                            <div className="wp-box reverse-col">
                                <div className="wp-box__content">
                                    <h4 className="wp-box__title">Start Printing</h4>
                                    <p>
                                        God They moving an firmament seed over herb gathering multis
                                        ply morning fruitful
                                    </p>
                                </div>
                                <div className="wp-box__icon mt-35">
                                    <img src="images/icons/w-p-4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="pricing-area pricing-area__2 pt-125 pb-125">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="section-header mb-80">
                                <h4 className="sub-heading sub-heading__2 mb-25">
                                    <span
                                    ><img
                                            src="images/shape/heading-shape-3.png"
                                            className="mr-10"
                                            alt="" /></span
                                    >affordable price<span
                                    ><img
                                            src="images/shape/heading-shape-4.png"
                                            className="ml-10"
                                            alt=""
                                        /></span>
                                </h4>
                                <h2 className="section-title section-title__2">Pricing Package</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-none-30">
                        <div className="col-xl-4 col-lg-6 mt-30">
                            <div className="pricing-item">
                                <div className="pricing-item__head pricing-item__head--2">
                                    <h2 className="heading-title">Standard</h2>
                                    <h4 className="sub-heading-title">Regular Price</h4>
                                </div>
                                <div
                                    className="pricing-item__price pricing-item__price--1 pricing-item__price--white"
                                >
                                    <h2>$50.00</h2>
                                </div>
                                <ul className="pricing-item__lists">
                                    <li>Living aboves saying</li>
                                    <li>Evening a gather</li>
                                    <li>Waters move replenish</li>
                                    <li>Lesser land replenis</li>
                                    <li>Bear morn divide divided</li>
                                    <li>Under beginning</li>
                                </ul>
                                <a className="price-btn" href="pricing"
                                ><span className="icon"><i className="far fa-arrow-right"></i></span
                                >select plan</a
                                >
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 mt-30">
                            <div className="pricing-item">
                                <div className="pricing-item__head pricing-item__head--2">
                                    <h2 className="heading-title">Business</h2>
                                    <h4 className="sub-heading-title">Regular Price</h4>
                                </div>
                                <div
                                    className="pricing-item__price pricing-item__price--2 pricing-item__price--white"
                                >
                                    <h2>$60.00</h2>
                                </div>
                                <ul className="pricing-item__lists">
                                    <li>Living aboves saying</li>
                                    <li>Evening a gather</li>
                                    <li>Waters move replenish</li>
                                    <li>Lesser land replenis</li>
                                    <li>Bear morn divide divided</li>
                                    <li>Under beginning</li>
                                </ul>
                                <a className="price-btn" href="pricing"
                                ><span className="icon"><i className="far fa-arrow-right"></i></span
                                >select plan</a
                                >
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 mt-30">
                            <div className="pricing-item">
                                <div className="pricing-item__head pricing-item__head--2">
                                    <h2 className="heading-title">Premium</h2>
                                    <h4 className="sub-heading-title">Regular Price</h4>
                                </div>
                                <div
                                    className="pricing-item__price pricing-item__price--3 pricing-item__price--white"
                                >
                                    <h2>$70.00</h2>
                                </div>
                                <ul className="pricing-item__lists">
                                    <li>Living aboves saying</li>
                                    <li>Evening a gather</li>
                                    <li>Waters move replenish</li>
                                    <li>Lesser land replenis</li>
                                    <li>Bear morn divide divided</li>
                                    <li>Under beginning</li>
                                </ul>
                                <a className="price-btn" href="pricing"
                                ><span className="icon"><i className="far fa-arrow-right"></i></span
                                >select plan</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service