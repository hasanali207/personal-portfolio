import React from "react";
import { FaArrowDown } from "react-icons/fa";

const About = () => {
  return (
    <section className="p-10 bg-[#0a192f] section sec2 about"  id="about">
      <div className="flex justify-center items-center ">
      <div className="text-5xl leading-tight font-bold gradient-text py-4 ">
        About Me
        </div>
      </div>
      <div className="about-container grid grid-cols-1 lg:grid-cols-2 gap-8 py-14">
        <div className="left-about pr-0 lg:pr-20">
         
          <p className="py-4 leading-8 text-[#ddd]">
          My name is Hasan Ali. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. 
            <br /> <br /> I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
          </p>
          <div className="btn-con">
            <a
              download ="HASANALICV.pdf"
              href="assets/HASANALICV.pdf"
              className="button button_flex outline-none border border-bg-white rounded-lg   text-white py-3 px-5 flex items-center "
            >
              Download CV 
              <div className="ml-2"><FaArrowDown></FaArrowDown></div>
            </a>
          </div>
        </div>
        <div className="right-about grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 sm:pt-0">
          <div className="about-item border border-gray-200 rounded p-6 shadow hover:transform hover:translate-y-[-5px] transition-all duration-400">
            <div className="abt-text flex flex-col">
              <p className="large-text text-3xl font-bold text-[#8750f7]">
                50+
              </p>
              <p className=" uppercase font-semibold text-[#ddd] text-lg relative">
                Projects Completed
               
              </p>
            </div>
          </div>
          <div className="about-item border border-[#8750f7] rounded p-6 shadow hover:transform hover:translate-y-[-5px] transition-all duration-400">
            <div className="abt-text flex flex-col">
              <p className="large-text text-3xl font-bold text-[#8750f7]">
                4+
              </p>
              <p className="small-text  uppercase text-[#ddd] text-lg relative">
                Years of experience
                
              </p>
            </div>
          </div>
          <div className="about-item border border-[#8750f7] rounded p-6 shadow hover:transform hover:translate-y-[-5px] transition-all duration-400">
            <div className="abt-text flex flex-col">
              <p className="large-text text-3xl font-bold text-[#8750f7]">
                80+
              </p>
              <p className="small-text uppercase text-[#ddd] text-lg relative">
                Happy Clients
                
              </p>
            </div>
          </div>
          <div className="about-item border border-gray-200 rounded p-6 shadow hover:transform hover:translate-y-[-5px] transition-all duration-400">
            <div className="abt-text flex flex-col">
              <p className="large-text text-3xl font-bold text-[#8750f7]">
                10+
              </p>
              <p className="small-text  uppercase text-[#ddd] text-lg relative">
                Customer reviews
               
              </p>
            </div>
          </div>
        </div>
      </div>



    </section>
  );
};

export default About;

