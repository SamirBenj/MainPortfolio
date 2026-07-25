import { useState } from "react";
import Reveal from "./Reveal";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    const form = event.target;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto text-base md:text-lg">
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
            onSubmit={handleSubmit}
            className=" max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>

            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              required
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />

            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              required
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />

            <label htmlFor="textarea" className="sr-only">
              Your Message
            </label>
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              required
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 mt-3 text-base">
                Thanks! Your message was sent, I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 mt-3 text-base">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
