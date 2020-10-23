import React from "react";
import bridgeShot from "./img/sf-gg-bridge-shot.jpg";
import bagsLogo from "./img/BAGS-logo-box-white.png";
import van from "./img/bags-van-3.jpg";
import HomepageCards from "./HomepageCards.js";
import "./Homepage.css";
import HomepageSections from "./HomepageSections";
import Button from 'react-bootstrap/Button';

function Homepage() {
  return (
    <div className="App">
      
      <div className="banner-homepage">
        <img className="hero-banner" src={bridgeShot} alt="gg bridge" />
        <img className="bags-logo" src={bagsLogo} alt="logo for BAGS" />
      </div>

      <div className="intro-section">
        <h2 className="px-5 pt-5">
          We are a printing & design company with an emphasis on customization
          and environmental graphic implementation.
        </h2>
        <h5 className="my-5 px-5">
          Bay Area Graphic Solutions (BAGS) is a graphics fabricator, installation service, project
          management service and design firm in one.
        </h5> 
        <HomepageCards />
      </div>

   
      <div className="details-section">
        <HomepageSections />
      </div>

      <div className="end-section">
        <h5 className="py-5">
          BAGS seeks to be a better built, more flexible print solution for Bay
          Area and west coast businesses.
        </h5>
        <h6>More Information and Previous Projects:</h6>
        <Button variant="secondary" className="mx-1">SERVICES</Button>
        <Button variant="secondary" className="mx-1">GALLERY</Button>
      </div>
    </div>
  );
}

export default Homepage;
