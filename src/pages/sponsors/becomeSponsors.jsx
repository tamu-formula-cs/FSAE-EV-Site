import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './becomeSponsors.css';

function SponsorshipTiers() {
  const handleSponsorClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdtQi7fqd_5vuXDb-bkmgnH5zBVry04Mak3ltg6Tkz3lAN12w/viewform', '_blank');
  };

  const handleMoreInfoClick = () => {
    window.open('https://tamucs-my.sharepoint.com/:b:/r/personal/bari_vadaria_tamu_edu/Documents/Sponsor%20Packet/Texas%20A%26M%20Formula%20E%20Sponsor%20Packet%202023-2024.pdf?csf=1&web=1&e=N9tURB', '_blank');
  };

  return (
    <div>
      <Header />
      <div className="sponsorship-tiers">
        <h1 className="sponsors-title">SPONSORSHIP TIERS</h1>
        <table className="sponsorship-tiers-table">
          <thead>
            <tr>
              <th className="normal-text">OUR COMMITMENT TO YOU</th>
                <th className="tier-header">
                  <span className="affiliate">AFFILIATE</span><br/>
                  <span className="amount-text">Up to $1,500</span>
                </th>
                <th className="tier-header">
                  <span className="bronze">BRONZE</span><br/>
                  <span className="amount-text">$1,500+</span>
                </th>
                <th className="tier-header">
                  <span className="silver">SILVER</span><br/>
                  <span className="amount-text">$3,500+</span>
                </th>
                <th className="tier-header">
                  <span className="gold">GOLD</span><br/>
                  <span className="amount-text">$5,000+</span>
                </th>
                <th className="tier-header">
                  <span className="platinum">PLATINUM</span><br/>
                  <span className="amount-text">$8,000+</span>
                </th>
                <th className="tier-header">
                  <span className="title-text">TITLE</span><br/>
                  <span className="amount-text">$17,500</span>
                </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="normal-text">501(3)(c) TAX BENEFITS</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
            </tr>
            <tr>
              <td className="normal-text">INVITATION TO UNVEILING EVENT</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
            </tr>
            <tr>
              <td className="normal-text">HONORED ON OUR WEBSITE</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
            </tr>
            <tr>
              <td className="normal-text">LOGO ON TEAM APPAREL</td>
              <td className="logo-text">SMALL</td>
              <td className="logo-text">SMALL</td>
              <td className="logo-text">SMALL</td>
              <td className="logo-text">MEDIUM</td>
              <td className="logo-text">LARGE</td>
              <td className="logo-text">X-LARGE</td>
            </tr>
            <tr>
              <td className="normal-text">SOCIAL MEDIA EXPOSURE</td>
              <td></td>
              <td></td>
              <td className="logo-text">x1</td>
              <td className="logo-text">x2</td>
              <td className="logo-text">x2</td>
              <td className="logo-text">x3</td>
            </tr>
            <tr>
              <td className="normal-text">LOGO ON RACECAR</td>
              <td></td>
              <td></td>
              <td className="logo-text">SMALL</td>
              <td className="logo-text">MEDIUM</td>
              <td className="logo-text">LARGE</td>
              <td className="logo-text">X-LARGE</td>
            </tr>
            <tr>
              <td className="normal-text">HOST RECRUITING EVENTS</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
            </tr>
            <tr>
              <td className="normal-text">ACCESS TO TEAM RESUME BOOK</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="checkmark">✔</td>
              <td className="checkmark">✔</td>
            </tr>
            <tr>
              <td className="normal-text">BRANDED BANNER</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="checkmark">✔</td>
            </tr>
            <tr>
              <td className="normal-text">SAE DINNER EVENT</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="checkmark">✔</td>
            </tr>
          </tbody>
        </table>
        <div className="button-container">
          <button className="become-sponsor-button" onClick={handleSponsorClick}>BECOME A SPONSOR</button>
          <button className="become-sponsor-button" onClick={handleMoreInfoClick}>MORE INFORMATION</button>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default SponsorshipTiers;
