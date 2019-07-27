import React, { Component } from "react"; 

export default class Flip extends Component{
    render() {
      return (
  
        <div>
        <div id="coin">
          <div className="side-a" />
          <div className="side-b" />
        </div>
        <h1>Click on coin to flip</h1>
      </div>
      );
    }
}