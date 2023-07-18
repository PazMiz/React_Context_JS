// src/ColorPicker.js

import React, { useState } from 'react';
import { useColor } from './ColorContext';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const { changeColor } = useColor();

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const applyColor = () => {
    changeColor(selectedColor);
    setSelectedColor('');
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
      <button onClick={applyColor}>Apply Color</button>
    </div>
  );
};

export default ColorPicker;
