import img1 from '../assets/html.png';
import img2 from '../assets/css.png';
import img3 from '../assets/tailwind.png';
import img4 from '../assets/bootstrap.png';
import img5 from '../assets/react.png';
import img6 from '../assets/node.png';
import img7 from '../assets/mongodb.png';
import img8 from '../assets/typescript.png';
import img9 from '../assets/nextjs.png';
import img10 from '../assets/figma.png';
import img11 from '../assets/react.png';


export default function Skills() {
  return (
    <div className='pt-0 lg:pt-6 px-2 lg:px-0 overflow-x-hidden f-full lg:h-[100vh] relative'>
      

     <div className="flex flex-col justify-center items-center mb-10">
      
             <h1 className='text-4xl lg:text-5xl leading-tight font-bold gradient-text py-4'> My Skills</h1>
              <p className='text-[#ddd] text-sm lg:text-lg text-center max-w-sm lg:max-w-xl break-words'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
      </div>

  {/* Arrow Animation */}
  <div className="relative">
      <div className="absolute animation-container">
        <div className="arrow"></div>
      </div>
      <div className="flex  items-center justify-center flex-wrap gap-0 lg:gap-4">

 
      {/* item1 */} 
      <div data-aos="fade-right"     data-aos-delay="100" className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img1} alt="HTML" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">HTML</p>
               
      </div>
      {/* item2 */}
      <div data-aos="fade-right"     data-aos-delay="200" className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img2} alt="CSS3" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">CSS3</p>
               
      </div>
      {/* item3 */}
      <div data-aos="fade-right"     data-aos-delay="300" className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img3} alt="Tailwind" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">TAILWIND</p>
               
      </div>
    {/* item  */}
      <div data-aos="fade-right"     data-aos-delay="400" className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img5} alt="HTML" />
          
        </div>
        <p className="text-lg mt-4  text-[#8750f7] ">React</p>
               
      </div>
      {/* item */}
      <div data-aos="fade-right"     data-aos-delay="500" className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img6} alt="HTML" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">Node</p>
               
      </div>
    {/* item  */}
      <div data-aos="fade-right"     data-aos-delay="600" className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img7} alt="MongoDB" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">MONGODB</p>
               
      </div>



     
      
      </div>
     
    
     

     
      <div className="flex  items-center  justify-center flex-wrap gap-0 lg:gap-4 mt-6">
     
      {/* item1 */} 
     
      {/* item2 */}
      <div data-aos="fade-left"     data-aos-delay="600" className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img2} alt="CSS3" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">CSS3</p>
               
      </div>
      {/* item3 */}
      <div data-aos="fade-left"     data-aos-delay="500" className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img3} alt="Tailwind" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">TAILWIND</p>
               
      </div>
    {/* item  */}
      <div data-aos="fade-left"     data-aos-delay="400" className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img5} alt="HTML" />
          
        </div>
        <p className="text-lg mt-4  text-[#8750f7] ">React</p>
               
      </div>
      {/* item */}
      <div data-aos="fade-left"     data-aos-delay="300" className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img6} alt="HTML" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">Node</p>
               
      </div>
    
      <div data-aos="fade-left"     data-aos-delay="200" className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img9} alt="MongoDB" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">NEXTJS</p>
               
      </div>
      <div data-aos="fade-left"     data-aos-delay="100" className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img8} alt="HTML" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">TYPESCRIPT</p>
               
      </div>


      </div>

     
      </div>



      </div>

    
  )
}
