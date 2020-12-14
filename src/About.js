import React from "react";
import sfStreet from "./img/sf-night-storefront-lofi.jpg";
import "./About.css";
import bagsLogo from "./img/BAGS-logo-brand.png";

function About() {
  return (
    <div className="App">
      <div className="about-section">
        <img className="about-pic" src={sfStreet} alt="sf market street"></img>
        <div className="about-header-text">
          <h1>WHO WE ARE</h1>
        </div>
      </div>
      <div id="bags-about-logo">

      <img src={bagsLogo}  alt="bags logo"></img>
      </div>
      <div className="about-text">
        <h1 className="staatliches-font">BAGS was founded by Joe Hardy in the spring of 2020.</h1>
        <h5 className="my-3">
          Owner Joe Hardy has over 16 years of experience in many aspects of
          printing, fabrication and project management. Joe has built a large
          network in the Bay Area and has a vast repertoire of vendors to call
          upon to specialize our focus to our customers needs.
        </h5>
        <p className="my-3">
          Bags seeks to be a better built, more flexible print solution for bay
          area and west coast businesses. By utilizing partnerships with
          traditional print houses we can be more adaptable to the rapidly
          changing economic climate and provide a more thorough service to our
          customers.
        </p>
      </div>
    </div>
  );
}

export default About;
