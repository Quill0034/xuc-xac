import React, { Component } from "react"; 
import './style/App.css'
import './style/navigation.css';
import './style/head.css';
import './style/about.css';

import Head from "./head";
import About from "./about";
import Xucxac from "./xucxac";
import Blackjack from './blackjack';
import Navigation from './navigation';

export default class App extends React.Component {

  render() {
    return (
      <>
      <Navigation/>
      <Head/>
      <About/>
      <div className="wrapper" style={{height: '100%'}}>
        {/* <Sidebar /> */}
        
        <div className="container"  style={{marginTop: '5rem', width: '100%'}}>
        <div className="container" id="promo">
          <div className="jumbotron">
              <h1>Trò chơi may rủi</h1>
              <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              <p><a className="btn btn-primary" role="button">Learn more</a></p>
          </div>
        </div>
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




