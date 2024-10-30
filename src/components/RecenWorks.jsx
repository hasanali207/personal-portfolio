import { useState, useEffect } from "react";

const RecentWorks = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState([]);



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
            <div key={project.id} className="project-card">
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
