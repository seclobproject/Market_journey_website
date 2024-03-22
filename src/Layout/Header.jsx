import React, { useState } from 'react'
import logo from '../assets/images/logo/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
    const [toggleHeader,setToggleHeader]=useState(false)
    const scrollTop = () => {
        window.scrollTo({ top: 0 });
    }
    console.log('====================================');
    console.log(toggleHeader);
    console.log('====================================');
    return (
        <header className="header">
            <div className="header__bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-9 col-lg-12" style={{ width: '100%' }}>
                            <div className="navarea">
                                <Link onClick={scrollTop} className="site-logo" to="/"
                                ><img src={logo} alt="LOGO"
                                    /></Link>
                                <div className={`mainmenu ${toggleHeader ? 'active_menus' : 'd-none'} d-lg-block`}>

                                    <nav id="mobile-menu">
                                        <ul>
                                            <li onClick={scrollTop} className="menu_has_children">
                                                <Link to="/">Home</Link>

                                            </li>
                                            <li onClick={scrollTop}><Link to="/about">About</Link></li>

                                            <li onClick={scrollTop}><Link to="service">Services</Link></li>
                                            <li onClick={scrollTop}><Link to="article">Article</Link></li>

                                            <li onClick={scrollTop}><Link to="contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <a className="quote-btn" href="contact">Login</a>

                                <div className={`mobile-menu mean-container d-lg-none`}>
                                    <div className="mean-bar">
                                        <a onClick={() => setToggleHeader(true)} className={`meanmenu-reveal ${toggleHeader? 'd-none': 'd-block'}`}
                                        ><span></span><span></span><span></span></a><a 
                                            onClick={()=>setToggleHeader(false)}
                                        
                                            className={` ${toggleHeader ? 'd-block': 'd-none'} `}
                                            style={{
                                                position:'absolute',
                                                top:10,
                                                right: 10,
                                                left: 'auto',
                                                textAlign: 'center',
                                                textIndent: 0,
                                                fontSize: 18,
                                                color:'#f7ae15'
                                            }}
                                        >X</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header