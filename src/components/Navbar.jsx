import React from 'react'
import { NavLink } from 'react-router-dom'
import ingrain_Logo from '../assets/transparentINGRAIN.png'

const Navbar = () => {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 pt-8">
        <NavLink to="/">
          <img src={ingrain_Logo} alt="Logo" className="h-32 cursor-pointer" />
        </NavLink>
      </div>
  )
}

export default Navbar