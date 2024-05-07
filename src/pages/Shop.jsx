import React from 'react';
import './Style.css'; // Import CSS file for styling

const Shop = () => {
  return (
    <div className="absolute inset-0 flex justify-end items-start h-screen w-screen">
      <img 
        src="/static/media/logo-mark-ingrain-4.e650692a23e98b4fb4a2.jpg"
        alt="Character"
        width="400"
        className="pointer-events-none spinning" // Add spinning class
      />
    </div>
  );
};

export default Shop;
