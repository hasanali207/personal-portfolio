import React, { useState, useEffect } from "react";
import logo from "../assets/logome.svg";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader ";

const Header = () => {
  // State for preloading and active section
  const [isLoading, setIsLoading] = useState(false);
  const [activeId, setActiveId] = useState("");

  // List of menu items with corresponding section IDs
  const menuItems = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  // Function to handle click and scroll to the section with preloading
  const handleScrollToSection = async (id) => {
    setIsLoading(true); // Start preloading
    setActiveId(id); // Set active id

    // Wait for a brief moment (e.g., 500ms) to show the preloader
    await new Promise((resolve) => setTimeout(resolve, 500));

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Stop preloading after scrolling
    setTimeout(() => setIsLoading(false), 500); // Hide preloader after 500ms
  };

  return (
    <section className="w-full bg-[#0a192f] px-12 pb-4 pt-2" id="header">
      {/* Show Preloader when isLoading is true */}
      {isLoading && <Preloader />}

      <div className="flex justify-between items-center" id="navbar">
        {/* Mobile Menu */}
        <div className="dropdown z-50 lg:hidden">
          <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
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
                  activeId === item.id ? "text-[#757575]" : ""
                }`}
                onClick={() => handleScrollToSection(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Logo and Contact */}
        <div className="flex items-center">
          <Link to="/" onClick={() => handleScrollToSection("header")}>
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
        <div className="navbar-end hidden lg:flex w-full lg:w-[70%]">
          <ul className="menu menu-horizontal px-1 text-white space-x-6">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`mr-2 text-lg cursor-pointer ${
                  activeId === item.id ? "text-[#757575]" : "hover:text-[#757575]"
                }`}
                onClick={() => handleScrollToSection(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Hire Me Button */}
          <button className="text-2xl font-bold w-36 bg-gradient-to-r from-primary via-[#8750f7] to-[#ff00d3] bg-300% text-transparent bg-clip-text animate-gradient">
            <Link to="#" onClick={() => handleScrollToSection("contact")}>
              Hire Me
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
