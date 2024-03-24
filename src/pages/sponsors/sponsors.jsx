import React from 'react';
import SponsorImages from './sponsor_images';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './sponsors.css';

const Sponsors = () => {

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
                        <img src={SponsorImages.brembo} alt="Brembo" />
                        <img src={SponsorImages.mastercam} alt="Mastercam" />
                    </div>
                    <img src={SponsorImages.burnsMcDonnell} alt="Burns & McDonnell" />
               </div>
               <div className="sponsor-spacer"></div>
              

                <h2>Silver Sponsors</h2>
                <div className="sponsor-imgs">
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.boeing} alt="Boeing" />
                        <img src={SponsorImages.econtrols} alt="E-Controls" />
                    </div>
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.caterpillar} alt="Caterpillar" />
                        <img src={SponsorImages.perficient} alt="Perficient" />
                    </div>
                    <img src={SponsorImages.tesla} alt="Tesla" />
                </div>
                <div className="sponsor-spacer"></div>

                <h2>Bronze Sponsors</h2>
                <div className="sponsor-imgs">
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.eurotech} alt="Eurotech" />
                        <img src={SponsorImages.farmersElectricCooperative} alt="Farmers Electric Cooperative" />
                    </div>
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.rapidHarness} alt="Rapid Harness" />
                        <img src={SponsorImages.skf} alt="SKF" />
                    </div>
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.nsk1} alt="NSK" />
                        <img src={SponsorImages.altium} alt="Altium" />
                    </div>
                </div>
                <div className="sponsor-spacer"></div>

                <h2>Affiliate Sponsors</h2>
                <div className="sponsor-imgs">
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.harding1} alt="Harding Drilling" />
                        <img src={SponsorImages.coroflex} alt="Coroflex" />
                    </div>
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.airtech} alt="AirTech" />
                        <img src={SponsorImages.gulfCoastInternationalProperties} alt="Gulf Coast International Properties" />
                    </div>
                    <div className="sponsor-image-pair">
                        <img src={SponsorImages.precisionPipingProducts} alt="Precision Piping Products" />
                        <img src={SponsorImages.sunMoonAndStars} alt="Sun Moon and Stars Learning Center" />
                    </div>
                    <div className="affiliate-text-sponsors">
                        <h3>Mr. McClanahan</h3>
                        <h3>Carl Luckenbach</h3>
                        <h3>Tim Harding</h3>
                    </div>
                </div>
            </section>

            <section className="join-section">
                <h1>JOIN OUR JOURNEY AS A SPONSOR</h1>
                <h2>Help us support innovation in electric vehicle technology.</h2>
                <button className="donate-button">
                    <a href="https://www.gofundme.com/f/texas-am-sae-formula-electric-racing?utm_medium=more&utm_source=customer&utm_campaign=p_cp%2Bshare-sheet&utm_term=undefined" target='_blank'>DONATE</a>
                </button>
            </section>
            <Footer />
        </div>
    );
};

export default Sponsors;