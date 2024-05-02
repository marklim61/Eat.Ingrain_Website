import React, { useState } from 'react'
import grainy from '../assets/logo-mark-ingrain-4.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    // Put everything in a container
    <div className="relative min-h-screen w-screen flex justify-center items-center">

      {/* Center grainy */}
      <div className="absolute inset-0 justify-center flex items-center h-screen w-screen"> 
        <img 
          src={grainy} 
          alt="Character" 
          width={600} 
          className="pointer-events-none" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full mt-16 gap-6">
        <div 
          className="flex justify-center items-center"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <div className="bg-white p-44 rounded-lg shadow-lg opacity-75 cursor-pointer w-full" style={{ opacity: showPopup ? 1 : 0 }}>
            {showPopup && (
              <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-grey-200 rounded shadow-md z-50">
                <NavLink to="/about" className="block w-full h-full">
                  About Us!
                </NavLink>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <NavLink to="/events" className="block w-full h-full">
            <div className="bg-white p-44 rounded-lg shadow-lg opacity-75 cursor-pointer">
              Card 2
            </div>
          </NavLink>
        </div>
        <div className="flex justify-center items-center">
          <NavLink to="/shop" className="block w-full h-full">
            <div className="bg-white p-44 rounded-lg shadow-lg opacity-75 cursor-pointer">
              Card 3
            </div>
          </NavLink>
        </div>
        <div className="flex justify-center items-center">
          <NavLink to="/contact" className="block w-full h-full">
            <div className="bg-white p-44 rounded-lg shadow-lg opacity-75 cursor-pointer">
              Card 4
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home