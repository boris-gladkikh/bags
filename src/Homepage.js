import React from "react";
import bridgeShot from "./img/sf-gg-bridge-shot-LOFI.jpg";
import bagsLogo from "./img/BAGS-logo-box-white.png";
import HomepageCards from "./HomepageCards.js";
import "./Homepage.css";
import HomepageSections from "./HomepageSections";
import sectionDetails from "./sectionDetail";

function Homepage() {
  let norm =
    "BAGS seeks to be a better built, more flexible print solution for Bay Area and west coast businesses.";
  let caps = norm.toUpperCase();
  return (
    <div className="App">
      <div className="banner-homepage">
        <img className="hero-banner" src={bridgeShot} alt="gg bridge" />
        <img className="bags-logo" src={bagsLogo} alt="logo for BAGS" />
      </div>

      <div className="intro-section pb-5">
        <h2 className="staatliches-font mx-3 px-5 pt-5">
          We are a printing & design company with an emphasis on customization
          and environmental graphic implementation.
        </h2>
        <h5 className="roboto-font my-5 pt-5 px-5">
          Bay Area Graphic Solutions (BAGS) is a graphics fabricator,
          installation service, project management service and design firm in one.
        </h5>
        <HomepageCards />
      </div>

      <div className="details-section">
        <HomepageSections details={sectionDetails} />
      </div>

      <div className="uncle">
        <div className="end-section"> </div>
        <div className="box-text">
          <h5 className="roboto-font p-3">{caps}</h5>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
