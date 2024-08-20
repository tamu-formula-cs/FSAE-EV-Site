import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import "./header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    const updateScreenSize = () => {
        setIsDesktop(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    const menu = (
        <ul className="header-ul">
            <Link to="/" className='link'><li className="header-li">HOME</li></Link>
            <div className="line"></div>
            <Link to="/meet-the-team" className='link'><li className="header-li">MEET THE TEAM</li></Link>
            <div className="line"></div>
            {/* <Link to="/history"><li className="header-li">ABOUT US</li></Link> */}
            {/* <div className="line"></div> */}
            <Link to="/sponsors" className='link'><li className="header-li">SPONSORS</li></Link>
            <div className="line"></div>
            <Link to="/recruiting" className='link'><li className="header-li">RECRUITING</li></Link>
            <div className="line"></div>
            <Link to="/cars" className='link'><li className="header-li">CARS</li></Link>
            <div className="line"></div>
            <Link to="/contact" className='link'><li className="header-li">CONTACT</li></Link>
        </ul>
    );

    const desktopMenu = (
        <ul className="desktop-header-ul">
            <Link to="/meet-the-team" className="link"><li className="desktop-header-li">MEET THE TEAM</li></Link>
            {/* <Link to="/history" className="link"><li className="desktop-header-li">ABOUT US</li></Link> */}
            <Link to="/sponsors" className="link"><li className="desktop-header-li">SPONSORS</li></Link>
            <Link to="/recruiting" className="link"><li className="desktop-header-li">RECRUITING</li></Link>
            <Link to="/cars" className="link"><li className="desktop-header-li">CARS</li></Link>
            <Link to="/contact" className="link"><li className="desktop-header-li">CONTACT</li></Link>
        </ul>
    );

    return (
        <nav className="header-container">
            <Link to="/"><img src={Logo} alt="Logo" className="header-logo" /></Link>
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                <span className={isOpen ? "icon-toggle open" : "icon-toggle"}></span>
            </div>
            {isDesktop && desktopMenu}
            {isOpen && !isDesktop && (
                <div className="fullscreen-menu">
                    <div className="menu-close" onClick={() => setIsOpen(false)}>&times;</div>
                    {menu}
                </div>
            )}
        </nav>
    );
}
