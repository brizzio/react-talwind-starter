import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button } from '@material-tailwind/react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button color="blue" ripple={true} onClick={toggleTheme}>
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ThemeToggle;
