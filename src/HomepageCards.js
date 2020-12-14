import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HomepageCards.css";

function HomepageCards() {
  return (
    <div className="px-4">
      <Row>
        <Col sm="12" md="12" lg="4">
          <div className="cardy">
            <h2 className="anton-font">PRINT</h2>
            <hr />
            <p>
              We produce your graphics in-house, while also working with outside
              printers to offer several options for any media. From vinyl,
              fabric, banner and experimental media, to print capabilities such
              as eco solvent, latex, UV, direct to substrate, dye-sublimation.
              We will explore every option to make sure your design is presented
              the way you envisioned it to be.  
            </p>
          </div>
        </Col>

        <Col sm="12" md="12" lg="4">
          <div className="cardy">
            <h2 className="anton-font">DESIGN</h2>
            <hr />
            <p>
              Our design team will help you build and improve on your brand, or
              design your image from scratch to help you turn your ideas into
              reality. Through our knowledge of print applications, we will
              take your ideas and implement them across a variety of media and
              help you communicate your message to your customers clearly. 
            </p>
          </div>
        </Col>

        <Col md="12" lg="4">
          <div className="cardy">
            <h2 className="anton-font">INSTALLATION</h2>
            <hr />
            <p>
              Our installation team is professional, timely, and knowledgeable.
              We arrive on site prepared and ready to address any issues that
              arise from graphic application. We can provide thorough site
              surveys to communicate to your design team how to prepare files
              for the right application so you are aware of all difficulties and
              the graphics are viewed as intended. 
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HomepageCards;
