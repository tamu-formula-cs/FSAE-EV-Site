import React, { useState } from 'react';
import './get_involved.css';
import GetInvolvedVideo from '../../assets/intro_vid.mp4';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const GetInvolved = () => {

  const initialContactFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [contactFormData, setContactFormData] = useState(initialContactFormData);
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setContactFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
    setContactFormSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setContactFormSubmitted(true);
    console.log(contactFormData);
  };

  return (
    <>
      <Header />
      <div className="title">
        <h1>Get Involved</h1>
      </div>
      <div className="videoContainer">
        <video controls className="videoStyle" >
          <source src={GetInvolvedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="recruitment">
        <h1 className="recruitment-title">Our Recruitment Process</h1>
        <p>Interested in joining Formula E? We have business, operations, and engineering teams, which categorize the following subteams:</p>
        <div className="subteams">
          <div className="subteam">
            <h2>Business:</h2>
            <p>Sales</p>
            <p>Marketing</p>
            <p>Finance</p>
          </div>
          <div className="subteam">
            <h2>Operations:</h2>
            <p>Facilities Management</p>
            <p>Transportation Logistics</p> 
            <p>Computer Science</p>
          </div>
          <div className="subteam">
            <h2>Engineering:</h2>
            <p>Aerodynamics</p>
            <p>High-Voltage Battery</p>
            <p>Chassis</p>
            <p>Low-Voltage Electronics</p> 
            <p>Powertrain</p>
            <p>Suspension</p>
          </div>
        </div>
      </div>

      <div className="join">
        <h1 className="join-title">How to Join</h1>
        <div className="join-buttons-container">
          <a href="https://forms.office.com/pages/responsepage.aspx?id=44HzaNpGuUe6V28yK48NoSrqd-GpUQxLog_m04LE3ExUNUZUQVY4OVA2V0pVUDFCWE9aNU84NFpEUy4u">
            <button className="business-button join-button">Business Application</button>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5lz2CDG8bV8xVcwv9XsgCUsVMwg8ehZ37KLrOcfLQU92W7A/viewform">
            <button className="operations-button join-button">Operations Application</button>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqrb4vc-XoosoE9pfsxD8bJV0U_gP9SCxY0DHdfq97Fp4jHw/viewform?pli=1">
            <button className="engineering-button join-button">Engineering Application</button>
          </a>
        </div>
      </div>

      {/* <div className="contact">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={contactFormData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" value={contactFormData.email} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" value={contactFormData.message} onChange={handleChange}></textarea>
          <div className="send-button-container">
            <button type="submit">Send</button>
          </div>
        </form>
      </div> */}

      <div className="contact-email">
        <h1>Have any questions? Contact us at <a href="mailto:tamuformulaelectric@gmail.com">tamuformulaelectric@gmail.com</a></h1>

      </div>


      <Footer />
    </>
  );
};

export default GetInvolved;
