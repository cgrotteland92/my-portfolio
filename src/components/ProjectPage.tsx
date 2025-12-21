import { useParams, Link } from "react-router-dom";
import { projects } from "../data";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Project not found
        </h2>
        <Link to="/" className="text-gray-600 hover:text-gray-900 underline">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-#f4f4f4">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-brand mb-12 transition-colors"
        >
          <FaArrowLeft className="text-sm" />
          <span>Back</span>
        </Link>

        {/* Hero Image */}
        <div className="mb-12 bg-white rounded-lg overflow-hidden shadow-sm">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto md:h-96 object-cover object-top"
          />
        </div>

        {/* Title & Summary */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand mb-3">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600">{project.summary}</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              project.liveLink === "#" || !project.liveLink
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-900 text-white hover:bg-gray-700"
            }`}
          >
            <FaExternalLinkAlt className="text-sm" />
            {project.liveLink === "#" || !project.liveLink
              ? "Coming Soon"
              : "View Live"}
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            <FaGithub />
            GitHub
          </a>
        </div>

        {/* Details */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {project.details}
          </p>
        </div>

        {/* Tech Stack */}
        {project.stack && project.stack.length > 0 && (
          <div className="mb-16">
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-6">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-700 leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
