import React from 'react'

const Timeline = () => {
  return (
    <section className='max-w-6xl mx-auto bg-[]'>

      <div className="timeline flex flex-col lg:flex-row justify-between  gap-8">

        <div className=' w-full lg:w-1/2 '>
        <div className=" ">
         <h1 className='text-5xl leading-tight font-bold gradient-text py-4'> My Education</h1>
           </div>
        <div className="timeline-item">
         
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
        <div className="timeline-item">
         
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
        <div className="timeline-item">
         
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
        <div className=" ">
         <h1 className='text-5xl leading-tight font-bold gradient-text py-4'> My Experience</h1>
           </div>
           <div className="timeline-item">
         
         <p className="tl-duration timeline-date   text-xl uppercase font-extrabold ">
         2019 - present
         </p>
         <h5 className="text-2xl text-white uppercase font-bold py-2">
         Theme Development - ITBARI
         </h5>
         <p className="text-[#ddd]">
         I worked on WordPress, Woocommerce in Fiverr.
         </p>
       </div>
       <div className="timeline-item">
         
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
       

       <div className="timeline-item">
         
         <p className="tl-duration timeline-date   text-xl uppercase font-extrabold ">
         2024 
         </p>
         <h5 className="text-2xl text-white uppercase font-bold py-2">
         Full Stack Developer
         </h5>
         <p className="text-[#ddd]">
         I am learning full stack Developer from Programming Hero.
         </p>
       </div> 
        </div>

       

      </div>

    </section>
  )
}

export default Timeline