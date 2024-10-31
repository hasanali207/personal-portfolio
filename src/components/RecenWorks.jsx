import { useEffect, useState } from "react";

const RecentWorks = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [zoomEffect, setZoomEffect] = useState(true); // State for zoom effect
  const [selectedProject, setSelectedProject] = useState(null); // State to hold selected project
  const [isModalOpen, setIsModalOpen] = useState(false); 


  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const categories = ["All", "React", "Nextjs", "UX/UI"];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  // Handle category change with zoom effect
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(2); // Reset visible count on category change

    // Temporarily disable zoom effect to reset it
    setZoomEffect(false);
    setTimeout(() => {
      setZoomEffect(true);
    }, 500); // Re-enable zoom effect to trigger the animation
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };



  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };


  return (
    <section className="recent-works">
      <div className="container">
        <div className="flex justify-center items-center ">
          <h1 className='text-3xl lg:text-5xl leading-tight font-bold gradient-text py-4'> My Recent Works</h1>
        </div>
        
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects">
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <div 
              key={project.id} 
              className={`project-card ${zoomEffect ? "zoom-in" : ""}`} // Apply zoom class conditionally
            >
              <div className="w-full ">
                <img 
                  className="w-full rounded-lg" 
                  src={project.thumbnail} 
                  alt={project.title} 
                />
              </div>
              <h3 className="">{project.title}</h3>
              <p className="">{project.description}</p>

              
              
              <div className="flex flex-wrap items-center gap-1"> 
                <h1 className="text-[#ddd] w-full">Technologies:</h1> 
                {Array.isArray(project.technologies) &&
                  project.technologies.map((tech, index) => (
                    <img 
                      key={index} 
                      className="h-10 cursor-pointer" 
                      src={tech.url} 
                      title={tech.title} 
                      alt={tech.title} 
                    />
                  ))
                }
              </div>

             <button onClick={() => handleOpenModal(project)} className="text-center btn bg-[#ccc] mt-4 w-full">Details</button>

             
            </div>
          ))}
        </div>
          



        {visibleCount < filteredProjects.length && (
         <button onClick={handleLoadMore} className="group flex items-center py-3">
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">See More</span></button>
        
        )}


   {/* Modal Component */}
   {isModalOpen && selectedProject && (
          <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="modal-content bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
              <button onClick={handleCloseModal} className="text-right text-xl font-bold">&times;</button>
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <img src={selectedProject.thumbnail} alt={selectedProject.title} className="w-full mt-4 rounded" />
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedProject.technologies.map((tech, index) => (
                  <img key={index} src={tech.url} alt={tech.title} title={tech.title} className="h-10" />
                ))}
              </div>
            </div>
          </div>
        )}


      </div>
    </section>
  );
};

export default RecentWorks;
