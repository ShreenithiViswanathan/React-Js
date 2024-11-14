import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';

function LoginPage({ onNavigate, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch users from the JSON server
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;

      // Check if the entered email and password match any user
      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        console.log('Logged in:', email);
        onLoginSuccess(); // Notify App.js of successful login
      } else {
        setErrorMessage('Invalid email or password!');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setErrorMessage('There was an error logging in. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form className="login-form" onSubmit={handleLogin}>
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
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <button className="register-button" onClick={() => onNavigate('register')}>
          Register
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
