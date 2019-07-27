import React, { Component } from "react"; 

export default class About extends React.Component{
    render() {
      return (
        <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          {/* About Section Heading */}
          <h2 className="page-section-heading text-center text-uppercase text-white">About Me</h2>
          {/* Icon Divider */}
          <div className="divider-custom divider-light">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* About Section Content */}
          <div className="row">
            <div className="col-lg-4 ml-auto">
              <p className="lead">My passion is creating beautiful websites and web applications. UX is very important. Therefore, my desire is to improve customer experience whenever they use my application. </p>
            </div>
            <div className="col-lg-4 mr-auto">
              <p className="lead">Although keeping things simple and optimized is my goal when developing user interface, focusing on creating beautiful websites and web application is my #1 privilege</p>
            </div>
          </div>
          {/* About Section Button */}
          <div className="text-center mt-4" style={{paddingBottom: '50px'}}>
            <a className="btn btn-xl btn-outline-light " href="https://startbootstrap.com/themes/freelancer/">
              Contact Me!
            </a>
          </div>
        </div>
      </section>

      );
    }
}