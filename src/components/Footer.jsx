import { NavLink } from "react-router-dom";

const Footer = () => {
  const navitems = (
    <>
     
      <li className="mr-3 text-base text-white-700 ">
        <NavLink className={({ isActive }) =>
              isActive ? 'text-[#757575] focus:text-[#757575] ' : 'hover:text-[#757575]'
            } to="/portfolio">Portfolio</NavLink>
      </li>
      <li className="mr-3 text-base">
        <NavLink className={({ isActive }) =>
              isActive ? 'text-[#757575] focus:text-[#757575]' : 'hover:text-[#757575]'
            } to="/timeline">Timeline</NavLink>
      </li>
      <li className="mr-3 text-base text-white-700 hover:text-[#757575]">
        <NavLink className={({ isActive }) =>
              isActive ? 'text-[#757575] focus:text-[#757575]' : 'hover:text-[#757575]'
            } to="/about">About</NavLink>
      </li>
     
      <li className="mr-3 text-base text-white-700 hover:text-[#757575]">
        <NavLink className={({ isActive }) =>
              isActive ? 'text-[#757575] focus:text-[#757575]' : 'hover:text-[#757575]'
            } to="/contact">Contact</NavLink>
      </li>
    </>
  );


  return (
    
<footer className="footer w-full items-center text-[#ddd] shadow-md mt-10">
 <div className="container flex   lg:flex-row flex-col-reverse justify-between items-center gap-6">
 <aside className="py-4">    
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <div className="">
        <ul className=" flex px-1 text-white">
          {navitems}
        </ul>
      </div>
 </div>


</footer>
    
  )
}

export default Footer