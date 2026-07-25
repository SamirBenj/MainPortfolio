import { useState } from "react";

import Reveal from "./Reveal";
import projects from "../assets/projects.json";
import { BsYoutube } from "react-icons/bs";

const getCategory = (project) =>
  project.tech.includes("Flutter") ? "Mobile" : "Web";

const filters = ["All", "Web", "Mobile"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "All" || getCategory(project) === activeFilter
  );

  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <Reveal>
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>

        <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg transition duration-300 ${
                activeFilter === filter
                  ? "bg-purple-600 text-gray-100"
                  : "bg-gray-800/40 text-gray-300 hover:bg-gray-800/70"
              }`}
            >
              {filter} Apps
            </button>
          ))}
        </div>
        {visibleProjects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row text-left ${
              index % 2 !== 0 ? "md:flex-row-reverse md:text-right" : ""
            } mb-12 hover:scale-105 transition duration-300`}
          >
            <div className="w-full md:w-1/2 p-4 ">
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}${project.imageLink}`}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div
              className={`w-full md:w-1/2 p-4 flex flex-col justify-center ${
                index % 2 !== 0 ? "md:items-end" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {project.info && (
                <p className="text-purple-400 text-sm mb-4">{project.info}</p>
              )}
              <div className="flex space-x-4">
                {project.haveLink ? (
                  <a
                    href={project.ytLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 justify-center items-center flex"
                  >
                    <p className="text-sm pr-3"> Watch Demo </p>

                    <BsYoutube />
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div>
                <h4 className="text-gray-300 text-lg mt-4">Technologies</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="px-2 py-1 bg-blue-600 text-gray-200 rounded-lg"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
};

export default Portfolio;
