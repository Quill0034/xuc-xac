import React, { Component } from "react"; 
import './App.css';
import './Sidebar.css';
import Xucxac from "./xucxac";
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
              <h1>Heading text</h1>
              <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
              <p><a class="btn btn-primary" role="button">Learn more</a></p>
          </div>
        </div>
          <Xucxac/>
        </div>
      </div>
      </>
    );
  }
}




