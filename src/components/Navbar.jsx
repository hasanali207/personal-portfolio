import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logome.svg';
import Preloader from '../components/Preloader ';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePreloader = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <section className="w-full bg-[#0a192f] px-12 pb-4 pt-2" id="header">
      {isLoading && <Preloader />}

      <div className="flex justify-between items-center" id="navbar">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={handlePreloader}>
            <img src={logo} alt="Logo" />
          </Link>
          <a
            href="mailto:hasandevpro@gmail.com"
            className="hidden lg:flex text-white hover:text-[#757575]"
          >
            hasandevpro@gmail.com
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end w-full lg:w-[70%]">
          <ul className="menu menu-horizontal px-1 text-white space-x-6">
            <li
              className="mr-2 text-lg cursor-pointer hover:text-[#757575]"
              onClick={handlePreloader}
            >
              <Link to="/">Home</Link>
            </li>
          </ul>

          {/* Hire Me Button */}
          <button className="text-2xl font-bold w-36 bg-gradient-to-r from-primary via-[#8750f7] to-[#ff00d3] bg-300% text-transparent bg-clip-text animate-gradient">
            <Link to="#" onClick={handlePreloader}>
              Hire Me
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
