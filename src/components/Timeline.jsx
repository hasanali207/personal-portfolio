import React from 'react'

const Timeline = () => {
  return (
    <section className='max-w-6xl mx-auto'>

<div className="flex justify-center items-cente">
        <h2 className="text-2xl text-center font-semibold text-slate-600 my-10">
          MY <span>TIMELINE</span>
        </h2>   
      </div>
      <div className="timeline grid grid-cols-1 lg:grid-cols-2 gap-8 pb-24 px-10">
        <div className="timeline-item relative pl-12 border-l border-gray-200">
          <div className="tl-icon absolute left-[-27px] top-0 bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
            <i className="fas fa-briefcase text-xl"></i>
          </div>
          <p className="tl-duration bg-gray-200 rounded-full px-2 py-1 text-sm uppercase font-medium inline-block mb-4">
            2017 - SSC
          </p>
          <h5 className="text-xl uppercase font-semibold mb-2">
            SSC (Science)
            <span className="text-gray-600 font-medium"></span>
          </h5>
          <p className="text-gray-600">
            I completed my high school education from Tushbhander, R. M. M. P Gove High School. 
          </p>
        </div>
        <div className="timeline-item relative pl-12 border-l border-gray-200">
          <div className="tl-icon absolute left-[-27px] top-0 bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center"> 
            <i className="fas fa-briefcase text-xl"></i>
          </div>
          <p className="tl-duration bg-gray-200 rounded-full px-2 py-1 text-sm uppercase font-medium inline-block mb-4">2018-2020</p>
          <h5 className="text-xl uppercase font-semibold mb-2">
            Wordpress & Woocommerce
            <span className="text-gray-600 font-medium"> - Softech-IT</span>
          </h5>
          <p className="text-gray-600">
          I worked on WordPress, Woocommerce in Fiverr. I was the one who achieved Level One Seller in Fiverr.
          </p>
        </div>
        <div className="timeline-item relative pl-12 border-l border-gray-200">
          <div className="tl-icon absolute left-[-27px] top-0 bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
            <i className="fas fa-briefcase text-xl"></i>
          </div>
          <p className="tl-duration bg-gray-200 rounded-full px-2 py-1 text-sm uppercase font-medium inline-block mb-4">
            2017 - 2019
          </p>
          <h5 className="text-xl uppercase font-semibold mb-2">
            HSC (SCIENCE)
            <span className="text-gray-600 font-medium"></span>
          </h5>
          <p className="text-gray-600">
          I completed my College education from Karim Uddin Govt College, Kaligonj, Lalmonirhat. 
          </p>
        </div>
        <div className="timeline-item relative pl-12 border-l border-gray-200">
          <div className="tl-icon absolute left-[-27px] top-0 bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
            <i className="fas fa-briefcase text-xl"></i>
          </div>
          <p className="tl-duration bg-gray-200 rounded-full px-2 py-1 text-sm uppercase font-medium inline-block mb-4">
            2019-2024
          </p>
          <h5 className="text-xl uppercase font-semibold mb-2">
           JOB EXPERIENCE
            <span className="text-gray-600 font-medium"> - Computer Operator</span>
          </h5>
          <p className="text-gray-600">
            I am doing part time job at ISLAMI DAOWAH INSTITUTE as a computer operator. 
          </p>
        </div>
        <div className="timeline-item relative pl-12 border-l border-gray-200">
          <div className="tl-icon absolute left-[-27px] top-0 bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
            <i className="fas fa-briefcase text-xl"></i>
          </div>
          <p className="tl-duration bg-gray-200 rounded-full px-2 py-1 text-sm uppercase font-medium inline-block mb-4">
           2024 - Runnig
          </p>
          <h5 className="text-xl uppercase font-semibold mb-2">
            BSC (Bachelor of Science)
            <span className="text-gray-600 font-medium"></span>
          </h5>
          <p className="text-gray-600">
          I want to study in maths department in honors 3rd year at Uttar bangla college.
          </p>
        </div>
        <div className="timeline-item relative pl-12 border-l border-gray-200">
          <div className="tl-icon absolute left-[-27px] top-0 bg-blue-200 w-12 h-12 rounded-full flex items-center justify-center">
            <i className="fas fa-briefcase text-xl"></i>
          </div>
          <p className="tl-duration bg-gray-200 rounded-full px-2 py-1 text-sm uppercase font-medium inline-block mb-4">
            2024 - present
          </p>
          <h5 className="text-xl uppercase font-semibold mb-2">
            Web Development
            <span className="text-gray-600 font-medium"> - Programming Hero</span>
          </h5>
          <p className="text-gray-600">
          Programming Hero Is one of the best Trainning Institute in Bangladesh.I completed the web development course here very successfully. I have worked on some live projects.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Timeline