// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './ThemeContext'; // Import the ThemeProvider
import { LoginProvider } from './LoginContext'; // Import the LoginProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LoginProvider> {/* Place the LoginProvider inside the ThemeProvider */}
        <App />
      </LoginProvider>
    </ThemeProvider>
  </React.StrictMode>
);
