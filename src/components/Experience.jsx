// eslint-disable-next-line no-unused-vars
import React from "react";
import myExperience from "../assets/experiences.json";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto" id="experience">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {myExperience.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <div className="flex flex-row-reverse items-center justify-evenly">
                <h2 className="text-gray-100 text-2xl font-semibold pl-4">
                  {experience.company}
                </h2>
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}${experience.logo}`}
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <br></br>
              <p className="text-gray-300">{experience.period}</p>
              <p className="text-gray-300 font-extrabold text-lg underline">
                {experience.title}
              </p>

              <p className="text-gray-400 mt-4 whitespace-pre-line text-start">
                {experience.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
