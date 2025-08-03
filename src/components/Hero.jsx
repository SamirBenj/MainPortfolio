// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import profilepic from "../assets/profilePicture.png";
import { DiJavascript1, DiReact } from "react-icons/di";
import ShinyEffect from "./ShinyEffect";
import { BiLogoFlutter, BiLogoTypescript } from "react-icons/bi";
import { PiPhoneCall } from "react-icons/pi";
import { getAnalytics, logEvent } from "firebase/analytics";
const Hero = () => {
  const analytics = getAnalytics();

  useEffect(() => {
    // Analytics initialization can be done here if needed
    // logEvent(analytics, "page_view", {
    //   page_title: "Hero Section",
    //   page_location: window.location.href,
    //   page_path: window.location.pathname,
    // });
  }, []);

  const handleDownloadCV = () => {
    logEvent(analytics, "download_cv", {
      description: "User clicked the Download CV button",
    });

    const pdfPath = `${
      import.meta.env.VITE_PUBLIC_URL
    }assets/BENJALLOUL_SAMIR_CV_NOT_FULL.pdf`;
    window.open(pdfPath, "_blank");
  };
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative text-start">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={["FrontEnd Dev", 1000, "Flutter Developer", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HI, I AM <br />
            <span className="text-purple-500"> SAMIR</span>
            <br />
            <span className="text-purple-500"> BENJALLOUL</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6 leading-relaxed"
          >
            I am a
            <span className="font-bold text-blue-700"> Junior Front-End </span>
            Developer in
            <span className="font-bold text-blue-700"> React.js</span> and
            <span className="font-bold text-blue-700"> Flutter</span>. I have a
            background in{" "}
            <span className="font-bold text-blue-700">computer science</span>{" "}
            with a focus on web and mobile development. I recently completed a
            Master&apos;s in Digital Humanities, specializing in User Experience
            Design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-5 md:mb-0 justify-start"
          >
            <PiPhoneCall size={29} className="text-purple-400" />
            <p className="text-white">+33 7 67 37 19 74</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0 justify-start"
          >
            {/* <motion.button
              onClick={() => {
                handleDownloadCV();
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 borderborder-purple-400 rounded-xl border-dashed border-white border-2"
            >
              Download CV
            </motion.button> */}

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="http://github.com/SamirBenj/"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/samir-benjalloul-026501195/"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.youtube.com/@codesomething1097"
              >
                <AiOutlineYoutube />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        <motion.img
          src={profilepic}
          className="w-[300px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        {/* <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" /> */}
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <BiLogoFlutter className="text-blue-400 mx-2" />
        <BiLogoTypescript className="text-blue-400 mx-2" />
        {/* <BiLogoFirebase className="text-yellow-600 mx-2" /> */}
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
