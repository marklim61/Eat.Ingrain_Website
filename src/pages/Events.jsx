import React, { useState } from 'react'
import SpeechBubble from '../components/SpeechBubble'
import { NavLink } from 'react-router-dom'

const Events = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="flex justify-center items-center h-screen"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      >
      {/* Example 1: Top-Right Speech bubble */}
      {isHovered && <SpeechBubble rotation={0} text="Top-Right" />}
      <NavLink
        to="/"
        className="container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover over me
      </NavLink>
    </div>
  )
}

export default Events