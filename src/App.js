import React, { Component } from "react"; 
import './style/App.css'
import './style/navigation.css';
import './style/head.css';
import './style/about.css';
import './style/portfolio.css';
import './style/flip.css';

import Navigation from './navigation';
import Head from "./head";
import About from "./about";
import Portfolio from "./portfolio";

export default class App extends Component {

  render() {
    return (
      <>
      <Navigation/>
      <Head/>
      <About/>
      <Portfolio/>
      <div className="wrapper" style={{height: '100%'}}>

      </div>
      </>
    );
  }
}




