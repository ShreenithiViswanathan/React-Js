// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Train Ticket Booking. All rights reserved.</p>
      <div className="footer-links">
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/about">About Us</a>
      </div>
    </footer>
  );
}

export default Footer;
