import React from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer(){
  return(

    <Navbar>
      <Nav className="m-auto">
        <Nav.Item><NavLink exact to="/about">ABOUT</NavLink></Nav.Item>
        <Nav.Item><NavLink exact to="/services">SERVICES</NavLink></Nav.Item>
        <Nav.Item><NavLink exact to="/projects">PROJECTS</NavLink></Nav.Item>
        <Nav.Item><NavLink exact to="/contact">CONTACT</NavLink></Nav.Item>
      </Nav>
    </Navbar>
  
  )
}

export default Footer