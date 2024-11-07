import { FaChevronUp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logome.svg';
const Footer = () => {
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
            } to="/timeline">Timeline</NavLink>
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
    
      <div className="pt-10">

<footer>
  <div className="top">
    <a href="#navbar" className="flex justify-center items-center">
      <FaChevronUp />
    </a>
  </div>
  <div className="flex justify-center items-center flex-col  space-y-7">

  <Link to={'/'} className=" "> <img className='' src={logo} alt="" />   </Link>
  <ul className="flex justify-between items-center text-[#ddd] space-x-6">
      {navitems}
    </ul>
    <p className="text-[#ddd]">©C 2024 HasanDevpro</p>
   
  </div>
</footer>
      </div>

    
  )
}

export default Footer