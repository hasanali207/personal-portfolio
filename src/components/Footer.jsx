import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logome.svg';
import Preloader from './Preloader ';

const Footer = () => {
  // State to control the visibility of the "Back to Top" button
  const [showTopButton, setShowTopButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeId, setActiveId] = useState('');

  // List of menu items with corresponding section IDs
  const menuItems = [
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'About', id: 'about' },
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

  // Function to handle scrolling to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll event listener to toggle the visibility of the "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      // Get the skills section element
      const skillsSection = document.getElementById('skills');

      // Check if the user has scrolled past the skills section
      if (skillsSection) {
        const skillsSectionTop = skillsSection.getBoundingClientRect().top;
        if (skillsSectionTop < window.innerHeight) {
          setShowTopButton(true);
        } else {
          setShowTopButton(false);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-10">
      {isLoading && <Preloader></Preloader>}

      <footer>
        {/* Back to Top Button */}
        {showTopButton && (
          <div className="fixed bottom-10 right-10 z-50">
            <button
              onClick={handleScrollToTop}
              className="flex justify-center items-center p-3 bg-[#8750f7] text-white rounded-full shadow-lg hover:bg-[#ff00d3] transition"
            >
              <FaChevronUp size={20} />
            </button>
          </div>
        )}

        <div className="flex justify-center items-center flex-col space-y-7">
          <Link to="/" onClick={() => handleScrollToSection('header')}>
            <img src={logo} alt="Logo" />
          </Link>

          <div className="">
            <ul className="grid  grid-cols-2 lg:grid-cols-4  gap-5 lg:gap-0 text-white space-x-0 lg:space-x-6">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`text-lg cursor-pointer ${
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
          </div>

          <p className="text-[#ddd]">© 2024 HasanDevpro</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
