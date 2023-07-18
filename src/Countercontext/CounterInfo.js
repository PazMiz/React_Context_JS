// src/CounterInfo.js

import React from 'react';
import { useCounter } from './CounterContext';
import { useColor } from '../ColorContext/ColorContext'; // Correct the import path here

const CounterInfo = () => {
  const { count } = useCounter();
  const { color } = useColor(); // Use the random color from the ColorContext

  return (
    <div style={{ color: color }}>
      <h2>Counter Information</h2>
      <p>Current Count: {count}</p>
      <p>Double Count: {count * 2}</p>
      <p>Half Count: {count / 2}</p>
    </div>
  );
};

export default CounterInfo;
