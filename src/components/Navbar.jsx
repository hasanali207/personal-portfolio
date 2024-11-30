import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logome.svg';
import Preloader from '../components/Preloader ';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const [activeId, setActiveId] = useState('');

  // List of menu items with corresponding section IDs
  const menuItems = [
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleScrollToSection = async (id) => {
    setIsLoading(true); // Start preloading
    setActiveId(id); // Set active id

    // Wait for a brief moment (e.g., 500ms) to show the preloader
    await new Promise((resolve) => setTimeout(resolve, 500));

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Stop preloading after scrolling
    setTimeout(() => setIsLoading(false), 500); // Hide preloader after 500ms
  };

  const handlePreloader = async (path) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    navigate(path); // Navigate after the delay
  };


  return (
    <section className="w-full bg-[#0a192f] px-12 pb-4 pt-2" id="header">
      {isLoading && <Preloader />}

      <div className="flex justify-between items-center" id="navbar">
        {/* Logo */}
        <div className="flex items-center">
          <button onClick={() => handlePreloader('/')}>
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
        <div className="navbar-end hidden lg:flex w-full lg:w-[70%]">
          <ul className="menu menu-horizontal px-1 text-white space-x-6">
          <li
              className="mr-2 text-lg cursor-pointer hover:text-[#757575]"
              onClick={() => handlePreloader('/')}
            >
              Home
            </li>

            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`mr-2 text-lg cursor-pointer ${
                  activeId === item.id
                    ? 'text-[#757575]'
                    : 'hover:text-[#757575]'
                }`}
                onClick={() => handleScrollToSection(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Hire Me Button */}
          <button className="text-2xl font-bold w-36 bg-gradient-to-r from-primary via-[#8750f7] to-[#ff00d3] bg-300% text-transparent bg-clip-text animate-gradient">
            <Link to="#" onClick={() => handleScrollToSection('contact')}>
              Hire Me
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
