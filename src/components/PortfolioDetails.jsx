import { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Preloader from './Preloader ';
import RecentWorks from './RecentWorks';
import Contact from '../Pages/Contact'

 export default function PortfolioDetails() {
  const projects = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const project = projects.find((item) => item.id === idInt);
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    window.scrollTo(0, 0); // Scroll to the top of the page
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      {loading && <Preloader></Preloader>}
      <div className="max-w-6xl mx-auto px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between pt-5 space-x-0 lg:space-x-6">
          <div className="w-full lg:w-[60%]">
            <h1 className="text-2xl lg:text-3xl text-white">{project.title}</h1>

            <div className="mt-4">
              <img
                className="w-full"
                src={project.thumbnail}
                alt={project.title}
              />
            </div>

            <div className="max-h-svh overflow-hidden overflow-y-visible mt-8 cursor-pointer">
              <img
                className="w-full"
                src={project.thumbnail2}
                alt={project.title}
              />
            </div>
          </div>

          {/* right section  */}
          <div className="w-full lg:w-[40%]">
            <div className="py-8 flex flex-col space-y-5">
              <h1 className="text-white mt-8 border-b text-2xl py-2">Links:</h1>
              <div>
                <Link
                  className="mb-2 btn bg-[#8750f7] hover:bg-[#8750f780] text-[#fff] border-0 font-semibold"
                  to={project.liveLink}
                >
                  Live Site Link
                </Link>
              </div>
              <div>
                <Link
                  className=" mb-2 btn bg-[#8750f7] hover:bg-[#8750f780] text-[#fff] border-0 font-semibold"
                  to={project.githubLink}
                >
                  Client Site Github Repo
                </Link>
              </div>
              <div>
                <Link
                  className=" mb-2 btn bg-[#8750f7] hover:bg-[#8750f780] text-[#fff] border-0 font-semibold"
                  to={project.serverLink}
                >
                  Server Site Github Repo
                </Link>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <h1 className="text-white w-full mb-6 text-2xl border-b py-2">
                Feautured:
              </h1>
              <p className="text-[#ddd]">{project.description}</p>
            </div>
            <div className="py-4">
              <h1 className="text-[#ddd] w-full mb-6 text-2xl border-b py-2">
                Technologies:
              </h1>
              <div className="grid grid-cols-2 gap-4">
                {Array.isArray(project.technologies) &&
                  project.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center space-x-2 border rounded-lg px-6 py-1 "
                    >
                      {' '}
                      <p className="text-white text-sm ">{tech.title}</p>
                      <img
                        src={tech.url}
                        title={tech.title}
                        alt={tech.title}
                        className="h-12 w-12"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* View More  */}

      <div id="portfolio">
        <RecentWorks handleLoadingClick={handleLoadingClick}></RecentWorks></div>
      {/* Footer  */}
       
       <div id="contact"><Contact></Contact> </div>
    </div>
  );
}
