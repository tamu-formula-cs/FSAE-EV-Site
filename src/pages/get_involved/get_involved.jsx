import React, { useState } from 'react';
import './get_involved.css';
import GetInvolvedVideo from '../../assets/intro_vid.mp4';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      console.log('Form submitted successfully', response);

      form.reset();
      setThankYouMessageVisible(true);

      setTimeout(() => {
        setThankYouMessageVisible(false);
      }, 4000);
    } catch (error) {
      console.error('Error submitting form:', error, error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="title">
        <h1>Get Involved</h1>
      </div>
      <div className="videoContainer">
        <video autoPlay muted controls className="videoStyle">
          <source src={GetInvolvedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="recruitment">
        <h1 className="recruitment-title">How To Join</h1>
        <p>Interested in joining Formula E? Apply for our business, operations, and engineering teams.</p>
        <div className="subteams">
          <div className="subteam">
            <h2>Business:</h2>
            <p>Sales</p>
            <p>Marketing</p>
            <p>Finance</p>
            <Link to="/get-involved/business-more-info">
              <button className="business-button more-info-button">More Info</button>
            </Link>
            {/* <a href="https://forms.office.com/pages/responsepage.aspx?id=44HzaNpGuUe6V28yK48NoSrqd-GpUQxLog_m04LE3ExUNUZUQVY4OVA2V0pVUDFCWE9aNU84NFpEUy4u"> */}
            <button className="business-button join-button">Closed</button>
            {/* </a> */}
          </div>
          <div className="subteam">
            <h2>Operations:</h2>
            <p>Facilities Management</p>
            <p>Transportation Logistics</p>
            <p>Computer Science</p>
            <Link to="/get-involved/operations-more-info">
              <button className="operations-button more-info-button">More Info</button>
            </Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5lz2CDG8bV8xVcwv9XsgCUsVMwg8ehZ37KLrOcfLQU92W7A/viewform">
              <button className="operations-button join-button">Closed</button>
            </a>
          </div>
          <div className="subteam">
            <h2>Engineering:</h2>
            <p>Aerodynamics</p>
            <p>High-Voltage Battery</p>
            <p>Chassis</p>
            <p>Low-Voltage Electronics</p>
            <p>Powertrain</p>
            <p>Suspension</p>
            <Link to="/get-involved/engineering-more-info">
              <button className="engineering-button more-info-button">More Info</button>
            </Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqrb4vc-XoosoE9pfsxD8bJV0U_gP9SCxY0DHdfq97Fp4jHw/viewform?pli=1">
              <button className="engineering-button join-button">Apply here</button>
            </a>
          </div>
        </div>
      </div>

      <div className="contact">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScIDzc4swg6AYECqs3vnjOvldE3cwpr29QLivPrr0SVa5FJNw/formResponse?pli=1" onSubmit={handleSubmit}>
          <input type="text" name="entry.276066810" placeholder="Your Name" />
          <input type="email" name="entry.1504943651" placeholder="Your Email" />
          <textarea name="entry.412394112" placeholder="Your Message"></textarea>
          <div className="send-button-container">
            <button type="submit">Send</button>
          </div>
        </form>
        {thankYouMessageVisible && (
          <div id="thankYouMessage">Thanks for contacting us! We'll reach out soon.</div>
        )}

      </div>

      <Footer />
    </>
  );
};

export default GetInvolved;
