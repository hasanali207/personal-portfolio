import React from 'react';
import logo from '../assets/logo1.png';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

  const navitems = (
    <>
     
      <li className="mr-3 text-lg text-white-700 ">
        <NavLink className={({ isActive }) =>
              isActive ? 'text-[#757575] focus:text-[#757575] ' : 'hover:text-[#757575]'
            } to="/portfolio">Portfolio</NavLink>
      </li>
      <li className="mr-3 text-lg  ">
        <NavLink className={({ isActive }) =>
              isActive ? 'text-[#757575] focus:text-[#757575]' : 'hover:text-[#757575]'
            } to="/timeline">Experience</NavLink>
      </li>
      <li className="mr-3 text-lg text-white-700 hover:text-[#757575]">
        <NavLink className={({ isActive }) =>
              isActive ? 'text-[#757575] focus:text-[#757575]' : 'hover:text-[#757575]'
            } to="/about">About</NavLink>
      </li>
     
      <li className="mr-3 text-lg text-white-700 hover:text-[#757575]">
        <NavLink className={({ isActive }) =>
              isActive ? 'text-[#757575] focus:text-[#757575]' : 'hover:text-[#757575]'
            } to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar container flex justify-between bg-[#0a192f] h-[92px]" id='navbar'>
      <div className="navbar-start ">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-full dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow relative">
            {navitems}
          </ul>
        </div>
       
       <div className='flex items-center'>
       <Link to={'/'} className=" "> <img className='w-24 h-24' src={logo} alt="" />   </Link>
       
       <a href="mailto:hasandevpro@gmail.com" className= 'hidden md:hidden lg:flex  text-white hover:text-[#757575]'> hasandevpro@gmail.com </a>
       </div>
         
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {navitems}
        </ul>
      </div>

      <div>
        <button className="text-2xl font-bold   w-36  bg-gradient-to-r from-primary via-[#8750f7] to-[#ff00d3] bg-300% text-transparent bg-clip-text animate-gradient ">
          <Link to={'/contact'}>Hire Me</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;


// <header className="bg-gradient-to-r from-teal-500 to-blue-900 text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-lg font-bold">
//           My Portfolio
//         </div>
//         <nav className="space-x-4">
//           <ul>

//             <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/">Home</a></li>
//             <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/portfolio">Portfolio</a></li>
//             <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/timeline">Timeline</a></li>
//             <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/about">About</a></li>
//             <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/blog">Blog</a></li>
//             <li className="hidden sm:inline mr-3 text-white-700 hover:underline"><a href="/contact">Contact</a></li>
           
//           </ul>
//         </nav>
//       </div>
//     </header>