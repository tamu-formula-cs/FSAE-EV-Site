import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import "./header.css";

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
            <li className="header-li">HOME</li>
            <div className="line"></div>
            <li className="header-li">MEET THE TEAM</li>
            <div className="line"></div>
            <li className="header-li">HISTORY</li>
            <div className="line"></div>
            <li className="header-li">SPONSORS</li>
            <div className="line"></div>
            <li className="header-li">GET INVOLVED</li>
        </ul>
    );

    const desktopMenu = (
        <ul className="desktop-header-ul">
            <li className="desktop-header-li">MEET THE TEAM</li>
            <li className="desktop-header-li">HISTORY</li>
            <li className="desktop-header-li">SPONSORS</li>
            <li className="desktop-header-li">GET INVOLVED</li>
        </ul>
    );

    return (
        <nav className="header-container">
            <img src={Logo} alt="Logo" className="header-logo"/>
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
