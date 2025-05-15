import './App.css';
import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import NavBar from './components/Navbar';
import MainSection from './components/MainSection';
import { DarkModeContext } from './context/DarkModeContext';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={isDarkMode}>
    <Router>
      <div className="min-h-screen flex flex-col">
          <div className="fixed top-0 left-0 w-full z-50">
            <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </div>
          <div className="flex-1 mt-[133px]">
          <Routes>
            <Route path="/" element={<MainSection />} />
          </Routes>
          </div>
        </div>
    </Router>
    </DarkModeContext.Provider>
  );
}

export default App;
