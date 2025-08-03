// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaGithubSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">S.B</h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
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

      <p className="text-gray-400">@2025 S.BENJALLOUL</p>
    </div>
  );
};

export default Footer;
