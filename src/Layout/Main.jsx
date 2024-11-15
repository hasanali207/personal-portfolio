import React, { useEffect, useState } from 'react';
import Header from '../Pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
  const [loadingText, setLoadingText] = useState('');
  const fullText = 'LOADING';

  useEffect(() => {
    const preloader = document.querySelector('.preloader');
    let currentIndex = 0;

    const typeWriter = () => {
      // Prevent out-of-bounds access and avoid undefined values
      if (currentIndex < fullText.length) {
        const nextChar = fullText[currentIndex];
        // Append the next character if it's not undefined
        if (nextChar !== undefined) {
          setLoadingText((prevText) => prevText + nextChar);
          currentIndex += 1;
        }
      } else {
        // Hide preloader after finishing typing
        clearInterval(typingInterval);
        setTimeout(() => {
          preloader.style.opacity = '0';
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 500);
        }, 500);
      }
    };

    const typingInterval = setInterval(typeWriter, 150);

    return () => clearInterval(typingInterval); // Cleanup interval
  }, []);

  return (
    <div>
      {/* Preloader Section */}
      <div className="preloader fixed inset-0 flex items-center justify-center bg-gray-900 z-50 transition-opacity duration-500">
        <div className="text-4xl font-medium text-white tracking-widest">
          {/* Display each character with an animation */}
          {loadingText.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-pulse"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <Header />
      <div className='max-w-7xl mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
