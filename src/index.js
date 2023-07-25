import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import { LoginProvider } from './LoginContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </ThemeProvider>
  </React.StrictMode>
);
