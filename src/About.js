import React from "react";
import sfStreet from './img/sf-night-storefront-shot.jpg'
// import sfStreet from './img/sf-overhead-shot.jpg'
import './About.css';

function About() {
  return (
    <div className="App">
      <div className="about-section">
      <img className="about-pic" src={sfStreet} alt="sf market street"></img>
      <div className="about-header-text">
        <h1>WHO WE ARE</h1>
      </div>
      </div>
      <div className="text-center about-text">
        <h5 className="my-3">
          BAGS was founded by Joe Hardy in the spring of 2020 as a result of the
          Covid 19 pandemic. Owner Joe Hardy has over 16 years of experience in
          many aspects of printing, fabrication and project management.
          <br />
           Particularly in the Bay Area, Joe has built a large network and
          has a vast repertoire of vendors to call upon to specialize our focus
          to our customers needs.
        </h5>
        <h5 className="my-3">
          Bags seeks to be a better built, more flexible print solution for bay
          area and west coast businesses. By utilizing various streams of
          revenue and partnerships with traditional print houses we can be more
          adaptable to the rapidly changing economic climate and provide a more
          thorough service to our customers.
        </h5>
      </div>
    </div>
  );
}

export default About;
