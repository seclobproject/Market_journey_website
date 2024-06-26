import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// -------images ------------
import about1 from '../assets/images/bg/about1.webp'
import about2 from '../assets/images/about/about-bg-4.jpg'
import about3 from '../assets/images/about/about-bg-5.jpg'
import aboutIllustration from '../assets/images/bg/about-bg-1.png'
const About = () => {

    useEffect(() => {
        const scrollTop = () => {
            window.scrollTo({ top: 0 });
        }
        scrollTop()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    };

    return (
        <div>
            <section
                className="breadcrumb-section pt-180 pb-180 bg_img"
                
                data-overlay="dark"
                data-opacity="3"
            >

                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 d-flex">
                            <div className="breadcrumb-text">
                                <h2 className="breadcrumb-text__title">About us</h2>
                                <ul className="breadcrumb-text__nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li>-</li>
                                    <li>about us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-area pt-125 pb-125">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5 about-thumb-imgs">
                            <div className="about__bg about__bg--2 mt-75">
                                <div className="big-thumb">
                                    <img src={about1} alt="" />
                                </div>
                                <div className="mid-thumb position-absulate">
                                    <img src={about2} alt="" style={{ maxWidth: "250px", width: "100%" }} />
                                </div>
                                <div className="small-thumb position-absulate">
                                    <img src={about3} alt="" style={{ maxWidth: "250px", width: "100%" }} />
                                </div>
                                <span className="circle-shape position-absulate"
                                ><img src="images/shape/border-shape-2.png" alt="" /></span
                                ><span className="patternt-shape position-absulate"
                                ><img src="images/shape/about-shape-1.png" alt=""
                                    /></span>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="section-header section-header__2 mb-20">
                                <h4 className="sub-heading sub-heading__2 mb-10">
                                    About Us
                                    <span
                                    ><img
                                            src="images/shape/heading-shape-4.png"
                                            className="ml-10"
                                            alt=""
                                        /></span>
                                </h4>
                                <h2 className="section-title section-title__2 mb-30">
                                    Learn, Share, And Grow
                                </h2>
                                <p>
                                    Experience the transformative potential of learning together, sharing experiences,
                                    and growing your trading skills at Trading Cafe.
                                </p>
                            </div>
                            <div className="">
                                <div className="col-xl-10 mt-30">
                                    <div className="ab__box row">
                                        <div className="ab__box--head">
                                            <div className="icon">
                                                <img src="images/icons/ab-1.png" alt="" />
                                            </div>
                                            <h4 className="title">India’s first <br />largest trading company</h4>
                                        </div>
                                        <p>
                                            Renowned for expansive network and unwavering commitment to quality and
                                            integrity, this company has set industry standards and redefined the art of trade.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-10 mt-30">
                                    <div className="ab__box">
                                        <div className="ab__box--head">
                                            <div className="icon icon__2">
                                                <img src="images/icons/ab-2.png" alt="" />
                                            </div>
                                            <h4 className="title">Kerala’s first<br /> trading cafe network </h4>
                                        </div>
                                        <p>
                                            The essence of a traditional cafe with the dynamic world of trading, it offers a
                                            unique platform for individuals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="ab-author-signature mt-55">
                                <div className="author__box">
                                    <div className="author__box--thumb">
                                        <img src="images/other/author-2.png" alt="" />
                                    </div>
                                    <div className="author__box--text">
                                        <h4 className="name">Martyn Alex</h4>
                                        <span className="designation">CEO of pixen</span>
                                    </div>
                                </div>
                                <div className="signature">
                                    <img src="images/shape/signature.png" alt="" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="video-area video-area__2">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-xl-12">
                            <div
                                className="video__bg video__bg--2 bg_img"
                                style={{ backgroundImage: "url('images/bg/video-bg-1.jpeg')" }}
                                data-overlay="dark"
                                data-opacity="5"
                            >
                                <div className="video-container-wrap video-container-wrap__2">
                                    <a
                                        data-rel="lightcase:myCollection"
                                        data-animation="fadeInLeft"
                                        data-delay=".1s"
                                        className="video-link video-link__2 pointer"
                                    ><div className="video-play-wrap video-play-wrap__2">
                                            <div className="video-mark video-mark__2">
                                                <div className="wave-pulse wave-pulse-1"></div>
                                                <div className="wave-pulse wave-pulse-2"></div>
                                            </div>
                                            <div className="video-play video-play__2">
                                                <i className="fa fa-play"></i>
                                            </div></div></a
                                    ><a
                                        className="video-text video-text__2 pointer"
                                        data-rel="lightcase:myCollection"
                                        data-animation="fadeInLeft"
                                        data-delay=".1s"
                                    >Play Intro Video</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="counter-area pb-30 grey-bg"> */}
            {/* <div className="container grey-bg pb-80">
                  <div className="row mt-none-40">
                      <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                          <div className="counter-box counter-box__2 text-center">
                              <div className="counter_box__icon">
                                  <img src="images/icons/c-1.png" alt="" />
                              </div>
                              <h2 className="counter_box__title">
                                  <span className="odometer"><span>55</span></span>
                              </h2>
                              <p>Complete Work</p>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                          <div className="counter-box counter-box__2 text-center">
                              <div className="counter_box__icon">
                                  <img src="images/icons/c-2.png" alt="" />
                              </div>
                              <h2 className="counter_box__title">
                                  <span className="odometer"><span>545</span></span>
                              </h2>
                              <p>Expert Member</p>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                          <div className="counter-box counter-box__2 text-center">
                              <div className="counter_box__icon">
                                  <img src="images/icons/c-3.png" alt="" />
                              </div>
                              <h2 className="counter_box__title">
                                  <span className="odometer"><span>45</span></span>
                              </h2>
                              <p>Satisfied Client</p>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-md-6 mt-40">
                          <div className="counter-box counter-box__2 text-center">
                              <div className="counter_box__icon">
                                  <img src="images/icons/c-4.png" alt="" />
                              </div>
                              <h2 className="counter_box__title">
                                  <span className="odometer"><span>45</span></span>
                              </h2>
                              <p>Total Coffees</p>
                          </div>
                      </div>
                  </div>
              </div>  */}
            {/* </div> */}
            <section className="wcu-area wcu-area__2 pt-125 pb-125">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5 pr-0">
                            <div
                                className="about__bg about__bg--3"
                                data-tilt="true"
                                data-tilt-perspective="3000"
                            >
                                <img src={aboutIllustration} alt="" style={{maxWidth:"600px",width:"100%"}}/>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="section-header section-header__wcu mb-50">
                                <h4 className="sub-heading sub-heading__2  mb-15">
                                    why choose us<span
                                    ><img
                                            src="images/shape/heading-shape-4.png"
                                            className="ml-5"
                                            alt=""
                                        /></span>
                                </h4>
                                <h2 className="section-title section-title__2 mb-30">
                                    SHAPING THE FUTURE OF TRADE
                                </h2>
                                <p>
                                    Trade ensures resilience, efficiency, and inclusivity, paving the way for a more
                                    interconnected and sustainable global economy.
                                </p>
                            </div>
                            <div className="wcu-box__wrapper wcu-box__wrapper--2">
                                <div className="wcu-box wcu-box__2">
                                    <div className="wcu-box__icon wcu-box__icon--2">
                                        <img src="images/icons/w-c-3.png" alt="" />
                                    </div>
                                    <div className="wcu-box__content wcu-box__content--2">
                                        <h4 className="wcu-box__title wcu-box__title--2">
                                            Awareness program
                                        </h4>
                                        <p>
                                            Monthly awareness, Weekly awareness and Daily awareness program for a perfect
                                            trading.
                                        </p>
                                    </div>
                                </div>
                                <div className="wcu-box wcu-box__2 mt-40">
                                    <div
                                        className="wcu-box__icon wcu-box__icon--2 wcu-box__icon--red"
                                    >
                                        <img src="images/icons/w-c-4.png" alt="" />
                                    </div>
                                    <div className="wcu-box__content wcu-box__content--2">
                                        <h4 className="wcu-box__title wcu-box__title--2">
                                            Awards and rewards
                                        </h4>
                                        <p>
                                            We’re allocating 10% of our total profit for special awards and rewards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div
                className="testimonial-area testimonial-area__2 testimonial-area__3 pt-130 pb-130"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div
                                className="testimonial__3 owl-carousel text-center position-relative"
                            >
                                <div
                                    className="swiper custom-className"
                                    autoplaydisableoninteraction="false"
                                >
                                    <div className="swiper-wrapper">
                                        <div
                                            className="swiper-slide swiper-slide-duplicate"
                                            data-swiper-slide-index="0"
                                        >
                                            <div className="testimonial-item ">
                                                <div className="testimonial__2--icon mb-70">
                                                    <img src={quote2} alt="" />
                                                </div>
                                                <div
                                                    className="testimonial__2--content testimonial__2--content--2"
                                                >
                                                    <p>
                                                        Lorem ipsum dolor site amet consectetur adipisice
                                                        usmods tempor incididunt uter labore etere dolore
                                                        magna aliqua enim ad minim veniam quis nostrud
                                                        exercitation ule lamco lris nisi ut aliquip ex ea
                                                        commodo consequ rure dolor reprehende in voluptate
                                                    </p>
                                                </div>
                                                <div className="testimonial__2--author mt-55">
                                                    <div className="thumb">
                                                        <img src="images/other/author-2.png" alt="" />
                                                    </div>
                                                    <div className="content content__2">
                                                        <h4 className="name">Marina D. Lucator</h4>
                                                        <span className="designation">Project Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-swiper-slide-index="0">
                                            <div className="testimonial-item">
                                                <div className="testimonial__2--icon mb-70">
                                                    <img src={quote2} alt="quote" />
                                                </div>
                                                <div
                                                    className="testimonial__2--content testimonial__2--content--2"
                                                >
                                                    <p>
                                                        Lorem ipsum dolor site amet consectetur adipisice
                                                        usmods tempor incididunt uter labore etere dolore
                                                        magna aliqua enim ad minim veniam quis nostrud
                                                        exercitation ule lamco lris nisi ut aliquip ex ea
                                                        commodo consequ rure dolor reprehende in voluptate
                                                    </p>
                                                </div>
                                                <div className="testimonial__2--author mt-55">
                                                    <div className="thumb">
                                                        <img src="images/other/author-2.png" alt="" />
                                                    </div>
                                                    <div className="content content__2">
                                                        <h4 className="name">Marina D. Lucator</h4>
                                                        <span className="designation">Project Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide swiper-slide-duplicate"
                                            data-swiper-slide-index="0"
                                        >
                                            <div className="testimonial-item">
                                                <div className="testimonial__2--icon mb-70">
                                                    <img src={quote2} alt="quote" />
                                                </div>
                                                <div
                                                    className="testimonial__2--content testimonial__2--content--2"
                                                >
                                                    <p>
                                                        Lorem ipsum dolor site amet consectetur adipisice
                                                        usmods tempor incididunt uter labore etere dolore
                                                        magna aliqua enim ad minim veniam quis nostrud
                                                        exercitation ule lamco lris nisi ut aliquip ex ea
                                                        commodo consequ rure dolor reprehende in voluptate
                                                    </p>
                                                </div>
                                                <div className="testimonial__2--author mt-55">
                                                    <div className="thumb">
                                                        <img src="images/other/author-2.png" alt="" />
                                                    </div>
                                                    <div className="content content__2">
                                                        <h4 className="name">Marina D. Lucator</h4>
                                                        <span className="designation">Project Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav">
                                    <div className="owl-prev custom-prev">
                                        <i className="fal fa-long-arrow-left"></i>
                                    </div>
                                    <div className="owl-next custom-next">
                                        <i className="fal fa-long-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}
            {/* <div
                className="testimonial-area testimonial-area__2 testimonial-area__3 pt-30 pb-50"
            >
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <Slider {...settings}>
                            <div className="testimonial-item">
                                <div
                                    className="swiper-slide swiper-slide-duplicate"
                                    data-swiper-slide-index="0"
                                >
                                    <div className="testimonial-item">
                                        <div className="testimonial__2--icon mb-70 d-flex " style={{justifyContent:"center"}}>
                                            <img src={quote2} alt="quote"  style={{width:"100px"}}/>
                                        </div>
                                        <div
                                            className="testimonial__2--content testimonial__2--content--2"
                                        >
                                            <p>
                                                Lorem ipsum dolor site amet consectetur adipisice
                                                usmods tempor incididunt uter labore etere dolore
                                                magna aliqua enim ad minim veniam quis nostrud
                                                exercitation ule lamco lris nisi ut aliquip ex ea
                                                commodo consequ rure dolor reprehende in voluptate
                                            </p>
                                        </div>
                                        <div className="testimonial__2--author mt-55">
                                            <div className="thumb">
                                                <img src="images/other/author-2.png" alt="" />
                                            </div>
                                            <div className="content content__2">
                                                <h4 className="name">Marina D. Lucator</h4>
                                                <span className="designation">Project Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="testimonial-item">
                                    <div
                                        className="swiper-slide swiper-slide-duplicate"
                                        data-swiper-slide-index="0"
                                    >
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70 d-flex " style={{ justifyContent: "center" }}>
                                                <img src={quote2} alt="quote" style={{ width: "100px" }} />
                                            </div>
                                            <div
                                                className="testimonial__2--content testimonial__2--content--2"
                                            >
                                                <p>
                                                    Lorem ipsum dolor site amet consectetur adipisice
                                                    usmods tempor incididunt uter labore etere dolore
                                                    magna aliqua enim ad minim veniam quis nostrud
                                                    exercitation ule lamco lris nisi ut aliquip ex ea
                                                    commodo consequ rure dolor reprehende in voluptate
                                                </p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="images/other/author-2.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Marina D. Lucator</h4>
                                                    <span className="designation">Project Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div
                                        className="swiper-slide swiper-slide-duplicate"
                                        data-swiper-slide-index="0"
                                    >
                                        <div className="testimonial-item">
                                            <div className="testimonial__2--icon mb-70 d-flex " style={{ justifyContent: "center" }}>
                                                <img src={quote2} alt="quote" style={{ width: "100px" }} />
                                            </div>
                                            <div
                                                className="testimonial__2--content testimonial__2--content--2"
                                            >
                                                <p>
                                                    Lorem ipsum dolor site amet consectetur adipisice
                                                    usmods tempor incididunt uter labore etere dolore
                                                    magna aliqua enim ad minim veniam quis nostrud
                                                    exercitation ule lamco lris nisi ut aliquip ex ea
                                                    commodo consequ rure dolor reprehende in voluptate
                                                </p>
                                            </div>
                                            <div className="testimonial__2--author mt-55">
                                                <div className="thumb">
                                                    <img src="images/other/author-2.png" alt="" />
                                                </div>
                                                <div className="content content__2">
                                                    <h4 className="name">Marina D. Lucator</h4>
                                                    <span className="designation">Project Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Slider>
                    </div>
                </div>
            </div>
            </div> */}
            <div className="strategy-section pb-125 pt-125">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div
                                className="strategy_bg"
                                data-tilt="true"
                                data-tilt-perspective="3000"
                            >
                                <img src={about1} alt="serviceImg" />
                            </div>
                        </div>
                        <div className="col-xl-6 pl-60">
                            <div className="section-header section-header__2 mb-75">
                                <h4 className="sub-heading sub-heading__2 mb-10">
                                    our strategy<span
                                    ><img
                                            src="images/shape/heading-shape-4.png"
                                            className="ml-10"
                                            alt=""
                                        /></span>
                                </h4>
                                <h2 className="section-title section-title__2 mb-30">
                                    TRADE WITH CONFIDENCE
                                </h2>
                                <p>
                                    Embodies our trading company's strategy, prioritizing integrity, reliability, and
                                    expertise.
                                </p>
                            </div>
                            <div className="skill-boxs mt-none-35">
                                <div className="skill-item mb-35">
                                    <div className="bar-title"><h4>DISTRICT FRANCHISE</h4></div>
                                  
                                </div>
                                <div className="skill-item mb-35">
                                    <div className="bar-title"><h4>ZONAL FRANCHISE</h4></div>
                                
                                </div>
                                <div className="skill-item mb-35">
                                    <div className="bar-title"><h4>MOBILE FRANCHISE</h4></div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About