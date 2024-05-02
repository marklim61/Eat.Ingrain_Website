import React from 'react'
import grainy from '../assets/logo-mark-ingrain-4.jpg'

const Home = () => {

  return (
    // Put everything in a container
    <div className="relative h-screen w-screen">
      <div className="absolute justify-center flex items-center h-screen w-screen"> {/* Center grainy */}
        <img 
          src={grainy} 
          alt="Character" 
          width={600} 
          className="pointer-events-none" />
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 grid-rows-2 h-full z-10">
        <div className="relative flex justify-center items-center">
          <a href="/link1" className="block">
            <div className="bg-white p-6 rounded-lg shadow-lg opacity-75 cursor-pointer">
              Card 1
            </div>
          </a>
        </div>
        <div className="relative flex justify-center items-center">
          <a href="/link2" className="block">
            <div className="bg-white p-6 rounded-lg shadow-lg opacity-75 cursor-pointer">
              Card 2
            </div>
          </a>
        </div>
        <div className="relative flex justify-center items-center">
          <a href="/link3" className="block">
            <div className="bg-white p-6 rounded-lg shadow-lg opacity-75 cursor-pointer">
              Card 3
            </div>
          </a>
        </div>
        <div className="relative flex justify-center items-center">
          <a href="/link4" className="block">
            <div className="bg-white p-6 rounded-lg shadow-lg opacity-75 cursor-pointer">
              Card 4
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home