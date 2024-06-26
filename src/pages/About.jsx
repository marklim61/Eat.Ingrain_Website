import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css'
import YoutubeEmbed from '../components/YoutubeEmbed'
import images from '../assets/instagram_gallery'
import IG_background from '../assets/Ingrain_Background.jpg'
import Bio_Pic from '../assets/Bio_Pic.JPG'

const About = () => {
  const carouselRef = useRef(null);

  // JS function to scroll through the carousel
  const scrollCarousel = (direction) => { // define the function and give it a direction parameter
    const scrollAmount = 300; // scrolling speed
    if (carouselRef.current) {
      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' }); // scrolls left by subtracting scrollAmount
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      {/* Brief Info */}
      <div className="relative flex justify-center items-center bg-neutral-950 min-h-screen">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IG_background})`,
            opacity: 0.2,
          }}>
        </div>
        <div className="relative z-1 text-left flex flex-col justify-center h-full w-full p-16 mt-24">
          <article className="prose lg:prose-2xl aesthet_nova text-white text-left">
            <h1 className="aesthet-nova-h1">The art of crafting cool food</h1>
            <p className="aesthet-nova-h2 pt-6">
              InGrain. A Brand. A Team. With Passion. To make cool food. For Da Culture.
            </p>
            <p className="aesthet-nova-h3">
              At Ingrain, our central focus is to express passion through the art of crafting 
              cool food that seamlessly fuses the rich tapestry of Asian Pacific Islander culture 
              with a modern, innovative approach. We are dedicated to redefining culinary boundaries, 
              celebrating heritage, and creating memorable experiences.
            </p>
          </article>
        </div>
      </div>

      <div className='flex flex-col-reverse md:flex-row justify-evenly items-center m-6 md:m-24 bg-ingrain-board-color rounded-2xl drop-shadow-lg'>
        <article className="prose lg:prose-2xl w-full md:w-1/4 mb-6 md:mb-0 pl-6 md:pl-0 pr-6 md:pr-0">
          <p className="aesthet-nova-h3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        <div className="flex flex-col items-center w-full md:w-1/3 mb-6 md:mb-6 m-4 md:m-8">
          <h3 className="text-center text-lg md:text-xl font-semibold mb-2 md:mb-4 aesthet-nova text-ingrain-color-orange">
            COFOUNDERS
          </h3>
          <img src={Bio_Pic} alt="image_holder" className="w-3/4 md:w-full rounded-lg shadow-lg"/>
          <figcaption className="text-center mt-4 text-gray-700 bg-ingrain-color-orange rounded-md p-2 shadow-md">
            <span className="font-semibold">Left:</span> Isaiah Tydinco <br/>
            <span className="font-semibold">Right:</span> Tristan Jose
          </figcaption>
        </div>
      </div>
      
      {/* Photo Gallery */}
      <div className='flex flex-col md:flex-row justify-center items-center mt-7 mb-6 md:mt-24 md:mb-24 lg:mt-35 lg:mb-35 px-4 md:px-5 lg:px-10 bg-ingrain-board-color'>
        <div>
          <p className='aesthet-nova mb-4 mt-6 text-2xl'>Instagram</p>
          <p className='aesthet-nova-h1 text-ingrain-color-orange mb-4'>Photo Gallery</p>
          <p className='aesthet-nova-h2'>Bringing the flavors of the islands to your neighborhood popup 🏝️ #IslandBites</p>
          <a href="https://www.instagram.com/eat.ingrain" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-xl sm:btn-lg md:btn-md lg:btn-lg bg-ingrain-color-orange text-white aesthet-nova-h3 hover:bg-hover-button-color mt-6 sm:mt-8 hidden md:inline">View More</button>
          </a>
        </div>

        {/* Left Button */}
        <button onClick={() => scrollCarousel('left')} className="btn btn-circle bg-ingrain-color-orange text-white hover:bg-hover-button-color m-4 hidden md:inline">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="m14 17l-5-5l5-5z"/></svg>
        </button>

        {/* Carousel */}
        <div ref={carouselRef} className="carousel carousel-center p-6 rounded-box w-screen">
          {images.map((image, index) => (
            <div key={index} className="carousel-item relative">
              <img src={image} alt={`Carousel item ${index + 1}`} className="rounded-box max-w-xs"/>
              <div className="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button onClick={() => scrollCarousel('right')} className="btn btn-circle bg-ingrain-color-orange text-white m-4 hover:bg-hover-button-color hidden md:inline">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M10 17V7l5 5z"/></svg>
        </button>
        <a href="https://www.instagram.com/eat.ingrain" target="_blank" rel="noopener noreferrer" className="block sm:hidden">
          <button className="btn btn-xl sm:btn-lg md:btn-md lg:btn-lg bg-ingrain-color-orange text-white aesthet-nova-h2 hover:bg-hover-button-color mb-5">View More</button>
        </a>
      </div>

      {/* Youtube */}
      <div className="flex flex-col justify-center items-center m-6 md:m-24">
        <div className="bg-ingrain-board-color rounded-lg shadow-xl w-full md:w-3/4 lg:w-2/3">
          <h1 className="text-xl text-center font-bold p-8 aesthet-nova">
            <span className="text-black">Check Out Our Latest </span> 
            <span className="text-ingrain-color-orange">YouTube Video!</span>
          </h1>
        
          <div className="flex justify-center items-end">
            <div className='size-full md:size-11/12 mb-8'>
              <YoutubeEmbed embedId="bpOIp7EdRhg" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer 1 */}
      <footer className="footer p-10 text-base-content bg-ingrain-board-color">
        <div className="flex flex-row justify-between sm:justify-evenly w-full">
          <nav className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <NavLink to="/events" className="link link-hover">Events</NavLink>
            <NavLink className="link link-hover">Catering</NavLink>
            <NavLink to="/shop" className="link link-hover">Shop</NavLink>
          </nav> 
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6> 
            <NavLink to="/about" className="link link-hover">About us</NavLink>
            <NavLink to="/contact" className="link link-hover">Contact</NavLink>
          </nav> 
          <nav className="flex flex-col">
            <h6 className="footer-title">Legal</h6> 
            <NavLink className="link link-hover">Terms of use</NavLink>
            <NavLink className="link link-hover">Privacy policy</NavLink>
            <NavLink className="link link-hover">Cookie policy</NavLink>
          </nav>
        </div>
      </footer>

      {/* Footer 2 */}
      <footer className="footer px-10 py-4 border-t text-base-content border-base-300 bg-ingrain-board-color">
        <div className="flex flex-col items-center md:flex-row justify-between w-full">
          <aside className="flex items-center space-x-4 flex-col md:flex-row">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
            <p className='aesthet-nova-h3 text-center md:text-left'>INGRAIN LLC<br/>The art of crafting cool food</p>
          </aside> 
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href="https://www.youtube.com/@eat.ingrain" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                  <path fill="currentColor" d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.802 3.802 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954c0 .983-.052 2.011-.122 2.954l-.075.91c-.013.146-.026.287-.04.425a3.802 3.802 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A61.59 61.59 0 0 1 12 20a61.59 61.59 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.802 3.802 0 0 1-3.494-3.423l-.04-.425l-.075-.91A40.662 40.662 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91c.013-.146.026-.287.04-.425A3.802 3.802 0 0 1 
                  5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A61.676 61.676 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"/></g></svg></a>
              <a href="https://www.instagram.com/eat.ingrain" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 
                  5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 
                  1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default About