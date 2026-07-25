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
        {myExperience.map((experience) => (
          <Reveal key={experience.company}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <div className="flex flex-row-reverse items-center justify-evenly gap-4">
                <h2 className="text-gray-100 text-lg sm:text-2xl font-semibold pl-4 min-w-0">
                  {experience.company}
                </h2>
                <div className="w-20 h-20 shrink-0 bg-white rounded-md p-2 flex items-center justify-center">
                  <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}${experience.logo}`}
                    alt={`${experience.company} logo`}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <br></br>
              <p className="text-gray-300 text-sm sm:text-base">
                {experience.period}
              </p>
              <p className="text-gray-300 font-extrabold text-base sm:text-lg underline">
                {experience.title}
              </p>

              <p className="text-gray-400 mt-4 whitespace-pre-line text-start text-sm sm:text-base">
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
