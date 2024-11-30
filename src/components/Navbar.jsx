import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logome.svg';
import Preloader from '../components/Preloader ';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState('');

  const menuItems = [
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleScrollToSection = async (id) => {
    setIsLoading(true);
    setActiveId(id);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setIsLoading(false), 500);
  };

  const handlePreloader = async (path) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    navigate(path);
  };

  return (
    <section className="w-full bg-[#0a192f] px-4 lg:px-12 pb-4 pt-2" id="header">
      {isLoading && <Preloader />}

      <div className="flex justify-between items-center" id="navbar">
     {/* Mobile Menu */}
     <div className="dropdown z-50 lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn text-white btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-full dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow relative"
          >
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`mr-2 text-lg text-gray-700 hover:text-[#757575] cursor-pointer ${
                  activeId === item.id ? 'text-[#757575]' : ''
                }`}
                onClick={() => handleScrollToSection(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>


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

        <div className="navbar-end hidden lg:flex w-full lg:w-[70%]">
          <ul className="menu hidden lg:flex menu-horizontal px-1 text-white space-x-2">
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
