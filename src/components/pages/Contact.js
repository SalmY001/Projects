import React from 'react';

// Create contact form
export default function Contact() {
  return (
  <div className="container about contact" style={{marginBottom:"100px"}}>
  <h2>Contact</h2>
  <form target="_blank" action="" method="">
    <div className="form-group">
      <div className="form-row">
        <div className="col">
          <p>Name:</p>
          <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
        </div>
        <div className="col">
          <p>Email:</p>
          <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
        </div>
        <div className="col">
          <p>Message:</p>
          <textarea placeholder="Your Message" className="form-control" name="message" rows="15" required></textarea>
        </div>
      </div>
    </div>
    <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
  </div>
  )};

