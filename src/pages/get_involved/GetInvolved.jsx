import React, { useState } from 'react';
import './GetInvolved.css';
import GetInvolvedVideo from '../../assets/IntroVid.mp4';
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
    console.log(contactFormData); n
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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptatem sunt quia, molestias repudiandae unde saepe distinctio illum voluptate id, delectus architecto laboriosam maxime. Quis alias atque quae nulla dolores.</p>
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
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default GetInvolved;
