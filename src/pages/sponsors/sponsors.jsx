import React, { useEffect } from 'react';
import SponsorImages from './sponsor_images';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './sponsors.css';
import { useNavigate } from 'react-router-dom';

const Sponsors = () => {
    const navigate = useNavigate();

    return (
        <div className="main-container">
            <Header />
            <h1 className="sponsors-title">OUR SPONSORS</h1>
            <section className="sponsors-section">
                <h2>Title Sponsors</h2>
                <div className="sponsor-imgs">
                    <div className="sponsor-image-pair">
                        <a href="https://www.gm.com" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.generalMotors3} alt="General Motors" />
                        </a>
                        <a href="https://www.vistracorp.com" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.vistra} alt="Vistra" />
                        </a>
                    </div>
                </div>
                <div className="sponsor-spacer"></div>

                <h2>Platinum Sponsors</h2>
                <div className="sponsor-imgs">
                    <a href="https://additiveatscale.com/" target="_blank" rel="noopener noreferrer">
                        <img src={SponsorImages.additiveAtScale} alt="Additive at Scale" />
                    </a>
                </div>
                <div className="sponsor-spacer"></div>

                <h2>Gold Sponsors</h2>
                <div className="sponsor-imgs">
                    <div className="sponsor-image-pair">
                        <a href="https://www.boeing.com" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.boeing} alt="Boeing" />
                        </a>
                        <div className="sun-moon-stars-container">
                            <a href="https://www.sunmoonandstarslearningcenter.com" target="_blank" rel="noopener noreferrer">
                                <img src={SponsorImages.sunMoonAndStars} alt="Sun Moon and Stars Learning Center" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sponsor-spacer"></div>

                <h2>Silver Sponsors</h2>
                <div className="sponsor-imgs">
                    <div className="sponsor-image-pair">
                        <a href="https://www.econtrols.com" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.econtrols} alt="E-Controls" />
                        </a>
                        <a href="https://www.tesla.com" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.tesla} alt="Tesla" />
                        </a>
                    </div>
                    <div className="sponsor-image-pair">
                        <a href="https://www.haascnc.com" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.haas} alt="Haas" />
                        </a>
                    </div>
                </div>
                <div className="sponsor-spacer"></div>

                <h2>Bronze Sponsors</h2>
                <div className="sponsor-imgs">
                    <div className="sponsor-image-pair">
                        <a href="https://www.gcipnaples.com" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.gulfCoastInternationalProperties} alt="Gulf Coast International Properties" />
                        </a>
                        <a href="https://www.farmerselectric.coop" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.farmersElectricCooperative} alt="Farmers Electric Cooperative" />
                        </a>
                    </div>
                    <div className="sponsor-image-pair">
                        <a href="https://www.rapidharness.com" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.rapidHarness} alt="Rapid Harness" />
                        </a>
                        <a href="https://www.altium.com" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.altium} alt="Altium" />
                        </a>
                    </div>
                    <div className="sponsor-image-pair">
                        <a href="https://www.perficient.com" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.perficient} alt="Perficient" />
                        </a>
                        <a href="https://www.thegillcorp.com" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.gillCorporation} alt="Gill Corporation" />
                        </a>
                    </div>
                </div>
                <div className="bronze-text-sponsors">
                    <h3>Tim Harding</h3>
                    <h3>Chassis Sponsorship</h3>
                </div>
                <div className="sponsor-spacer"></div>

                <h2>Affiliate Sponsors</h2>
                <div className="sponsor-imgs">
                    <div className="sponsor-image-pair">
                        <a href="https://www.airtechintl.com" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.airtech} alt="AirTech" />
                        </a>
                        <a href="https://www.coroflex-cable.com/en/" target="_blank" rel="noopener noreferrer">
                            <img src={SponsorImages.coroflex} alt="Coroflex" />
                        </a>
                    </div>
                    <div className="sponsor-image-pair">
                        <div className="precision-piping-container">
                            <a href="https://www.precisionpipingproducts.com" target="_blank" rel="noopener noreferrer">
                                <img src={SponsorImages.precisionPipingProducts} alt="Precision Piping Products" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="join-section">
                <h1>JOIN OUR JOURNEY</h1>
                <h2>Help us support innovation in electric vehicle technology.</h2>
                <button className="become-a-sponsor-button">
                    <a target='_blank' onClick={() => navigate("/become-sponsors")}>BECOME A SPONSOR</a>
                </button>
            </section>
            <Footer />
        </div>
    );
};

export default Sponsors;
