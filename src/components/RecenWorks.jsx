import { useState, useEffect } from "react";

const RecentWorks = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [zoomEffect, setZoomEffect] = useState(true); // State for zoom effect

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

  return (
    <section className="recent-works">
      <div className="container">
        <div className="flex justify-center items-center ">
          <h1 className='text-5xl leading-tight font-bold gradient-text py-4'> My Recent Works</h1>
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
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="flex flex-wrap items-center gap-1"> 
                <h1 className="text-[#ddd]">Technologies:</h1>
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

              <button className="text-center btn bg-[#ccc] mt-4 w-full">Details</button>
            </div>
          ))}
        </div>
        
        {visibleCount < filteredProjects.length && (
          <button onClick={handleLoadMore} className="btn bg-[#8750f7] text-white py-2 px-4 rounded mt-4">
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default RecentWorks;
