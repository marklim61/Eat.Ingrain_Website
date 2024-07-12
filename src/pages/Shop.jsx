import React from 'react'
import merch_bg from '../assets/shop_bg.jpg'
import sample_merch from '../assets/sample_merch.jpg'
import { NavLink } from 'react-router-dom'

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$25.00',
      image: sample_merch,
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$30.00',
      image: sample_merch,
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$20.00',
      image: sample_merch,
    },
    {
      id: 4,
      name: 'Product 4',
      price: '$35.00',
      image: sample_merch,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="h-screen flex items-center justify-center">
          <div className="relative flex flex-col justify-center items-center bg-neutral-950 h-full w-full p-16 mt-48 mb-48">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${merch_bg})`,
                opacity: 0.2,
              }}
            ></div>
              <h1 className="md:text-5xl font-bold mb-4 text-white aesthet-nova text-4xl text-center">
                NEW COLLECTION
              </h1>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white aesthet-nova-h2 text-center underline">
              Shop Now
              </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-24 mb-24">
          {products.map((product, index) => (
            <NavLink 
              to={`/product/${product.id}`} 
              key={index} 
              className="p-4 m-6 rounded-lg shadow-lg bg-ingrain-board-color"
              activeClassName="active"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-54 w-full object-contain mb-4 rounded transition-transform transform hover:scale-110" 
              />
              <h2 className="text-xl font-bold mb-2 aesthet-nova-h1">{product.name}</h2>
              <p className="text-lg font-semibold aesthet-nova-h2">{product.price}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop