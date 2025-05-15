import React, { useState, useEffect } from 'react';
import CustomButton from '../CustomButton';

interface DarkModeToggleProps {
  isDarkMode:boolean
  setIsDarkMode:(val:boolean)=>void
}
const DarkModeToggle = ({isDarkMode,setIsDarkMode}:DarkModeToggleProps) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark') {
          setIsDarkMode(true);
          document.documentElement.classList.add('dark');
      }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <CustomButton className='dark:!border-[#FFFFFF21]' onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </CustomButton>
  );
};

export default DarkModeToggle;