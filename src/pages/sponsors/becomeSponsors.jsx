import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './becomeSponsors.css';

export default class BecomeSponsors extends React.Component {
  tiers = [
        { name: 'AFFILIATE', price: 'Up to $1,500', benefits: ['501(C)(3) TAX BENEFITS', 'INVITATION TO UNVEILING EVENT', 'HONORED ON OUR WEBSITE', 'LOGO ON TEAM APPAREL'] },
        { name: 'BRONZE', price: '$1,500+', benefits: ['501(C)(3) TAX BENEFITS', 'INVITATION TO UNVEILING EVENT', 'HONORED ON OUR WEBSITE', 'LOGO ON TEAM APPAREL'] },
        { name: 'SILVER', price: '$3,500+', benefits: ['501(C)(3) TAX BENEFITS', 'INVITATION TO UNVEILING EVENT', 'HONORED ON OUR WEBSITE', 'LOGO ON TEAM APPAREL', 'SOCIAL MEDIA EXPOSURE', 'LOGO ON RACECAR'] },
        { name: 'GOLD', price: '$5,000+', benefits: ['501(C)(3) TAX BENEFITS', 'INVITATION TO UNVEILING EVENT', 'HONORED ON OUR WEBSITE', 'LOGO ON TEAM APPAREL', 'SOCIAL MEDIA EXPOSURE', 'LOGO ON RACECAR'] },
        { name: 'PLATINUM', price: '$8,000+', benefits: ['501(C)(3) TAX BENEFITS', 'INVITATION TO UNVEILING EVENT', 'HONORED ON OUR WEBSITE', 'LOGO ON TEAM APPAREL', 'SOCIAL MEDIA EXPOSURE', 'LOGO ON RACECAR', 'HOST RECRUITING EVENTS', 'ACCESS TO TEAM RESUME BOOK'] },
        { name: 'TITLE', price: '$17,500', benefits: ['501(C)(3) TAX BENEFITS', 'INVITATION TO UNVEILING EVENT', 'HONORED ON OUR WEBSITE', 'LOGO ON TEAM APPAREL', 'SOCIAL MEDIA EXPOSURE', 'LOGO ON RACECAR', 'HOST RECRUITING EVENTS', 'ACCESS TO TEAM RESUME BOOK', 'BRANDED BANNER', 'SAE DINNER EVENT'] },
  ];

  getAllBenefits = () => {
    return Array.from(new Set(this.tiers.flatMap(tier => tier.benefits)));
  };

  render() {
    const allBenefits = this.getAllBenefits();

    return (
      <div className="sponsorship-tiers">
        <Header />
        <h1 className="title">SPONSORSHIP TIERS</h1>
        <h2 className="title">OUR COMMITMENT TO YOU</h2>
        <div className="tiers-grid">
          <div className="grid-header commitment">TIERS</div>
          {this.tiers.map((tier, index) => (
            <div key={index} className="grid-header">
              <h2>{tier.name}</h2>
              <p>{tier.price}</p>
            </div>
          ))}
          {allBenefits.map((benefit, index) => (
            <React.Fragment key={index}>
              <div className="benefit-label">{benefit}</div>
              {this.tiers.map((tier, tierIndex) => (
                <div key={`${index}-${tierIndex}`} className={`benefit-checkmark ${tier.benefits.includes(benefit) ? 'included' : ''}`}>
                  {tier.benefits.includes(benefit) && <span className="checkmark">&#10003;</span>}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
        <button className="sponsor-button">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdtQi7fqd_5vuXDb-bkmgnH5zBVry04Mak3ltg6Tkz3lAN12w/viewform" target="_blank" rel="noopener noreferrer">
        BECOME A SPONSOR
        </a>
        </button>
        <Footer />
      </div>
    );
  }
}
