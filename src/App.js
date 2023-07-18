// src/App.js

import React, { useState } from 'react';
import { CounterProvider } from './Countercontext/CounterContext';
import { ColorProvider } from './ColorContext/ColorContext';
import CounterDisplay from './Countercontext/CounterDisplay';
import CounterButtons from './Countercontext/CounterButtons';
import CounterInfo from './Countercontext/CounterInfo';
import ColorPicker from './ColorContext/ColorPicker';
import ColoredBox from './ColorContext/ColoredBox';
import { useTheme } from './ThemeContext';
import { LoginProvider, useLogin } from './LoginContext';

const App = () => {
  const { theme, toggleTheme, resetTheme } = useTheme();
  const { isLoggedIn, login, logout } = useLogin();

  const [statusMessage, setStatusMessage] = useState('');

  const handleLogin = () => {
    login();
    setStatusMessage('You are logged in.');
  };

  const handleLogout = () => {
    logout();
    setStatusMessage('You are logged out.');
  };

  return (
    <ColorProvider>
      <CounterProvider>
        <LoginProvider>
          <div style={{ backgroundColor: theme, padding: '20px' }}>
            <h1>React Context Counter App</h1>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <button onClick={handleLogin}>Login</button>
            )}
            <button onClick={toggleTheme}>Toggle Theme</button>
            <button onClick={resetTheme}>Reset Theme</button>
            {statusMessage && <p>{statusMessage}</p>}
            {isLoggedIn ? (
              <React.Fragment>
                <CounterDisplay />
                <CounterButtons />
                <CounterInfo />
                <ColorPicker />
                <ColoredBox />
              </React.Fragment>
            ) : (
              <p>Please login to see the content.</p>
            )}
          </div>
        </LoginProvider>
      </CounterProvider>
    </ColorProvider>
  );
};

export default App;
