// src/CounterButtons.js

import React from 'react';
import { useCounter } from './CounterContext';
import { useColor } from '../ColorContext/ColorContext';

const CounterButtons = () => {
  const { increment, decrement } = useCounter();
  const { changeColor, randomColor } = useColor(); // Add the randomColor function from the ColorContext

  const handleRedButtonClick = () => {
    changeColor('red');
  };

  return (
    <div>
      <h2>Counter Buttons</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={handleRedButtonClick}>Change Color to Red</button>
      <button onClick={randomColor}>Random Color</button> {/* Add the button to change color randomly */}
    </div>
  );
};

export default CounterButtons;
