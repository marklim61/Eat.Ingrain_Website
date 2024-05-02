import React from 'react'
import { NavLink } from 'react-router-dom'

const Quadrant = () => {
  return (
    <nav className='flex justify-between items-center max-container'>
        <ul className='flex-1 flex justify-center items-center gap-16'>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
  )
}

export default Quadrant