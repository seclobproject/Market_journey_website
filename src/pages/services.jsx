import React from 'react'
import { Link } from 'react-router-dom'
import Tradcafe from '../assets/images/icons/tradingcafe.png'
import franchise from '../assets/images/icons/franchise.svg'
import medal from '../assets/images/icons/medal.svg'
import algo from '../assets/images/icons/algo.svg'
import premium from '../assets/images/icons/premium.svg'
const Service = () => {
    return (
        <div>

            <section
                className="breadcrumb-section pt-180 pb-180 mb-4 bg_service_img"
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
            {/* <section className="feature-area feature-area__3 pt-125 pb-125">
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
            </section> */}
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
                                    <img src={premium} alt="premium" style={{ width: '100px' }} />
                                </div>
                                <div className="service-item__content service-item__content--2">
                                    <h4 className="service-item__title">Premium Course Outs</h4>
                                    <p>
                                        Our Premium Course Outs service provides you with helping you make informed decisions
                                        and capitalize on market opportunities. Elevate your trading experience with the
                                        precision and expertise offered by Market Journey.
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
                                    <h4 className="service-item__title">Algo</h4>
                                    <p>Algorithms built by industry experts are  available on a single click with uTrade Originals. Just pick a strategy that aligns with your algo trading objectives and subscribe to it.
                                        A super-fast algorithmic trading platform that let’s you plan, strategise and automate your trades as well as execute them within milliseconds is here!<br />
                                        <b> fees : 4500 </b>
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
                                    <h4 className="service-item__title">AMC  momentum  0.5 trading strategy</h4>
                                    <li> Capital  25% only  use</li>
                                    <li>  daily 2 trade only</li>
                                    <li>  30 points stop loss 30 point target
                                        Buying pre and trial 5 point </li>
                                    <table>
                                        <thead><tr><th>Capital</th><th>use lote</th></tr></thead>
                                        <tbody>
                                            <tr>
                                                <td>30000</td><td>2 lote</td>  </tr>
                                            <tr> <td>60000</td><td>4 lote</td></tr>
                                            <tr> <td>90000</td><td>6 lote</td></tr>
                                            <tr> <td>120000</td><td>8 lote</td></tr>
                                            <tr><td>150000</td><td>10 lote</td></tr>

                                        </tbody>
                                    </table>

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
                                    <h4 className="service-item__title">AMC  momentum trading 1.1 strategy</h4>
                                    <li> Capital  25% only  use</li>
                                    <li>  daily 2 trade only</li>
                                    <li>  30 points stop loss 30 point target
                                        Buying pre and trial 5 point </li>
                                    <table>
                                        <thead><tr><th>Capital</th><th>use lote</th></tr></thead>
                                        <tbody>
                                            <tr> <td>60000</td><td>2 lote</td></tr>
                                            <tr> <td>120000</td><td>4 lote</td></tr>
                                            <tr><td>180000</td><td>6 lote</td></tr>
                                            <tr><td>250000</td><td>8 lote</td></tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <div className="brand-section pt-125 grey-bg">
               
            </div> */}
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
                                <h2 className="section-title section-title__2">AMC – Abdulla Money Concept</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-none-40">
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                            <div className="wp-box">
                                {/* <div className="wp-box__icon wp-box__icon--1 mb-35">
                                    <img src="images/icons/w-p-1.png" alt="" />
                                </div> */}
                                <div className="wp-box__content">
                                    <h4 className="wp-box__title">C30</h4>
                                    <p>
                                        Up to 30% can be trade
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                            <div className="wp-box reverse-col">
                                <div className="wp-box__content">
                                    <h4 className="wp-box__title">L-T</h4>
                                    <p>
                                        Limited trade
                                    </p>
                                </div>
                                {/* <div className="wp-box__icon wp-box__icon--2 mt-35">
                                    <img src="images/icons/w-p-2.png" alt="" />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                            <div className="wp-box">
                                {/* <div className="wp-box__icon wp-box__icon--3 mb-35">
                                    <img src="images/icons/w-p-3.png" alt="" />
                                </div> */}
                                <div className="wp-box__content">
                                    <h4 className="wp-box__title">Q-T</h4>
                                    <p>
                                        Quantity trade
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                            <div className="wp-box reverse-col">
                                <div className="wp-box__content">
                                    <h4 className="wp-box__title">S-T</h4>
                                    <p>
                                        Stop loss and target
                                    </p>
                                </div>
                                {/* <div className="wp-box__icon mt-35">
                                    <img src="images/icons/w-p-4.png" alt="" />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                            <div className="wp-box reverse-col">
                                <div className="wp-box__content">
                                    <h4 className="wp-box__title">N-A</h4>
                                    <p>
                                        Not an Average
                                    </p>
                                </div>
                                {/* <div className="wp-box__icon mt-35">
                                    <img src="images/icons/w-p-4.png" alt="" />
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                            <div className="wp-box reverse-col">
                                <div className="wp-box__content">
                                    <h4 className="wp-box__title">SS</h4>
                                    <p>
                                        50 Formula
                                    </p>
                                </div>
                                {/* <div className="wp-box__icon mt-35">
                                    <img src="images/icons/w-p-4.png" alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Service