import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import FloatingStars from "./FloatingStars.jsx";

// Floating glowing dots (blurred and softer)
const FloatingDots = () =>
  Array.from({ length: 50 }, (_, i) => (
    <motion.span
      key={i}
      className="absolute bg-purple-500 rounded-full blur-sm"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: "5px",
        height: "5px",
        opacity: 0.5,
        zIndex: 0,
      }}
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ));

const FloatingCode = () =>
  Array.from({ length: 25 }, (_, i) => {
    const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    const left = (i * 7) % 100;
    const fontSize = Math.random() * 0.9 + 1;
    const duration = 8 + Math.random() * 3;

    return (
      <motion.span
        key={i}
        className="absolute text-purple-300 font-mono pointer-events-none select-none whitespace-nowrap blur-[0.5px]"
        style={{
          left: `${left}%`,
          top: `${-10 - i * 2}%`,
          fontSize: `${fontSize}rem`,
          opacity: 0.5,
          zIndex: 0,
        }}
        animate={{ y: "110vh" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {text}
      </motion.span>
    );
  });

// Floating code snippets (blurred a bit and evenly spaced)
const codeSnippets = [
  "function()",
  "return",
  "=>",
  "<div>",
  "useState()",
  "console.log()",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center px-6 bg-black text-white overflow-hidden"
    >
      {/* Enhanced background: blur + glowing dots + code */}
      <FloatingStars />
      <FloatingDots />
      <FloatingCode />
      {/* Deep blur background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-black to-black blur-3xl opacity-70 z-0" />
      {/* Main Focused Card Content */}
      <motion.div
        className="relative z-10 max-w-3xl w-full text-left border border-purple-700 rounded-xl p-8 backdrop-blur-xl bg-black/50 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-md text-purple-500 font-mono mb-2"
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
          className="mt-2 text-xl md:text-2xl font-mono text-gray-300"
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
            className="px-5 py-2 bg-purple-700 text-white rounded-md font-mono hover:bg-purple-800 transition"
          >
            View Projects
          </a>
          <a
            href="/AshishReddy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-mono">
              View Resume
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
