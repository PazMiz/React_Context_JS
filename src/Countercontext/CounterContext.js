// src/CounterContext.js

import React, { createContext, useState, useContext } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const value = {
    count,
    increment,
    decrement,
  };

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>;
};

const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

export { CounterProvider, useCounter };
