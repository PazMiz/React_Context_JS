// src/App.js
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { CounterProvider } from './Countercontext/CounterContext';
import { ColorProvider } from './ColorContext/ColorContext';
import CounterDisplay from './Countercontext/CounterDisplay';
import CounterButtons from './Countercontext/CounterButtons';
import CounterInfo from './Countercontext/CounterInfo';
import ColorPicker from './ColorContext/ColorPicker';
import ColoredBox from './ColorContext/ColoredBox';
import { useTheme } from './ThemeContext';
import { LoginProvider, useLogin } from './LoginContext';
import CustomCard from './Card';
import './App.css';

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
          <div className="app-container">
            <h1>React Context Counter App</h1>
            {isLoggedIn ? (
              <Button
                className="app-button primary-button"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button className="app-button secondary-button" onClick={handleLogin}>
                Login
              </Button>
            )}
            <Button className="app-button" onClick={toggleTheme}>
              Toggle Theme
            </Button>
            <Button className="app-button" onClick={resetTheme}>
              Reset Theme
            </Button>
            {statusMessage && <p>{statusMessage}</p>}
            {isLoggedIn ? (
              <React.Fragment>
                <CounterDisplay />
                <CounterButtons />
                <CounterInfo />
                <ColorPicker />
                <ColoredBox />
                <CustomCard
                  imageUrl="https://picsum.photos/400/250"
                  title="Eyal Test"
                  author="Paz"
                />
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
