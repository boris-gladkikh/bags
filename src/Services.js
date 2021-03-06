import React from "react";
import sfStreet from "./img/sf-street-crossing-lofi.jpg";
import Projects from './Projects';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Services.css";
import projects from './projectList';

function Services() {
  return (
    <div className="App">
      <div className="about-section">
        <img className="about-pic" src={sfStreet} alt="sf market street"></img>
        <div className="about-header-text">
          <h1>WHAT WE DO</h1>
        </div>
      </div>
    
   <div className="mt-5">
   <Row className="services-box">
          <Col md="6" sm="12">
            <div className="my-5 ">
              <h1 className=" anton-font text-center">DESIGN</h1>
              <p className="text-left px-5">
                The design portion of the business is based on print project
                management and customization. We work with our customers to help
                implement their design across a wide range of print mediums. In
                addition we provide design and fabrication options to ensure
                your design is seen the way you intend while staying
                within the allotted budget.
              </p>
            </div>
          </Col>
          <Col md="6" sm="12">
            <div className="my-5 ">
              <h1 className=" anton-font text-center ">PRINT & INSTALLATION</h1>
              <p className=" text-left px-5">
                The printing side of the business is based on manufacturing and
                installation. We provide an in-house printing firm that
                eliminates many of the pitfalls that typically arise in having
                separate design and print departments. Additionally we also
                provide installation services for graphics created by third
                party fabricators to customers' specifications.
              </p>
            </div>
          </Col>
        </Row>

   </div>

        <div className="projects-box pt-3  mb-5">
        <h1 className=" staatliches-font text-center pt-2">Projects</h1>

          <Projects projects={projects} />

        </div>
  
      </div>
  );
}

export default Services;
