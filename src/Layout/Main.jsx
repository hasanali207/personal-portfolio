import React, { useState, useEffect } from 'react';// Import the Preloader
import { Outlet } from 'react-router-dom';
import Preloader from '../components/Preloader ';
import Header from '../Pages/Header';
import Footer from '../components/Footer';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Hide Preloader after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // You can adjust the time if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Preloader />} {/* Show Preloader if loading */}
      {!isLoading && (
        <div>
          <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default App;
