import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='flex justify-between padding-x py-5 absolute z-10 w-full bg-ingrain-accent-color'>
      <nav className='flex justify-between items-center px-10'>
        <ul className='flex-1 flex justify-center items-center gap-16'>
          <li><NavLink to="/">LOGO INGRAIN</NavLink></li>
        </ul>
      </nav>
      <nav className='flex justify-between items-center max-container'>
        <ul className='flex-1 flex justify-center items-center gap-16'>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/catering">Catering</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
    <nav className='flex justify-between items-center px-10'>
      Social Media Icons
    </nav>
    </header>
    
  )
}

export default Navbar