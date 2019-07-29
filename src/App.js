import React, { Component } from "react"; 
import './style/App.css'
import './style/navigation.css';
import './style/head.css';
import './style/about.css';
import './style/portfolio.css';
import './style/flip.css';
import './style/contact.css';

import Navigation from './navigation';
import Head from "./head";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";

export default class App extends Component {

  render() {
    return (
      <>
      <Navigation/>
      <Head/>
      <About/>
      <Portfolio/>
      <Contact/>
      <div className="scroll-to-top d-lg-none position-fixed ">
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
          <i className="fa fa-chevron-up" />
        </a>
      </div>
      </>
    );
  }
}




