// src/components/Header.js
import React from 'react';
import './Header.css';

function Header({ onNavigate }) {
  return (
    <header className="header">
      <div className="logo" onClick={() => onNavigate('home')}>Train Ticket Booking</div>
      <nav>
        <ul>
          <li onClick={() => onNavigate('home')}>Home</li>
          <li onClick={() => onNavigate('my-bookings')}>My Bookings</li>
          <li onClick={() => onNavigate('support')}>Support</li>
          {/* <li onClick={() => onNavigate('my-bookings')}>My Bookings</li> */}
          <li onClick={() => onNavigate('login')}>Logout</li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
