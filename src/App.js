import React, { Component } from "react"; 
import './App.css';
import './Sidebar.css';
import Xucxac from "./xucxac";
import Blackjack from './blackjack';
import Navigation from './navigation';
import Sidebar from './sidebar';
export default class App extends React.Component {

  render() {
    return (
      <>
      <Navigation/>
      <div className="wrapper" style={{height: '100vh'}}>
        <Sidebar />
        
        <div className="container"  style={{marginTop: '5rem', width: '100%'}}>
        <div className="container" id="promo">
          <div class="jumbotron">
              <h1>Lucky App</h1>
              <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              <p><a class="btn btn-primary" role="button">Learn more</a></p>
          </div>
        </div>
        <div className="container" style={{textAlign:'center'}}>
          <div className="row">
            <div className="col-md-6">
              <Xucxac/>
            </div>
            <div className="col-md-6">
              <Blackjack/>
            </div>
          </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}




