import React, { useState } from 'react'
import transparentGrainy from '../assets/transparentGrainy.png'
import { NavLink } from 'react-router-dom'
import SpeechBubble from '../components/SpeechBubble'

const Home = () => {
  const [showPopup1, setShowPopup1] = useState(false)
  const [showPopup2, setShowPopup2] = useState(false)
  const [showPopup3, setShowPopup3] = useState(false)
  const [showPopup4, setShowPopup4] = useState(false)

  return (
    // Put everything in a container
    <div className="relative min-h-screen w-screen flex justify-center items-center bg-ingrain-color-background">

      {/* Center grainy */}
      <div className="absolute inset-0 justify-center flex items-center h-screen w-screen"> 
        <img 
          src={transparentGrainy} 
          alt="Character" 
          width={600} 
          className="pointer-events-none bg-ingrain-color-background" />
      </div>

      <div className="grid grid-cols-2 grid-rows-2 w-full h-full mt-16 gap-6">
        {/* Card 1 */}
        <div 
          className="flex justify-center items-center"
          onMouseEnter={() => setShowPopup1(true)}
          onMouseLeave={() => setShowPopup1(false)}
          >
          <div className="bg-ingrain-color-blue block w-full p-44 rounded-lg shadow-lg opacity-0 hover:opacity-0">
          
          </div>
          {showPopup1 && (
            <div 
              className="absolute -top-1/3 bottom-0 left-1/4 -translate-x-1/2 flex justify-center items-center">
              <NavLink to="/about">
                <div className="bg-ingrain-color-blue p-6 rounded-lg shadow-lg text-center cursor-pointer">
                  <h1 className="text-2xl font-semibold mb-2 text-white">About Us</h1>
                  
                </div>
              </NavLink>
            </div>
          )}
        </div>

        {/* Card 2 */}
        <div 
          className="flex justify-center items-center"
          onMouseEnter={() => setShowPopup2(true)}
          onMouseLeave={() => setShowPopup2(false)}
          >
          <div className="bg-ingrain-color-blue block w-full p-44 rounded-lg shadow-lg opacity-0 hover:opacity-0">
            
          </div>
          { /* Working Hover */}
          {/* {showPopup2 && (
            <div className="absolute -top-1/3 bottom-1 right-1/5 -translate-x-1/4 flex justify-center items-center">
              <NavLink to="/events">
                <div className="bg-ingrain-color-blue p-6 rounded-lg shadow-lg text-center cursor-pointer">
                  <h1 className="text-2xl font-semibold mb-2 text-white">Events</h1>
                </div>
              </NavLink>
            </div>
          )} */}

          { /* Adding a speech bubble */}
          {showPopup2 && (
            <div className="absolute -top-12 bottom-1/3 right-1/5 -translate-x-12 flex justify-center items-center">
              <NavLink to="/events">
                <SpeechBubble rotation={0} text="Events"/>
              </NavLink>
            </div>
          )}
        </div>

        {/* Card 3 */}
        <div 
          className="flex justify-center items-center"
          onMouseEnter={() => setShowPopup3(true)}
          onMouseLeave={() => setShowPopup3(false)}
          >
          <div className="bg-ingrain-color-blue w-full p-44 rounded-lg shadow-lg opacity-0 hover:opacity-0">
            
          </div>
          {showPopup3 && (
            <div className="absolute top-1/2 bottom-1 left-1/4 -translate-x-1/2 flex justify-center items-center">
              <NavLink to="/shop">
                <div className="bg-ingrain-color-blue p-6 rounded-lg shadow-lg text-center cursor-pointer">
                  <h1 className="text-2xl font-semibold mb-2 text-white">Shop</h1>
                </div>
              </NavLink>
            </div>
          )}
        </div>

        {/* Card 4 */}
        <div 
          className="flex justify-center items-center"
          onMouseEnter={() => setShowPopup4(true)}
          onMouseLeave={() => setShowPopup4(false)}
          >
          <div className="bg-ingrain-color-blue w-full p-44 rounded-lg shadow-lg opacity-0 hover:opacity-0">
            
          </div>
          {showPopup4 && (
            <div className="absolute top-1/2 bottom-1 right-1/5 -translate-x-1/4 flex justify-center items-center">
              <NavLink to="/contact">
                <div className="bg-ingrain-color-blue p-6 rounded-lg shadow-lg text-center cursor-pointer">
                  <h1 className="text-2xl font-semibold mb-2 text-white">Contact Us</h1>
                </div>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home