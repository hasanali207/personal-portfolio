import React, { useEffect, useState } from 'react'; // Import the Preloader
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader ';
import Header from '../Pages/Header';
import Navbar from '../components/Navbar';
const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith('/portfolio/');
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
      
      {!isLoading && !isDetailsPage && (
        <div>
          <Header />
          <Outlet /> {/* Render the matching child route */}
          <Footer />
        </div>
      )}

      {/* For the details page, just render the content with no Header/Footer */}
      {!isLoading && isDetailsPage && (
        <div>
          <Navbar></Navbar>
          <Outlet /> {/* Render the matching child route */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Main;
