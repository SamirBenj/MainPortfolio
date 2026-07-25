import { FaGithubSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6 p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4 text-center md:text-left">
        <h3 className="text-2xl text-gray-200 font-semibold">S.B</h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl justify-center md:justify-start">
          <a href="http://github.com/SamirBenj/">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/samir-benjalloul-026501195/">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@codesomething1097">
            <FaYoutube />
          </a>
        </div>
      </div>

      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} S.BENJALLOUL
      </p>
    </div>
  );
};

export default Footer;
