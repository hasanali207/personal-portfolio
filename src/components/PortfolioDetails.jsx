import { Link, useLoaderData, useParams } from 'react-router-dom';
import RecentWorks from './RecentWorks';
import { useState } from 'react';

export default function PortfolioDetails() {
  const projects = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const project = projects.find((item) => item.id === idInt);
  
  return (
    <div>
      <div className='max-w-5xl mx-auto'>
      <div className="flex justify-between pt-5">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-2xl lg:text-3xl text-white">{project.title}</h1>
          
         
{/* 
          <div className="mt-4">
            <img
              className="w-full"
              src={project.thumbnail}
              alt={project.title}
            />
          </div> */}

          <div className='max-h-svh overflow-hidden overflow-y-visible mt-8 cursor-pointer'>
          <img
              className="w-full"
              src={project.thumbnail2}
              alt={project.title}
            />
          </div>

        </div>

        {/* right section  */}
        <div className="w-full lg:w-[40%]">
          
          <div className="px-6 py-8 flex flex-col space-y-5">
            <h1 className='text-white mt-8 border-b text-2xl py-2'>Links:</h1>
            <div><Link className='mb-2 btn bg-[#0089f7] text-[#fff] border-0 font-semibold' to={project.liveLink}>Live Site Link</Link></div>
            <div><Link className=' mb-2 btn bg-[#0089f7] text-[#fff] border-0 font-semibold'to={project.githubLink}>Client Site Github Repo </Link></div>
            <div><Link className=' mb-2 btn bg-[#0089f7] text-[#fff] border-0 font-semibold'to={project.serverLink}>Server Site Github Repo</Link></div>
            
          </div>


          <div className='px-6 mt-4 mb-4'>
            <h1 className='text-white w-full mb-6 text-2xl border-b py-2'>Feautured:</h1>
            <p className='text-[#ddd]'>{project.description}</p>
          </div>
          <div className="px-6 py-4">
            <h1 className="text-[#ddd] w-full mb-6 text-2xl border-b py-2">Technologies:</h1>
            <div className="grid grid-cols-4 gap-8">
              {Array.isArray(project.technologies) &&
                project.technologies.map((tech, index) => (
                  <img
                    key={index}
                    className="h-10 cursor-pointer "
                    src={tech.url}
                    title={tech.title}
                    alt={tech.title}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* View More  */}

      <RecentWorks></RecentWorks>
    </div>
  );
}
