import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from'./Home'
import SlashScreen from './SlashScreen';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SlashScreen />} />
      <Route path="Home" element={<Home  />} />
      </Routes>
    </Router>

  );
}

export default App;
