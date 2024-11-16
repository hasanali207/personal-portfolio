import React, { useState } from "react";
import logo from "../assets/logome.svg";
import { Link } from "react-router-dom";

const Header = () => {
  // List of menu items with corresponding section IDs
  const menuItems = [
    { name: "Portfolio", id: "portfolio" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "About", id: "about" },
    // { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  // State to manage active section
  const [activeId, setActiveId] = useState("");

  // Function to handle click and scroll to the section
  const handleScrollToSection = (id) => {
    setActiveId(id); // Set active id
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#0a192f] px-12 py-4">
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
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <a
            href="mailto:hasandevpro@gmail.com"
            className="hidden lg:flex text-white hover:text-[#757575] ml-4"
          >
            hasandevpro@gmail.com
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end hidden lg:flex w-[80%]">
          <ul className="menu menu-horizontal px-1 text-white">
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
