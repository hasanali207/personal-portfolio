import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import {  FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
  return (
    
<footer className=" mt-20 footer footer-center  text-base-content rounded p-10">
  <nav className="grid grid-flow-col text-lg gap-4">
    <a href='/' className="link link-hover text-slate-600 uppercase">Home</a>
    <a href='#contact' className="link link-hover text-slate-600  uppercase">Contact</a>
    <a href='#about' className="link link-hover text-slate-600  uppercase">About</a>
    <a href='#skills' className="link link-hover text-slate-600  uppercase">Skills</a>
  </nav>
  <nav>
    
    <div className="flex space-x-4"> 
        <a className="text-4xl text-teal-500 " href=""><FaGithub />
        </a>
        <a  className="text-4xl text-teal-500"  href=""><FaLinkedin/></a>
        <a  className="text-4xl text-teal-500"  href=""><FaFacebookSquare />
        </a>    
    </div>
    
  </nav>
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by HasanAli</p>
  </aside>
</footer>

    
  )
}

export default Footer