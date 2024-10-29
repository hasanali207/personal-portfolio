import { useState } from "react";

const RecentWorks = () => {
    const [activeCategory, setActiveCategory] = useState("All");
  
    const projects = [
      { id: 1, category: "Apps", title: "Deloitte Project", description: "Finance project for Deloitte." },
      { id: 2, category: "React", title: "Business Growth", description: "Design experience for business growth." },
      { id: 3, category: "Nextjs", title: "Business Growth", description: "Design experience for business growth." },
      { id: 4, category: "React", title: "Business Growth", description: "Design experience for business growth." },
      { id: 5, category: "React", title: "Business Growth", description: "Design experience for business growth." },
      { id: 6, category: "UX/UI", title: "Business Growth", description: "Design experience for business growth." },
      // Add more projects as needed
    ];
  
    const categories = ["All", "React", "Nextjs", "UX/UI"];
  
    const filteredProjects = projects.filter(
      (project) => activeCategory === "All" || project.category === activeCategory
    );
  
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
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="projects">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card ">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
    );
  };
  
  export default RecentWorks;