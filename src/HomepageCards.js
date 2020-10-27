import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./HomepageCards.css";

function HomepageCards() {
  return (
    <div className="px-4">
      <Row>
        <Col sm="12" md="12" lg="4">
          <div className="cardy">
            <h3 className="roboto-font">PRINT</h3>
            <hr />
            <p>
              Kogi echo park messenger bag VHS af. Biodiesel semiotics literally
              marfa skateboard. Viral hot chicken glossier distillery banjo
              ethical williamsburg pug live-edge synth narwhal. Keffiyeh
              waistcoat 90's disrupt stumptown, tousled twee lo-fi.
            </p>
          </div>
        </Col>

        <Col sm="12" md="12" lg="4">
          <div className="cardy">
            <h3 className="roboto-font" >DESIGN</h3>
            <hr />
            <p>
              Kogi echo park messenger bag VHS af. Biodiesel semiotics literally
              marfa skateboard. Viral hot chicken glossier distillery banjo
              ethical williamsburg pug live-edge synth narwhal. Keffiyeh
              waistcoat 90's disrupt stumptown, tousled twee lo-fi.
            </p>
          </div>
        </Col>

        <Col md="12" lg="4">
          <div className="cardy">
            <h3 className="roboto-font">INSTALLATION</h3>
            <hr />
            <p>
              Kogi echo park messenger bag VHS af. Biodiesel semiotics literally
              marfa skateboard. Viral hot chicken glossier distillery banjo
              ethical williamsburg pug live-edge synth narwhal. Keffiyeh
              waistcoat 90's disrupt stumptown, tousled twee lo-fi.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HomepageCards;
