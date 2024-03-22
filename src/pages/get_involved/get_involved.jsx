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
        <p>We're glad you have an interest in joining Formula E! We have both a business team and an engineering team, which include the following subteams:</p>
        <div className="subteams">
          <div className="subteam">
            <h2>Business:</h2>
            <ul>
              <li>Sales</li>
              <li>Marketing</li>
              <li>Finance</li>
            </ul>
          </div>
          <div className="subteam">
            <h2>Engineering:</h2>
            <ul>
              <li>Aero</li>
              <li>Battery</li>
              <li>Chassis</li>
              <li>Electronics</li>
              <li>Powertrain</li>
              <li>Suspension</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="join">
        <h1 className="join-title">How to Join</h1>
        <div className="buttons-container">
          <button className="info-button join-button">More Info</button>
          <button className="engineering-button join-button">Engineering Application</button>
          <button className="business-button join-button">Business Application</button>
        </div>
      </div>

      <div className="contact">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={contactFormData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" value={contactFormData.email} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" value={contactFormData.message} onChange={handleChange}></textarea>
          <div className="send-button-container">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default GetInvolved;
