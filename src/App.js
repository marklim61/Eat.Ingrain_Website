import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, About, Events, Shop, Contact } from './pages'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="min-h-screen bg-ingrain-color-cream relative">
      <Router>
        <Navbar />
        <div className="pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App