import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import grainy from '../assets/transparentGrainy2.png';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import './Style.css'; // Importing the CSS file
import './speechbubble.css'; // Importing additional CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Update the state to handle whether the form is submitted successfully:
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to toggle speech bubble

  // Function to handle changes in form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Sending form data via emailjs
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then((result) => {
      console.log('Email sent successfully:', result.text);
      setIsSubmitting(false);
      setShowPopup(true); // Set showPopup to true on successful submission

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

    }, (error) => {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
    });

    // Clearing the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    // Main container for the contact form
    <div className="contact-container h-screen flex items-center justify-center bg-ingrain-color-background">
      {/* Background section */}
      <div className="background-section absolute inset-0 pointer-events-none flex items-end justify-end">
        {/* Background image */}
        <img 
          src={grainy}
          alt="Character"
          width="400"
          className={`pointer-events-none ${isSubmitting ? '' : 'animate-spin-slow'}`} // Stopping animation if submitting
        />
        {/* Speech bubble */}
        {showPopup && (
          <div className="relative flex bottom-0 mb-10">
            <NavLink to="/confirmation">
              <p className="speech-popup top-right-tail aesthet_nova bottom-tail">Message Sent!</p>
            </NavLink>
          </div>
        )}
      </div>
      {/* Form section */}
      <div className="form-section relative p-8 rounded shadow-md w-full max-w-md bg-ingrain-color-background">
        {/* Form title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-ingrain-color-orange">Contact Us</h2>
        {/* Contact form */}
        <form onSubmit={handleSubmit}>
          {/* Name input field */}
          <div className="mb-4">
            <label className="block text-ingrain-color-green text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* Email input field */}
          <div className="mb-4">
            <label className="block text-ingrain-color-green text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* Message input field */}
          <div className="mb-6">
            <label className="block text-ingrain-color-green text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              required
            />
          </div>
          {/* Submit button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-ingrain-color-orange hover:bg-ingrain-color-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
