import React from "react";
import "./userDashboard.css";

function UserDashboard() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to EECS Connect</h1>
            <p>Connecting students around the world. Share your feedback and let us know how we did!</p>
            {/* <a href="#" className="btn-primary">
              Get Started
            </a> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2><b>Why Choose Us?</b></h2>
          <div className="feature-item">
            <h3>Easy to Use</h3>
            <p>
              Our system is designed to be user-friendly and easy to use for all
              students and staff.
            </p>
          </div>
          <div className="feature-item">
            <h3>Quick and Effective Feedback</h3>
            <p>
              We value your privacy and allow you to communicate quickly through an efficient system with your demonstrators.
            </p>
          </div>
          <div className="feature-item">
            <h3>Real-time Reports</h3>
            <p>
              Get real-time insights/status about your ticket/feedback, providing you with up-to-date information about your education, allowing you to analyse your areas for improvement.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About Us</h2>
          <br></br>
          <p>
            We are are passionate about
            improving the quality of education in our university. Our feedback
            system is designed to help students and staff share their opinions and
            suggestions anonymously.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form action="#" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter Name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter Email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Let us know how we did!" required></textarea>

            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container">
          <p>&copy; 2023 QMUL EECS CONNECT. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )};

export default UserDashboard;