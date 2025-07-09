import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center px-6 bg-[#0d0d0d] text-white"
    >
      <div className="text-left max-w-3xl w-full">
        <motion.p
          className="text-sm text-blue-400 font-mono mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {`> Hello, I'm`}
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl font-bold font-mono text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Ashish Reddy Manne
        </motion.h1>

        <motion.div
          className="mt-2 text-xl md:text-2xl font-mono text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React & Node.js Enthusiast",
              2000,
              "Clean UI Crafter",
              2000,
              "Problem Solver 🧠",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        <motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <a
            href="#projects"
            className="px-5 py-2 bg-blue-600 text-white rounded-md font-mono hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/AshishReddy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              View Resume
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
