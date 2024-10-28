import React from 'react'
import heroimage from '../assets/img/heroimage.png'
export default function Banner() {
  return (
    <>

<section className="z-0  bg-[#0a192f] text-white p-8">
  <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center '>
      <div className="w-full lg:w-1/2">
        <div className="text-5xl font-bold mb-2">
          
          I am HasanAli
        </div>
        <div className="text-6xl leading-tight font-bold gradient-text py-4 ">
        Web Developer  + <br/> UX Designer

       
        </div>
       
        <p className='text-xl font-medium text-[#ddd] max-w-xl w-full '>I break down complex user experience problems to create integrity focussed solutions that connect  billions of people</p>
        <div className="mt-6">
          <a className='mr-4' href="/contact"><button>CONTACT ME</button></a>
         <a href="#skills"> <button>SKILLS</button></a>
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
