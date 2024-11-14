import React from 'react'
import Header from '../Pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div>
        <Header></Header>
       <div className='max-w-7xl mx-auto'>
       <Outlet></Outlet>
       </div>
        
        <Footer></Footer>
    </div>
  )
}

export default Main;