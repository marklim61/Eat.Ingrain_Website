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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to toggle speech bubble
  const [grainyStopped, setGrainyStopped] = useState(false); // State to track grainy animation

  // Function to handle changes in form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);
    setGrainyStopped(true); // Stop the animation on submit
    setShowPopup(true); // Show the popup on submit

    // Sending form data via emailjs
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then((result) => {
      console.log('Email sent successfully:', result.text);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
        setGrainyStopped(false); // Restart the animation after hiding the popup
      }, 3000);

    }, (error) => {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);

      // Hide the popup after 3 seconds even if there's an error
      setTimeout(() => {
        setShowPopup(false);
        setGrainyStopped(false); // Restart the animation after hiding the popup
      }, 3000);
    });
  };

  return (
    // Main container for the contact form
    <div className="contact-container absolute flex items-center justify-end bg-ingrain-color-background">
      {/* Background section */}
      <div className={`background-section absolute inset-0 pointer-events-none flex items-end justify-end ${grainyStopped ? 'grainy-stopped' : ''}`}>
        {/* Background image */}
        <img 
          src={grainy}
          alt="Character"
          width="400"
          className={`pointer-events-none ${isSubmitting ? '' : 'animate-spin-slow'}`} // Stopping animation if submitting
        />
        {/* Speech bubble */}
        {showPopup && (
          <div className="background-container absolute" style={{ top: '35%', right: '25%'}}>
            <NavLink to="/confirmation">
              <p className="speech-popup top-left-tail aesthet_nova">Message Sent!</p>
            </NavLink>
          </div>
        )}
      </div>
      {/* Form section */}
      <div className="form-section relative p-8 rounded shadow-md w-full max-w-md bg-ingrain-color-background">
        {/* Form title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-ingrain-color-orange">Contact Us</h2>
        {/* Contact form */}
        <form>
          {/* Name input field */}
          <div className="mb-4">
            <label className="block text-ingrain-color-green text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="grow"
                placeholder="John Doe"
                required
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
            </label>
          </div>
          {/* Email input field */}
          <div className="mb-4">
            <label className="block text-ingrain-color-green text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="grow"
                placeholder="john.doe@gmail.com"
                required
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
            </label>
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
              className="textarea textarea-bordered w-full"
              placeholder="Message"
              rows="5"
              required
            />
          </div>
          {/* Submit button */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleSubmit}
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
