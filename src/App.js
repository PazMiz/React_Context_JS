// src/App.js

import React from 'react';
import { CounterProvider } from './Countercontext/CounterContext';
import { ColorProvider } from './ColorContext/ColorContext';
import CounterDisplay from './Countercontext/CounterDisplay';
import CounterButtons from './Countercontext/CounterButtons';
import CounterInfo from './Countercontext/CounterInfo';
import ColorPicker from './ColorContext/ColorPicker';
import ColoredBox from './ColorContext/ColoredBox'; // Import the new component
import { useTheme } from './ThemeContext';

const App = () => {
  const { theme, toggleTheme, resetTheme } = useTheme(); // Use the theme, toggleTheme, and resetTheme from the ThemeContext

  return (
    <ColorProvider>
      <CounterProvider>
        <div style={{ backgroundColor: theme, padding: '20px' }}>
          <h1>React Context Counter App</h1>
          <button onClick={toggleTheme}>Toggle Theme</button> {/* Add a button to toggle the theme */}
          <button onClick={resetTheme}>Reset Theme</button> {/* Add a button to reset the theme */}
          <CounterDisplay />
          <CounterButtons />
          <CounterInfo />
          <ColorPicker />
          <ColoredBox /> {/* Add the ColoredBox component here */}
        </div>
      </CounterProvider>
    </ColorProvider>
  );
};

export default App;
