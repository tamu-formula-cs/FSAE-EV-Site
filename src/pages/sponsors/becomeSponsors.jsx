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
    <div className="sponsorship-tiers">
      <Header />
      <h1>SPONSORSHIP TIERS</h1>
      <table>
        <thead>

          <tr>
            <th>OUR COMMITMENT TO YOU</th>
            <th>AFFILIATE<br/>Up to $1,500</th>
            <th>BRONZE<br/>$1,500+</th>
            <th>SILVER<br/>$3,500+</th>
            <th>GOLD<br/>$5,000+</th>
            <th>PLATINUM<br/>$8,000+</th>
            <th>TITLE<br/>$17,500</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>501(3)(c) TAX BENEFITS</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr>
            <td>INVITATION TO UNVEILING EVENT</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr>
            <td>HONORED ON OUR WEBSITE</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr>
            <td>LOGO ON TEAM APPAREL</td>
            <td>SMALL</td>
            <td>SMALL</td>
            <td>SMALL</td>
            <td>MEDIUM</td>
            <td>LARGE</td>
            <td>X-LARGE</td>
          </tr>

          <tr>
            <td>SOCIAL MEDIA EXPOSURE</td>
            <td></td>
            <td></td>
            <td>x1</td>
            <td>x2</td>
            <td>x2</td>
            <td>x3</td>
          </tr>

          <tr>
            <td>LOGO ON RACECAR</td>
            <td></td>
            <td></td>
            <td>SMALL</td>
            <td>MEDIUM</td>
            <td>LARGE</td>
            <td>X-LARGE</td>
          </tr>

          <tr>
            <td>HOST RECRUITING EVENTS</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr>
            <td>ACCESS TO TEAM RESUME BOOK</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>✔</td>
            <td>✔</td>
          </tr>

          <tr>
            <td>BRANDED BANNER</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>✔</td>
          </tr>

          <tr>
            <td>SAE DINNER EVENT</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>✔</td>
          </tr>

        </tbody>
      </table>
      
      <button className="become-sponsor-button" onClick={handleSponsorClick}>BECOME A SPONSOR</button>
      <button className="become-sponsor-button" onClick={handleMoreInfoClick}>MORE INFORMATION</button>


      <Footer />
    </div>
  );
}

export default SponsorshipTiers;

