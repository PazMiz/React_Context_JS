// src/CounterDisplay.js

import React from 'react';
import { useCounter } from './CounterContext';
import { useColor } from '../ColorContext/ColorContext';

const CounterDisplay = () => {
  const { count } = useCounter();
  const { color } = useColor();

  return (
    <div style={{ color: color }}>
      <h2>Counter Display</h2>
      <p>Count: {count}</p>
    </div>
  );
};

export default CounterDisplay;
