import React from 'react';
import ContactForm from './ContactForm.js';

function Contact(){
  return(
    <div  className="App">
    <div className="my-5">
    <h2>Reach Out Anytime.</h2>
    <h6 className="mt-4">
      For inquiries, pricing, and general questions please use the provided form. We will get back to you within 24-36 hours.
    </h6>
    <ContactForm />
    </div>
    </div>
  )
}

export default Contact