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
import Xucxac from "./xucxac";
import Blackjack from './blackjack';
import Flip from './flip';

export default class App extends Component {

  render() {
    return (
      <>
      <Navigation/>
      <Head/>
      <About/>
      <Portfolio/>
      <Flip/>
      <div className="wrapper" style={{height: '100%'}}>
        {/* <Sidebar /> */}
        
        <div className="container"  style={{marginTop: '5rem', width: '100%'}}>

        <div className="container" style={{textAlign:'center'}}>
              <Xucxac/>
        </div>
        <div className="container" style={{textAlign:'center'}}>
              <Blackjack/>
              </div>

     

        </div>
      </div>
      </>
    );
  }
}




