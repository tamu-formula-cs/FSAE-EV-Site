import React, {useEffect } from 'react';
import SponsorImages from './sponsor_images';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './sponsors.css';
import {useNavigate} from 'react-router-dom';

{/* <img src={SponsorImages.caterpillar} alt="Caterpillar" />
 */}




const Sponsors = () => {
    const navigate = useNavigate();
    const platinumSponsors = [{ name: 'General Motors', logo: 'path/to/general-motors-logo.png' }];

    return (
        <div className="main-container">
            <Header />
            <h1 className="sponsors-title">OUR SPONSORS</h1>
            <section className="sponsors-section">
                <h2>Title Sponsors</h2>
                <div className="sponsor-imgs">
                   <div className="sponsor-image-pair">
                        <img src={SponsorImages.generalMotors3} alt="General Motors" />
                        <img src={SponsorImages.vistra} alt="Vistra" />
                   </div>
                </div>
                <div className="sponsor-spacer"></div>

                <h2>Platinum Sponsors</h2>
                <div className="sponsor-imgs">
                    <img src={SponsorImages.additiveAtScale} alt="Additive at Scale" />
                </div>
                <div className="sponsor-spacer"></div>
                <h2>Gold Sponsors</h2>
               <div className="sponsor-imgs">
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.boeing} alt="Boeing" />
                        <div className="sun-moon-stars-container">
                            <img src={SponsorImages.sunMoonAndStars} alt="Sun Moon and Stars Learning Center" />
                        </div>
                    </div>
               </div>
               <div className="sponsor-spacer"></div>
                <h2>Silver Sponsors</h2>
                <div className="sponsor-imgs">
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.econtrols} alt="E-Controls" />
                        <img src={SponsorImages.tesla} alt="Tesla" />
                    </div>
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.haas} alt="Haas" />
                    </div>
                </div>
                <div className="sponsor-spacer"></div>

                <h2>Bronze Sponsors</h2>
                <div className="sponsor-imgs">
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.gulfCoastInternationalProperties} alt="Gulf Coast International Properties" />
                        <img src={SponsorImages.farmersElectricCooperative} alt="Farmers Electric Cooperative" />
                    </div>
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.rapidHarness} alt="Rapid Harness" />
                        <img src={SponsorImages.altium} alt="Altium" />
                    </div>
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.perficient} alt="Perficient" />
                        <img src={SponsorImages.gillCorporation} alt="Gill Corporation" />
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
                        <img src={SponsorImages.airtech} alt="AirTech" />
                        <img src={SponsorImages.coroflex} alt="Coroflex" />
                    </div>
                    <div className="sponsor-image-pair">
                        <div className="precision-piping-container">
                            <img src={SponsorImages.precisionPipingProducts} alt="Precision Piping Products" />
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