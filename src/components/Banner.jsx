
import { FaFacebookSquare } from 'react-icons/fa'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import heroimage from '../assets/img/heroimage.png'
export default function Banner() {
  return (
    <>

<section className="z-0  bg-[#0a192f] text-white p-8" id='header'>
  <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center '>
      <div className="w-full lg:w-1/2">
        <div className=" text-3xl lg:text-5xl font-bold mb-2">
          
          I am HasanAli
        </div>
        <div className=" text-4xl lg:text-6xl  leading-tight font-bold gradient-text py-4 ">
        Web Developer  + <br/> UX Designer

       
        </div>
       
        <p className='text-lg lg:text-xl text-left font-light text-[#ddd]  w-full '>I break down complex user experience problems to create integrity focussed solutions that connect  billions of people</p>
        <div className="">
         <div>
         <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className=" py-4 w-max">
            <li><a className="group flex items-center py-3" target='_blank'
              href="https://drive.google.com/file/d/1jfuH4aMhUWt6U3XCSqv3Z0MXNl4rMOWn/view?usp=sharing">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                </span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Resume</span></a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#experience"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span></a>
                  </li>
                  </ul>
                  </nav>
         </div>

         <div className="flex   space-x-4 mt-6 lg:mt-0"> 
                  <a className="text-2xl text-white " href="https://github.com/hasanali207/"><FaGithub />
                  </a>
                  <a  className="text-2xl text-white"  href="https://www.linkedin.com/in/hasanali207/"><FaLinkedin   /></a>
                  <a  className="text-2xl text-white"  href="https://www.facebook.com/hasanali142228/"><FaFacebookSquare />
                  </a>
              </div>
        </div>
      </div>

      <div className='flex items-center mt-20 lg:mt-0'>
          <div className='hero-image flex justify-center items-center gradient-border'>
            <img  src={heroimage} alt="profile-pic" className="align-middle"/>
          </div>
          
      </div>
      </div>
    </section>
    </>
  )
}
