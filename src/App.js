import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Navigation from "./components/Navigation/Navigation";
import '../src/style.scss';
import { useState } from 'react';
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme}>
         
          <Navigation />
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}></button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
          </Routes>
    </div>
  );
}

export default App;
