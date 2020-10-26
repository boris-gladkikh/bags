import React from 'react';
import ContactForm from './ContactForm.js';
import oakland from "./img/sf-sunset.jpg";


function Contact(){
  return(
    <div  className="App">
        <div className="about-section">
        <img className="about-pic" src={oakland} alt="sf market street"></img>
        <div className="about-header-text">
          <h1>REACH OUT ANYTIME.</h1>
        </div>
      </div>
    <div className="my-5">
    <h6 className="mt-4">
      For inquiries, pricing, and general questions please use the provided form. We will get back to you within 24-36 hours.
    </h6>
    <ContactForm />
    </div>
    </div>
  )
}

export default Contact