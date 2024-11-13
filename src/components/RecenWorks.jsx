import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RecentWorks = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [zoomEffect, setZoomEffect] = useState(true); 


  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const categories = ["All", "React", "Nextjs", "WP"];

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




  return (
    <section className="recent-works" id="projects">
      <div className="">
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
              <div className="">
                <img 
                  className="rounded-lg object-cover" 
                  src={project.thumbnail} 
                  alt={project.title} 
                />
              </div>
              <h3 className="text-[#ddd]">{project.title}</h3>
              <p className="text-[#ddd]">{project.description}</p>

              
              
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

            <div className="flex justify-between items-center"> 
            
               <div className="flex gap-10">
               <a className="text-2xl text-[#ddd]" title="Live Link" href={project.liveLink}  target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                  </a>
                <a className="text-2xl text-[#ddd]" title="Github Link" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
               </div>
               <div>
             <Link to={`/portfolio/${project.id}`}><button  className="text-center text-sm text-white bg-transparent btn outline-none p-4 bg-[#ccc] mt-4 hover:bg-transparent hover:text-[#ddd] ">View Details</button></Link>
             </div>

            </div>
             
            </div>
          ))}
        </div>
          



        {visibleCount < filteredProjects.length && (
         <button onClick={handleLoadMore} className="group flex items-center py-3">
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">See More</span></button>
        
        )}



      </div>
    </section>
  );
};

export default RecentWorks;
