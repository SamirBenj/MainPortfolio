// eslint-disable-next-line no-unused-vars
import React from "react";

import Reveal from "./Reveal";
import projects from "../assets/projects.json";
import { BsYoutube } from "react-icons/bs";
const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <Reveal>
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
        {projects.map((project, index) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse text-right " : "text-left"
            } mb-12 hover:scale-95 transition duration-300`}
          >
            <div className="w-full md:w-1/2 p-4 ">
              <img
                src={`${import.meta.env.VITE_PUBLIC_URL}${project.imageLink}`}
                // src={`${project.imageLink}`}
                // src={testCovidImage}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div
              className={`w-full md:w-1/2 p-4 flex flex-col justify-center ${
                index % 2 !== 0 ? "items-end" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {/* <a
                  href={project.ytLink}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  View Site
                </a> */}
                {project.haveLink ? (
                  <a
                    href={project.ytLink}
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
                  {project.tech.map((tech, index) => (
                    <li
                      key={index}
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
