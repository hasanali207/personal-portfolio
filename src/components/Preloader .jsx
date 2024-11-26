import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loadingText, setLoadingText] = useState('');
  const [isSlideUp, setIsSlideUp] = useState(false); // For slide-up effect
  const fullText = 'LOADING';

  useEffect(() => {
    const preloader = document.querySelector('.preloader');
    let currentIndex = 0;

    const typeWriter = () => {
      // Typing animation with preventing undefined values
      if (currentIndex < fullText.length) {
        const nextChar = fullText[currentIndex];
        if (nextChar !== undefined) {
          setLoadingText((prevText) => prevText + nextChar);
          currentIndex += 1;
        }
      } else {
        // After typing ends, trigger the slide-up animation
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsSlideUp(true); // Trigger the slide-up effect
          setTimeout(() => {
            preloader.style.display = 'none'; // Remove the preloader from DOM
          }, 2000); // Delay to allow slide-up animation
        }, 2000); // Wait 1 second before sliding up
      }
    };

    const typingInterval = setInterval(typeWriter, 150);

    return () => clearInterval(typingInterval); // Cleanup interval
  }, []);

  return (
    <div
      className={`preloader fixed inset-0 flex items-center justify-center bg-[#0a192f] text-white z-50 transition-transform duration-1000 ${
        isSlideUp ? 'slide-up' : ''
      }`}
    >
      <h1
        className="text-2xl font-light text-[#ddd] tracking-widest"
        style={{ letterSpacing: '30px' }}
      >
        {loadingText}
      </h1>
    </div>
  );
};

export default Preloader;