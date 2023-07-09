import React from 'react';
// import ReactDOM from 'react-dom/client';

export default function Contact() {
  return (
  <div className="container">
  <h1>Contact</h1>
  <form target="_blank" action="" method="">
    <div className="form-group">
      <div className="form-row">
        <div className="col">
          <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
        </div>
        <div className="col">
          <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
        </div>
      </div>
    </div>
    <div className="form-group">
      <textarea placeholder="Your Message" className="form-control" name="message" rows="15" required></textarea>
    </div>
    <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
  </div>
  )};

