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
          // Inside your modal component (or wherever you render modal content)
<div
  className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  onClick={() => setIsModalOpen(false)}
>
  <div
    className="modal-content bg-white rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
    onClick={(e) => e.stopPropagation()}
  >
    <h2 className="text-2xl font-bold mb-4">{selectedProject?.title}</h2>
    <p className="mb-4">{selectedProject?.description}</p>
    
    <div className="technologies mb-4">
      <h3 className="text-lg font-semibold">Technologies Used:</h3>
      {selectedProject?.technologies?.map((tech, index) => (
        <img key={index} src={tech.url} alt={tech.title} className="h-10 mr-2" />
      ))}
    </div>

    <a href={selectedProject?.github} target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href={selectedProject?.liveDemo} target="_blank" rel="noopener noreferrer" className="ml-4">Live Demo</a>
    
    <button
      className="btn mt-6"
      onClick={() => setIsModalOpen(false)}
    >
      Close
    </button>
  </div>
</div>

        )}


      </div>
    </section>
  );
};

export default RecentWorks;
