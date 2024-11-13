import React from 'react'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6'

const Timeline = () => {
  return (
    <section className='max-w-6xl mx-auto pt-0 lg:pt-6 px-4 lg:px-0' id='experience'>
        <div className='py-20'>
      <div className="timeline flex flex-col lg:flex-row justify-between  gap-8">

        <div className=' w-full lg:w-1/2 '>
        <div className="flex mb-8 items-center justify-center lg:justify-start">
        <span className='text-4xl mr-2 text-[#8750f7] gradient-text leading-tight'>< FaGraduationCap /></span>
         <h1 className='text-3xl lg:text-5xl leading-tight font-bold gradient-text '>  My Education</h1>
        
           </div>
        <div data-aos="fade-up"     data-aos-delay="800"  className="timeline-item">
         
          <p className="tl-duration timeline-date   text-xl uppercase font-extrabold ">
            2017 - SSC
          </p>
          <h5 className="text-2xl text-white uppercase font-bold py-2">
            SSC (Science)
            <span className="text-gray-600 font-medium"></span>
          </h5>
          <p className="text-[#ddd]">
            Tushbhander, R. M. M. P Government High School. 
          </p>
        </div>
        <div data-aos="fade-up"     data-aos-delay="900"  className="timeline-item">
         
          <p className="tl-duration timeline-date   text-xl uppercase font-extrabold ">
            2017 - 2019
          </p>
          <h5 className="text-2xl text-white uppercase font-bold py-2">
            HSC (Science)
            <span className="text-gray-600 font-medium"></span>
          </h5>
          <p className="text-[#ddd]">
          Government Karim Uddin Public College. 
          </p>
        </div>
        <div data-aos="fade-up"     data-aos-delay="1000"  className="timeline-item">
         
          <p className="tl-duration timeline-date   text-xl uppercase font-extrabold ">
          2019 - present
          </p>
          <h5 className="text-2xl text-white uppercase font-bold py-2">
            BSC Mathematics
          </h5>
          <p className="text-[#ddd]">
           Uttar Bangla College
          </p>
        </div>

        
      
       
        </div>

        {/* Experience section  */}

        <div className=" w-full lg:w-1/2">
        <div className="flex mb-8 items-center justify-center lg:justify-start">
        <span className='text-3xl mr-2 text-[#8750f7] gradient-text leading-tight'>< FaBriefcase /></span>
         <h1 className='text-3xl lg:text-5xl leading-tight font-bold gradient-text'> My Experience</h1>
           </div>

           <div data-aos="fade-up"     data-aos-delay="900"  className="timeline-item">
         
         <p className="tl-duration timeline-date   text-xl uppercase font-extrabold ">
         2019 - 2021
         </p>
         <h5 className="text-xl lg:text-2xl text-white uppercase font-bold py-2">
         Theme Development - ITBARI
         </h5>
         <p className="text-[#ddd]">
         I worked on WordPress, Woocommerce in Fiverr.
         </p>
       </div>
       <div data-aos="fade-up"     data-aos-delay="1000"  className="timeline-item">
         
         <p className="tl-duration timeline-date   text-xl uppercase font-extrabold ">
         2021 - present
         </p>
         <h5 className="text-2xl text-white uppercase font-bold py-2">
         Computer Operator
         </h5>
         <p className="text-[#ddd]">
         I worked as a computer operator in a Islami Dawah Institute.
         </p>
       </div>    
       

       <div data-aos="fade-up"     data-aos-delay="1100"  className="timeline-item">
         
         <p className="tl-duration timeline-date   text-xl uppercase font-extrabold ">
         2024 
         </p>
         <h5 className="text-2xl text-white uppercase font-bold py-2">
         Full Stack Path
         </h5>
         <p className="text-[#ddd]">
         learning Full Stack SQL Path from Programming Hero.
         </p>
       </div> 
        </div>

       

      </div>
      </div>
    </section>
  )
}

export default Timeline