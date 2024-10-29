import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nu63e1l', 'template_a20lb3l', form.current, {
        publicKey: 'rRzpTsJxAh7UA6No7',
      })
      .then(
        () => {
          Swal.fire({
            title: 'Success!',
            text: 'Thanks for Your Message',
            icon: 'success',
            confirmButtonText: 'Okay'
          })

        },
        (error) => {
          console.log('FAILED...', error.text);
        },  
      );
  };

  return (
    <div className="z-0 px-10 lg:px-20 ">
      
      <div className="">
      <p className="pt-2 pb-4 text-5xl text-white leading-tight font-bold gradient-text py-4 ">
            Let’s work together!
            </p>
            <p className="pt-2 pb-4 text-lg text-white">
            I design and code beautifully simple things and i love what i do. <br/> Just simple like that!
            </p>
      </div>   
      <section className="">
        <div className="flex flex-col lg:flex-row justify-between gap-5 w-full  ">
          
         
          <form ref={form} onSubmit={sendEmail} className="mx-auto p-6 w-full lg:w-1/2">
   <div className="grid grid-cols-2 gap-3">     
  <div className="mb-4">
    
    <input
      type="text"
      name="user_name"
      placeholder="Name"
      required
    className="border text-white w-full py-3 pl-4 rounded-md bg-[#0a192f] border-[#22272c] focus:bg-[#0a192f] focus:border-[#8750f7] focus:outline-none"
    />
  </div>  
  <div className="mb-4">
    
    <input
      type="email"
      name="user_email" 
      placeholder="Email"
      required
       className="border text-white w-full py-3 pl-4 rounded-md bg-[#0a192f] border-[#22272c] focus:bg-[#0a192f] focus:border-[#8750f7] focus:outline-none"
    />
  </div>
  <div className="mb-4">
    <input
      type="text"
      name="subject" 
      required
      placeholder="Subject" 
      className="border text-white w-full py-3 pl-4 rounded-md bg-[#0a192f] border-[#22272c] focus:bg-[#0a192f] focus:border-[#8750f7] focus:outline-none"
    />
  </div>
  <div className="mb-4">
    <input
      type="text" 
      name="phone" 
      placeholder="phone"
      className="border text-white w-full py-3 pl-4 rounded-md bg-[#0a192f] border-[#22272c] focus:bg-[#0a192f] focus:border-[#8750f7] focus:outline-none"
    />
  </div>
  <div className="mb-4 col-span-full">
    <textarea
      name="message"
      placeholder="Message"
      required
        className="border text-white w-full py-3 pl-4 rounded-md bg-[#0a192f] border-[#22272c] focus:bg-[#0a192f] focus:border-[#8750f7] focus:outline-none"
      rows="4"
    ></textarea>
  </div>
  </div>  

  <div className="flex items-center justify-between">
    <input
      type="submit"
      value="Send Message"
      className="font-medium px-8 py-4 w-44 rounded-3xl text-white custom-gradient cursor-pointer"
    />
  </div>
</form>
<div data-aos="fade-right" className=" mt-6 w-full lg:w-1/2">
            
            <div className="space-y-4">
              <p className="flex items-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Gulshan-1, Dhaka-1212, Bangladesh</span>
              </p>
              <p className="flex items-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+8801861026837</span>
              </p>
              <p className="flex items-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>hasanali142228@gmail.com</span>
              </p>

              
            </div>
            <div className="flex space-x-4 mt-10 "> 
                  <a className="text-4xl text-white " href="https://github.com/hasanali207/"><FaGithub />
                  </a>
                  <a  className="text-4xl text-white"  href="https://www.linkedin.com/in/hasanali207/"><FaLinkedin   /></a>
                  <a  className="text-4xl text-white"  href="https://www.facebook.com/hasanali142228/"><FaFacebookSquare />
                  </a>
              </div>
          </div>



        </div>
      </section>
      
    </div>
  );
};

export default Contact;
