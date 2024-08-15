import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerup">
      <div className="footer-section">
        <h4>QUICK LINKS</h4>
        <h5>INTERNATIONAL BUSINESS ADVANTAGE</h5>
        <ul>
          <li>ABOUT US</li>
          <li>BUSINESS PARTNERS</li>
          <li>CURRENT JOB OPENINGS</li>
          <li>EVENTS & ENTERTAINMENT</li>
          <li>EDITORIAL</li>
          <li>FAQ’s</li>
          <li>CONTACT US</li>
          <li>TERM & CONDITIONS</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>PROGRAMS</h4>
        <ul>
          <li>VRK SUCCESSION COACHING ACADEMY</li>
          <li>MUSIC & ART DESIGN ACADEMY</li>
          <li>TRAIN THE TRAINER</li>
          <li>TOP SALES PROGRAMS</li>
          <li>SOFTSKILLS PROGRAMS</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Information</h4>
        <li className="right-align2"><a href="tel: +918802756666, 8802706666"  style={{ textDecoration: 'none' }}><i className="fa-solid fa-phone" style={{ color: 'white' }}></i> +91 8802756666, +91 8802706666</a></li>
        <li className="right-align"><a href="mailto:business@ibasearch.com"  style={{ textDecoration: 'none' }}><i className="fa-solid fa-envelope" style={{ color: 'white' }}></i> business@ibasearch.com</a></li>
      </div>
      <div className="footer-section">
        <h4>GET YOUR MEMBERSHIP</h4>
        <form>
          <input type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter Your Phone" />
          <input type="email" placeholder="Enter Your Email" />
          <textarea placeholder="Enter your Message"></textarea>
          <button>Submit</button>
        </form>
      </div>
      </div>
      <div className="foorterdown"><p>Made with love by Partima Jain</p></div>
    </footer>
    
  );
};

export default Footer;
