// src/ColoredBox.js

import React from 'react';
import { useColor } from './ColorContext';

const ColoredBox = () => {
  const { color } = useColor();

  return (
    <div style={{ backgroundColor: color, width: '200px', height: '200px', margin: '10px' }}>
      <h2>Colored Box</h2>
      <p>This box came from colorcontext by paz </p>
    </div>
  );
};

export default ColoredBox;
