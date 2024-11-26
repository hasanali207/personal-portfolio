import React, { useEffect, useState } from 'react'; // Import the Preloader
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader ';
import Header from '../Pages/Header';
const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Hide Preloader after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // You can adjust the time if needed

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

export default Main;