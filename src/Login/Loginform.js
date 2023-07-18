// LoginForm.js

import React from 'react';
import { useLogin } from './LoginContext';
import { useColor } from './ColorContext';

const LoginForm = () => {
  const { login } = useLogin();
  const { color, randomColor } = useColor(); // Access randomColor from the ColorContext

  const handleLogin = () => {
    login();
    setStatusMessage('You are logged in.');
  };

  const handleLogout = () => {
    randomColor(); // Generate a random color from the ColorContext
    login(); // Log in the user
    setStatusMessage('You are logged out.');
  };

  return (
    <div style={{ backgroundColor: color, padding: '20px' }}>
      <h1>Login Form</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button> {/* Add a Logout button */}
      <p style={{ color: color === 'white' ? 'black' : 'white' }}>{statusMessage}</p> {/* Display the status message */}
    </div>
  );
};

export default LoginForm;
