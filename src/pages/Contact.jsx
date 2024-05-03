import React from 'react';

const Contact = () => {
  return (
    <div className="absolute inset-0 justify-center flex items-center h-screen w-screen">
      <img src="/static/media/logo-mark-ingrain-4.e650692a23e98b4fb4a2.jpg" alt="Character" width="600" className="pointer-events-none" />
      
      {/* Contact form overlay */}
      <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg"> {/* Adjust the opacity here */}
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          
          {/* Form */}
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name:</label>
              <input type="text" id="name" name="name" className="border-gray-300 border w-full p-2 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input type="email" id="email" name="email" className="border-gray-300 border w-full p-2 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message:</label>
              <textarea id="message" name="message" rows="4" className="border-gray-300 border w-full p-2 rounded-md"></textarea>
            </div>
            
            {/* Submit button */}
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
