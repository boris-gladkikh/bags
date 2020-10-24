import React from 'react';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bagsLogo from './img/BAGS-logo-brand.png';
import './Navigation.css';

function Navigation(){
  return(

    <Navbar className="bg-dark text-white" id="nav">
      <Navbar.Brand className="text-white" href="/"><img className="brand-logo" alt="" src={bagsLogo}></img></Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Item className="mx-2"><NavLink exact to="/">HOME</NavLink></Nav.Item>
        <Nav.Item className="mx-2"><NavLink exact to="/about">ABOUT</NavLink></Nav.Item>
        <Nav.Item className="mx-2"><NavLink exact to="/services">SERVICES</NavLink></Nav.Item>
        <Nav.Item className="mx-2"><NavLink exact to="/projects">PROJECTS</NavLink></Nav.Item>
        <Nav.Item className="mx-2"><NavLink exact to="/contact">CONTACT</NavLink></Nav.Item>
      </Nav>
    </Navbar>
  
  )
}

export default Navigation