// eslint-disable-next-line no-unused-vars
import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I care about clean, maintainable code and interfaces that
                actually make sense to the people using them. Beyond building
                features, I enjoy digging into the &quot;why&quot; behind a
                design decision, which is what drew me to studying UX
                alongside development. I&apos;m currently looking for
                opportunities where I can keep growing as a FullStack
                developer.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  10<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>
            </div>
          </div>
          <form
            action="https://getform.io/f/aejjvmlb"
            method="POST"
            className=" max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
