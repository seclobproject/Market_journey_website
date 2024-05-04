import React, { useState } from 'react'
import logo from '../assets/images/logo/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
    const [toggleHeader, setToggleHeader] = useState(false)
    // const [selectedItem, setSelectedItem] = useState(null);

    const scrollTop = () => {
        window.scrollTo({ top: 0 });
        setToggleHeader(false)
    }
    // const handleItemClick = (index) => {
    //     setSelectedItem(index);
    //     scrollTop();
    // };

    const menuItems = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Services', link: '/service' },
        // { label: 'Blogs', link: '/article' },
        { label: 'Contact', link: '/contact' },
    ];
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
                                            {menuItems.map((item, index) => (
                                                <li
                                                    key={index}
                                                    onClick={
                                                        scrollTop
                                                    }

                                                >
                                                    <Link to={item.link}>{item.label}</Link>
                                                    {/* <Link className={selectedItem === index ? 'selectedMenu' : ''} to={item.link}>{item.label}</Link> */}
                                                </li>
                                            ))}
                                            <li>
                                                <Link to="https://member.marketjourney.in/auth/boxed-signin">
                                                    <button  style={{ width: "70px", backgroundColor: "transparent", paddingLeft: "12px", paddingRight: "12px", paddingTop: "5px", paddingBottom: "5px", borderRadius: "10px", color: "white", border: "1px solid" }}>Login</button></Link>

                                            </li>
                                        </ul>
                                        
                                    </nav>
                                 
                                </div>
                               
                                <div className={`mobile-menu mean-container d-lg-none`}>
                                    <div className="mean-bar">
                                        <a onClick={() => setToggleHeader(true)} className={`meanmenu-reveal ${toggleHeader ? 'd-none' : 'd-block'}`}
                                        ><span></span><span></span><span></span></a><a
                                            onClick={() => setToggleHeader(false)}

                                            className={` ${toggleHeader ? 'd-block' : 'd-none'} `}
                                            style={{
                                                position: 'absolute',
                                                top: 10,
                                                right: 10,
                                                left: 'auto',
                                                textAlign: 'center',
                                                textIndent: 0,
                                                fontSize: 18,
                                                color: '#89BE1D'
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