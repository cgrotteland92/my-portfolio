import { projects } from "../data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="portfolio" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-brand mb-8 text-left">
          Some of my projects <span>💻</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className="group bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brand transition-colors">
                {project.title}
              </h3>

              <div className="overflow-hidden rounded-md mb-4 h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <p className="text-gray-600 line-clamp-3">{project.summary}</p>

              <span className="inline-block mt-4 text-brand font-semibold text-sm group-hover:underline">
                View Details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
