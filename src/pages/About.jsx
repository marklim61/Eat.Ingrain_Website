import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css'
import YoutubeEmbed from '../components/YoutubeEmbed'
// import islandFood from '../assets/islandFoodBG.jpg'

const About = () => {
  return (
    <div>
      {/* Brief Info */}
      <div className="flex justify-center items-center h-screen">
        <div 
          className="flex items-center bg-ingrain-board-color h-84 w-84 p-24 mt-72 rounded-3xl drop-shadow-2xl"
          style={{
            // backgroundImage: `url(${islandFood})`,
            // backgroundSize: 'cover', 
            // backgroundPosition: 'center' 
          }}>
          <article className="prose lg:prose-xl aesthet_nova text-center">
            <h1 className="aesthet-nova-h1 text-ingrain-color-orange">The art of crafting cool food</h1>
            <p className="aesthet-nova-h2 pt-12 text-ingrain-color-orange">
            InGrain. A Brand. A Team. With Passion. To make cool food. For Da Culture.
            </p>
            <p className="aesthet-nova-h2 text-ingrain-color-orange">
            "At Ingrain, our central focus is to express passion through the art of crafting 
            cool food that seamlessly fuses the rich tapestry of Asian Pacific Islander culture 
            with a modern, innovative approach. We are dedicated to redefining culinary boundaries, 
            celebrating heritage, and creating memorable experiences.”
            </p>
          </article>
        </div>
      </div>
      
      {/* Photo Gallery */}
      <div className='flex justify-center items-center mt-60 bg-ingrain-board-color'>
        <div className='ml-24 mr-24'>
          <p className='aesthet-nova-h2 mb-4'>Instagram</p>
          <p className='aesthet-nova text-ingrain-color-orange mb-8'>Photo Gallery</p>
          <p>Lorem ipsum is placeholder text commonly  <br />used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <a href="https://www.instagram.com/eat.ingrain" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-ingrain-color-orange text-white aesthet-nova-h3 hover:bg-hover-button-color mt-6">View More</button>
          </a>
        </div>

        {/* Left Button */}
        <button className="btn btn-circle bg-ingrain-color-orange text-white hover:bg-hover-button-color">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="m14 17l-5-5l5-5z"/></svg>
        </button>
        {/* Carousel */}
        <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box w-screen">
          <div className="carousel-item relative">
            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="img1" className="rounded-box" />
            <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 
            22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 
            18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 
            5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            </div>
          </div> 
          <div className="carousel-item relative">
            <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="img1" className="rounded-box" />
            <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 
            22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 
            18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 
            5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            </div>
          </div> 
          <div className="carousel-item relative">
            <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="img1" className="rounded-box" />
            <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 
            22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 
            18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 
            5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            </div>
          </div> 
          <div className="carousel-item relative">
            <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="img1" className="rounded-box" />
            <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 
            22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 
            18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 
            5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            </div>
          </div> 
          <div className="carousel-item relative">
            <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="img1" className="rounded-box" />
            <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 
            22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 
            18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 
            5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            </div>
          </div> 
          <div className="carousel-item relative">
            <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="img1" className="rounded-box" />
            <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 
            22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 
            18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 
            5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            </div>
          </div> 
          <div className="carousel-item relative">
            <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="img1" className="rounded-box" />
            <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 
            22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 
            18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 
            5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            </div>
          </div>
        </div>
        {/* Right Button */}
        <button className="btn btn-circle bg-ingrain-color-orange text-white m-4 hover:bg-hover-button-color">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M10 17V7l5 5z"/></svg>
        </button>
      </div>
      
      {/* Youtube */}
      <div className="flex justify-center items-center m-36">
        <div className='size-9/12 drop-shadow-2xl'>
          <YoutubeEmbed embedId="bpOIp7EdRhg" />
        </div>
      </div>
      
      
      {/* Footer 1 */}
      <footer className="footer p-10 text-base-content justify-evenly bg-ingrain-board-color">
        <nav>
          <h6 className="footer-title">Services</h6>
          <NavLink to="/events" className="link link-hover">Events</NavLink>
          <href className="link link-hover">Catering</href>
          <NavLink to="/shop" className="link link-hover">Shop</NavLink>
          {/* <a className="link link-hover">Advertisement</a> */}
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <NavLink to="/about" className="link link-hover">About us</NavLink>
          <NavLink to="/contact" className="link link-hover">Contact</NavLink>
          {/* <a className="link link-hover">Jobs</a> */}
          {/* <a className="link link-hover">Press kit</a> */}
        </nav> 
        <nav>
          <h6 className="footer-title">Legal</h6> 
          <href className="link link-hover">Terms of use</href>
          <href className="link link-hover">Privacy policy</href>
          <href className="link link-hover">Cookie policy</href>
        </nav>
      </footer>

      {/* Footer 2 */}
      <footer className="footer px-10 py-4 border-t text-base-content border-base-300 bg-ingrain-board-color">
        <aside className="items-center grid-flow-col">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 
            1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.
            432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 
            1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 
            2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 
            1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
          <p>INGRAIN LLC<br/>The art of crafting cool food</p>
        </aside> 
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.youtube.com/@eat.ingrain" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 256 180">
              <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 
              122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
              <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg></a>
            <a href="https://www.instagram.com/eat.ingrain" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256"><g fill="none">
              <rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/>
              <path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 
              6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 
              8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 
              17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.
              563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 
              8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.
              583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 
              3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.
              521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-
              7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.
              36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.
              334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" 
              gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" 
              stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" 
              gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"/><stop offset=".128" stop-color="#3771c8"/>
              <stop offset="1" stop-color="#60f" stop-opacity="0"/></radialGradient></defs></g></svg></a>
          </div>
        </nav>
      </footer>
    </div>
  )
}

export default About