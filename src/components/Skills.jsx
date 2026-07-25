import Reveal from "./Reveal";
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNodedotjs, SiTypescript } from "react-icons/si";
import { BiLogoFirebase, BiLogoFlutter } from "react-icons/bi";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { icon: <DiHtml5 className="text-orange-600" />, name: "HTML" },
      { icon: <DiCss3 className="text-blue-600" />, name: "CSS" },
      { icon: <RiTailwindCssFill />, name: "Tailwind" },
      { icon: <DiReact />, name: "React" },
      {
        icon: <SiTypescript className="text-blue-400" />,
        name: "Typescript",
      },
      {
        icon: <DiJavascript1 className="text-yellow-500" />,
        name: "Javascript",
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
      {
        icon: <BiLogoFirebase className="text-yellow-600" />,
        name: "Firebase",
      },
    ],
  },
  {
    category: "Mobile",
    technologies: [
      {
        icon: <BiLogoFlutter className="text-blue-400 mx-2" />,
        name: "Flutter",
      },
      {
        icon: <BiLogoFirebase className="text-yellow-600 mx-2" />,
        name: "Firebase",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I worked on various projects across frontend, backend, and mobile
          development. Check them out below.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/3"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="flex flex-col gap-3">
                {skill.technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 min-w-0">
                    <span className="text-2xl shrink-0">{tech.icon}</span>
                    <span className="truncate">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
