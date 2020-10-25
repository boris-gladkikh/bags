import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <div className="text-center bg-dark text-white">

      <Navbar className="text-white py-5">
        <Nav className="m-auto">
          <Nav.Item className="mx-2">
            <NavLink exact to="/">
              <small>HOME</small>
            </NavLink>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <NavLink exact to="/about">
              <small>ABOUT</small>
            </NavLink>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <NavLink exact to="/services">
              <small>SERVICES</small>
            </NavLink>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <NavLink exact to="/projects">
              <small>PROJECTS</small>
            </NavLink>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <NavLink exact to="/contact">
              <small>CONTACT</small>
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar>
      <div className="pt-5" style={{backgroundColor: "rgb(58, 58, 58)"}
}>
      <small><a href="#nav">Back to Top</a></small><br/>
      <small>Bay Area Graphic Solutions</small><br />
      <small>1-707-563-9435</small><br />
      <small><a href="mailto:info@bagraphicsolutions.com">info@bagraphicsolutions.com</a></small> <br/>
      <small>Website by <a href="https://borisgladkikh.com" target="_blank" rel="noopener noreferrer">Boris Gladkikh</a></small>

      </div>
    </div>
  );
}

export default Footer;
