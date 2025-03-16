import  { useEffect, useState } from 'react';

const Preloader = () => {
  const [loadingText, setLoadingText] = useState('');
  const [isSlideUp, setIsSlideUp] = useState(false); // For slide-up effect
  const fullText = 'HASANALI';

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
          }, 3000); // Delay to allow slide-up animation
        }, 3000); // Wait 1 second before sliding up
      }
    };

    const typingInterval = setInterval(typeWriter, 120);

    return () => clearInterval(typingInterval); // Cleanup interval
  }, []);

  return (
    <div
      className={`preloader fixed inset-0 flex items-center justify-center bg-[#0a192f] text-white z-50 transition-transform duration-1000 ${
        isSlideUp ? 'slide-up' : ''
      }`}
    >
      <h1
        className="text-4xl font-semibold text-[#ddd] tracking-widest bg-gradient-to-r from-primary via-[#8750f7] to-[#ff00d3] bg-300% text-transparent bg-clip-text animate-gradient"
        style={{ letterSpacing: '10px' }}
      >
        {loadingText}
      </h1>
    </div>
  );
};

export default Preloader;
