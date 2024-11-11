import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { FaFacebookSquare, FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaRegMessage } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from 'react-icons/md';
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
    <section className="">
      
      <div className=' px-4 lg:px-0'>
      
      <p className="text-3xl lg:text-5xl text-white leading-tight font-bold gradient-text">
            Let’s work together!
            </p>
            <p className="pt-2 pb-4 text-lg text-white">
            I design and code beautifully simple things and i love what i do. <br/> Just simple like that!
            </p>
      </div>   
      
        <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-0">
          
         
          <form  data-aos="fade-up"     data-aos-delay="600"  ref={form} onSubmit={sendEmail}  className="py-4 lg:py-6 w-full lg:w-1/2">
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">     
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
<div data-aos="fade-up"     data-aos-delay="400"
 className="w-full lg:w-1/2 mt-6">
            
            <div className="space-y-8">
            <div className="flex items-center text-[#ddd] space-x-4">
               <div className="icon"><MdOutlinePhoneInTalk /></div>
                <span>+8801861026837</span>
              </div>
              <div className="flex items-center text-[#ddd] space-x-4">
                <div className="icon"><FaRegEnvelope></FaRegEnvelope></div>                <span>hasandevpro@gmail.com</span>
              </div>
              <div className="flex items-center text-[#ddd] space-x-4">
                <div className="icon"><FaMapMarkerAlt /></div>
                <span>Gulshan-1, Dhaka-1212, Bangladesh</span>
              </div>
             
              

              
            </div>
            {/* <div className="flex space-x-4 mt-10 "> 
                  <a className="text-4xl text-white " href="https://github.com/hasanali207/"><FaGithub />
                  </a>
                  <a  className="text-4xl text-white"  href="https://www.linkedin.com/in/hasanali207/"><FaLinkedin   /></a>
                  <a  className="text-4xl text-white"  href="https://www.facebook.com/hasanali142228/"><FaFacebookSquare />
                  </a>
              </div> */}
          </div>



        </div>
        
      </section>
      
   
  );
};

export default Contact;
