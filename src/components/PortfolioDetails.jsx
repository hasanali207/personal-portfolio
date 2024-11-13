import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

export default function PortfolioDetails() {

    const projects = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const project = projects.find(item => item.id === idInt);
    

  return (
    <div>
        
   <div className="flex justify-between items-center">
    <div className='w-full lg:w-[60%]'>
        
      
      <h1 className='text-2xl lg:text-5xl text-[#ddd]'>{project.title}</h1>

      <div className='mt-4'>
          <img className="w-full" src={project.thumbnail} alt={project.title} />
        </div>

      <p>{project.description}</p>
      <h2>Technologies Used</h2>
      <div className="flex flex-wrap items-center gap-2 mt-4">
                <h1 className="text-[#ddd] w-full">Technologies:</h1>
                {Array.isArray(project.technologies) &&
                  project.technologies.map((tech, index) => (
                    <img
                      key={index}
                      className="h-8 cursor-pointer"
                      src={tech.url}
                      title={tech.title}
                      alt={tech.title}
                    />
                  ))}
              </div>
    </div>
    <div className='w-full lg:w-[40%]'>


    </div>
   </div>

        
  </div>
  
  )
}
