import img1 from '../assets/html.png';
import img2 from '../assets/css.png';
import img3 from '../assets/tailwind.png';
import img4 from '../assets/bootstrap.png';
import img5 from '../assets/react.png';
import img6 from '../assets/node.png';
import img7 from '../assets/mongodb.png';
import img8 from '../assets/typescript.png';
import img9 from '../assets/js.png';
import img10 from '../assets/figma.png';
import img11 from '../assets/react.png';


export default function Skills() {
  return (
    <div className='bg-[#0a192f] py-20 '>
      <div className='container mx-auto'> 
     <div className="flex flex-col justify-center items-center mb-10">
      
             <h1 className='text-5xl leading-tight font-bold gradient-text py-4'> My Skills</h1>
              <p className='text-[#ddd] text-sm lg:text-lg text-center max-w-sm lg:max-w-xl break-words'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
      </div>


      <div className="flex  items-center justify-center flex-wrap gap-4">
       
      {/* item1 */} 
      <div className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img1} alt="HTML" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">HTML</p>
               
      </div>
      {/* item2 */}
      <div className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img2} alt="CSS3" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">CSS3</p>
               
      </div>
      {/* item3 */}
      <div className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img3} alt="Tailwind" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">TAILWIND</p>
               
      </div>
    {/* item  */}
      <div className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img5} alt="HTML" />
          
        </div>
        <p className="text-lg mt-4  text-[#8750f7] ">React</p>
               
      </div>
      {/* item */}
      <div className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img6} alt="HTML" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">Node</p>
               
      </div>
    
      <div className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img7} alt="MongoDB" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">MONGODB</p>
               
      </div>



     
      
      </div>
     
    
     

     
      <div className="flex  items-center  justify-center flex-wrap gap-4 mt-6">
     
      {/* item1 */} 
     
      {/* item2 */}
      <div className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img2} alt="CSS3" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">CSS3</p>
               
      </div>
      {/* item3 */}
      <div className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img3} alt="Tailwind" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">TAILWIND</p>
               
      </div>
    {/* item  */}
      <div className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img5} alt="HTML" />
          
        </div>
        <p className="text-lg mt-4  text-[#8750f7] ">React</p>
               
      </div>
      {/* item */}
      <div className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img6} alt="HTML" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">Node</p>
               
      </div>
    
      <div className="flex flex-col justify-center items-center skill-item">
        
        <div className='icon-box'>
          <img className="w-20 h-20" src={img7} alt="MongoDB" />
          
        </div>
        <p className="text-lg mt-4 text-[#8750f7]">MONGODB</p>
               
      </div>
      <div className="flex flex-col justify-center items-center skill-item">
        
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
