import React, { useState } from 'react';
import './Style.css'; // Import CSS file for styling
import emailjs from 'emailjs-com';

const {REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY} = process.env

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(

      `${REACT_APP_SERVICE_ID}`,
      `${REACT_APP_TEMPLATE_ID}`,
      e.target,
      `${REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // You can add code here to show a success message or redirect the user
      }, (error) => {
        console.error('Failed to send email:', error);
        // You can add code here to show an error message to the user
      });

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="absolute inset-0 flex justify-end items-start h-screen w-screen">
      <img 
        src="/static/media/logo-mark-ingrain-4.e650692a23e98b4fb4a2.jpg"
        alt="Character"
        width="400"
        className="pointer-events-none spinning" // Add spinning class
      />
      
      {/* Contact form overlay */}
      <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg"> {/* Adjust the opacity here */}
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border-gray-300 border w-full p-2 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border-gray-300 border w-full p-2 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message:</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="border-gray-300 border w-full p-2 rounded-md"></textarea>
            </div>
            
            {/* Physical button */}
            <button type="submit" className="flex items-center bg-transparent border-none p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="50" viewBox="0 0 200 50">
                <rect width="200" height="50" rx="25" fill="#f26a36" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="20">Submit</text>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
