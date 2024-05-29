import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import grainy from '../assets/transparentGrainy2.png';
import { NavLink } from 'react-router-dom';
import './Style.css';
import './speechbubble.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // State to track hover

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

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
    }, (error) => {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-container flex items-center justify-center bg-ingrain-color-background h-screen">
      <div className="form-section p-8 rounded shadow-md w-full max-w-md bg-ingrain-color-background">
        <h2 className="text-2xl font-bold mb-6 text-center text-ingrain-color-orange">Contact Us</h2>
        <form>
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
            </label>
          </div>
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
            </label>
          </div>
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
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleSubmit}
              onMouseEnter={() => setIsHovering(true)} // Set hover state to true on mouse enter
              onMouseLeave={() => setIsHovering(false)} // Set hover state to false on mouse leave
              className="bg-ingrain-color-orange hover:bg-ingrain-color-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
            {isHovering && ( // Conditional rendering of image when hovering
              <div className= "right-area absolute" >
                <img 
                src={grainy}
                alt="Character"
                width="400" 
                /> 
                  <div className="background-container absolute" style={{ top: '5%', right: '75%'}}>
                    <NavLink to="/confirmation">
                      <p className="speech-popup top-left-tail aesthet_nova">Message Sent!</p>
                    </NavLink>
                  </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
