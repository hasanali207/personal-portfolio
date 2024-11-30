import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logome.svg';
import Preloader from '../components/Preloader ';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePreloaderAndScroll = async (path, sectionId) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);

    if (path) {
      navigate(path); // Navigate to a different route
    } else if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#0a192f] px-12 pb-4 pt-2" id="header">
      {isLoading && <Preloader />}

      <div className="flex justify-between items-center" id="navbar">
        {/* Logo */}
        <div className="flex items-center">
          <button onClick={() => handlePreloaderAndScroll('/')}>
            <img src={logo} alt="Logo" />
          </button>
          <a
            href="mailto:hasandevpro@gmail.com"
            className="hidden lg:flex text-white hover:text-[#757575]"
          >
            hasandevpro@gmail.com
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end flex justify-between items-center w-full lg:w-[70%]">
          <ul className="px-1 text-white">
            <li
              className="mr-2 text-lg cursor-pointer hover:text-[#757575]"
              onClick={() => handlePreloaderAndScroll('/')}
            >
              Home
            </li>
            <li
              className="mr-2 text-lg cursor-pointer hover:text-[#757575]"
              onClick={() => handlePreloaderAndScroll(null, 'about-section')}
            >
              About
            </li>
          </ul>

          {/* Hire Me Button */}
          <button
            className="text-2xl font-bold w-36 bg-gradient-to-r from-primary via-[#8750f7] to-[#ff00d3] bg-300% text-transparent bg-clip-text animate-gradient"
            onClick={() => handlePreloaderAndScroll(null, 'contact')}
          >
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
