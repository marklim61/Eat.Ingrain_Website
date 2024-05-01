import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Catering from './pages/Catering'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="/events" element={Events} />
          <Route path="/catering" element={Catering} />
          <Route path="/contact" element={Contact} />
        </Routes>
      </div>
    </Router>
  )
}

export default App