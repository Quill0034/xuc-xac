import React, { Component } from "react"; 

export default class Contact extends Component{
    render() {
      return (
        <>
        <section className="page-section" id="contact">
        <div className="container" style={{marginTop: '50px', height:'80vh'}}>
          {/* Contact Section Heading */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 ">Contact Me</h2>
          {/* Icon Divider */}
          <div className="divider-custom">
            <div className="divider-custom-line" />
            <div className="divider-custom-icon">
              <i className="fas fa-star" />
            </div>
            <div className="divider-custom-line" />
          </div>
          {/* Contact Section Form */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="form-group">

<div className="col-xs-6">
    <label htmlFor="first_name"><h5>First Name</h5></label>
    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="Enter First Name" title="enter your first name if any." />
</div>
</div>
<div className="form-group">

<div className="col-xs-6">
    <label htmlFor="last_name"><h5>Last Name</h5></label>
    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Enter Last Name" title="enter your last name if any." />
</div>
</div>
<div className="form-group">
<div className="col-xs-6">
    <label htmlFor="phone"><h5>Date Of Birth</h5></label>
    <input type="Date" className="form-control" />
</div>
</div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </>
      );
    }
}