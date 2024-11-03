import React from 'react'
import Header from '../Pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Contact from '../pages/Contact';

const Main = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Main;