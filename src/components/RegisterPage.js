import React, { useState } from 'react';
import './RegisterPage.css';
import axios from 'axios'; // Make sure to install axios

function RegisterPage({ onNavigate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    // Handle registration logic here
    if (password === confirmPassword) {
      const newUser = { name, email, password };

      try {
        // Send POST request to the JSON server
        const response = await axios.post('http://localhost:3001/users', newUser);
        console.log('Registered:', response.data);
        onNavigate('home'); // Navigate to home after registration
      } catch (error) {
        console.error('There was an error registering the user!', error);
      }
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Register</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <button className="back-button" onClick={() => onNavigate('login')}>
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
