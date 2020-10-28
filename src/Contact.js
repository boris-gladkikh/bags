import React from "react";
import ContactForm from "./ContactForm.js";
import oakland from "./img/sf-sunset.jpg";
import './Contact.css';

function Contact() {
  return (
    <div className="App">
      <div className="about-section">
        <img className="about-pic" src={oakland} alt="sf market street"></img>
        <div className="contact-header-text">
          <h1>REACH OUT ANYTIME.</h1>
        </div>
      </div>
      <div className="noto-font contact-section my-5">
        <h4>707-563-9435</h4>
        <h4><a href="mailto:info@bagraphicsolutions.com">info@bagraphicsolutions.com</a></h4>
        <h6 className="noto-font mt-4">
          We are available by phone from 9AM-5PM PST. <br />
          For inquiries, pricing, and general questions please use the provided
          form.
        </h6>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
