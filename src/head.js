import React, { Component } from "react"; 
import avatar from "./assets/avatar.jpg";
export default class Head extends React.Component{
    render() {
      return (
        <>
        <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
        {/* Masthead Avatar Image */}
        <img className="masthead-avatar mb-5" src={avatar} alt="" />
        {/* Masthead Heading */}
        <h1 className="masthead-heading text-uppercase mb-0 font-weight-bold">QUILL TRAN</h1>
        {/* Icon Divider */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon">
            <i className="fas fa-star" />
          </div>
          <div className="divider-custom-line" />
        </div>
        {/* Masthead Subheading */}
        <p className="masthead-subheading font-weight-light mb-0 font-weight-bold">Business Analyst - Web Designer - Web Developer</p>
      </div>
      </header>
      </>
      );
    }
}