import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navigation from './Navigation.js';
import About from './About.js';
import Services from './Services.js';
import Contact from './Contact.js';
import Homepage from './Homepage.js';
import Footer from './Footer.js';


function Routes(){
  return(
    <>
    <Navigation/>
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Redirect to="/" />
    </Switch>
    <Footer />

    </>
  )
}

export default Routes