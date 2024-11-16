import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RecentWorks = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [zoomEffect, setZoomEffect] = useState(true);

  // Fetch projects data
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Define project categories
  const categories = ["All", "React", "Nextjs", "WP"];

  // Filter projects based on active category
  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  // Handle category change with zoom effect
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(2); // Reset visible count on category change
    setZoomEffect(false);

    // Re-enable zoom effect to trigger animation
    setTimeout(() => {
      setZoomEffect(true);
    }, 200);
  };

  // Load more projects
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  // Shorten text to a specific word limit
  const getShortText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length <= wordLimit
      ? text
      : words.slice(0, wordLimit).join(" ") + " ...";
  };

  return (
    <section className="recent-works portfolio mt:0 lg:mt-10" id="projects">
      <div>
        {/* Section Title */}
        <div className="flex justify-center items-center">
          <h1 className="text-3xl lg:text-5xl font-bold gradient-text py-4">
            My Recent Works
          </h1>
        </div>

        {/* Category Buttons */}
        <div className="category-buttons flex justify-center gap-4 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${
                activeCategory === category ? "active" : "bg-none hover:bg-transparent"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects">
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className={`project-card ${
                zoomEffect ? "zoom-in" : ""
              } rounded-lg overflow-hidden shadow-lg p-4`}
            >
              {/* Project Thumbnail */}
              <div>
                <img
                  className="rounded-lg object-fill w-full h-48"
                  src={project.thumbnail}
                  alt={project.title}
                />
              </div>

              {/* Project Title and Description */}
              <h3 className="text-[#ddd] mt-4">{project.title}</h3>
              <p className="text-[#ddd] mt-2">
                {getShortText(project.description, 25)}
              </p>

              {/* Project Technologies */}
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

              {/* Project Links */}
              <div className="flex justify-between items-center pt-6">
                <div className="flex gap-6">
                  <a
                    className="text-2xl text-[#8750f7]"
                    title="Live Link"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    className="text-2xl text-[#8750f7]"
                    title="GitHub Link"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
                <Link to={`/portfolio/${project.id}`}>
                  <button className="text-sm bg-transparent border p-2 rounded-md text-white hover:bg-transparent hover:text-[#757575]">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="btn py-2 px-4 text-xs bg-transparent border-none hover:bg-transparent font-bold uppercase hover:text-slate-500 text-slate-200"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentWorks;
