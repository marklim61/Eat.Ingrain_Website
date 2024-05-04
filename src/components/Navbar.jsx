import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    // Fixed so the home page would not overlap the navbar
    <header className='fixed top-0 left-0 right-0 z-50 py-5 w-full font-bold text-ingrain-color-orange bg-ingrain-color-green font-san'>
      <nav className="flex justify-center items-center">
        <ul>
        <li><NavLink to="/" className="text-4xl">INGRAIN</NavLink></li>
      </ul>
      </nav>
    </header>
  )
}

export default Navbar