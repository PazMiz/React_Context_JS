// src/ColorContext.js

import React, { createContext, useState, useContext } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
  };

  const value = {
    color,
    changeColor,
    randomColor,
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

export { ColorProvider, useColor };
