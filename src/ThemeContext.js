// src/ThemeContext.js

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('red'); // Set the default theme to 'red'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'blue' ? 'light' : 'blue')); // Toggle between 'red' and 'light'
  };

  const resetTheme = () => {
    setTheme('white'); // Reset the theme to 'white' (default)
  };

  const value = {
    theme,
    toggleTheme,
    resetTheme, // Include the resetTheme function in the context value
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
