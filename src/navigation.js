import React, { Component } from "react"; 

export default class Navigation extends React.Component{
    render() {
      return (
  
        <nav className="navbar fixed-top navbar-light navbar-expand-md bg-light">
          <div className="container-fluid"><a className="navbar-brand" href="#"><strong>Lucky App</strong></a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
          {/* <button className="navbar-toggler navbar-toggler-left" data-toggle="collapse" data-target=".sidebar" style={{ margin: '10px' }}>
            <span className="navbar-toggler-icon"><i className="fas fa-bars hamburger"></i></span>
        </button> */}
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item" role="presentation"><a className="nav-link active" href="#">Home</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link" href="#">Contact</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link" href="#">Sign in</a></li>
                {/* <li className="nav-item" role="presentation"><a className="nav-link" href="#">Blogs</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link" href="#">contact</a></li> */}
              </ul>
            </div>
          </div>
        </nav>
      );
    }
}