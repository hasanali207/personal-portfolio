import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logome.svg";

const Footer = () => {
  // State to control the visibility of the "Back to Top" button
  const [showTopButton, setShowTopButton] = useState(false);

  // Function to handle scrolling to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll event listener to toggle the visibility of the "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      // Get the skills section element
      const skillsSection = document.getElementById("skills");

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
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-10">
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
          <Link to={"/"} className="flex justify-center items-center">
            <img src={logo} alt="Logo" />
          </Link>
          <p className="text-[#ddd]">© 2024 HasanDevpro</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
