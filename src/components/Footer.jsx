import { FaChevronUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navitems = (
    <>
     
      <li className="mr-3 text-base text-black ">
        <NavLink className={({ isActive }) =>
              isActive ? 'text-[#757575] focus:text-[#757575] ' : 'hover:text-[#757575]'
            } to="/portfolio">Portfolio</NavLink>
      </li>
      <li className="mr-3 text-base text-black">
        <NavLink className={({ isActive }) =>
              isActive ? 'text-[#757575] focus:text-[#757575]' : 'hover:text-[#757575]'
            } to="/timeline">Timeline</NavLink>
      </li>
      <li className="mr-3 text-base text-black">
        <NavLink className={({ isActive }) =>
              isActive ? 'text-[#757575] focus:text-[#757575]' : 'hover:text-[#757575]'
            } to="/about">About</NavLink>
      </li>
     
      <li className="mr-3 text-base text-black">
        <NavLink className={({ isActive }) =>
              isActive ? 'text-[#757575] focus:text-[#757575]' : 'hover:text-[#757575]'
            } to="/contact">Contact</NavLink>
      </li>
    </>
  );


  return (
    
<footer>
  <div className="top">
    <a href="#navbar" className="flex justify-center items-center">
      <FaChevronUp />
    </a>
  </div>
  <div className="footer-content">
    <p>© 2024 Your HasanDevpro</p>
    <ul className="footer-nav">
      {navitems}
    </ul>
  </div>
</footer>

    
  )
}

export default Footer