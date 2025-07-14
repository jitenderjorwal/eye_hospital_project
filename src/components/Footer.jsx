import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h3>Bharti Eye Foundation</h3>
        <p>
          Providing world-class eye care since 1985. Your vision is our mission.
        </p>
        <div className='footer-links'>
          <a href='/'>Home</a>
          <a href='/about'>About Us</a>
          <a href='/services'>Services</a>
          <a href='/contact'>Contact</a>
        </div>
        <p className='footer-copy'>
          &copy; {new Date().getFullYear()} Bharti Eye Foundation. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
