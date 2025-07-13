import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import FloatingStars from "./FloatingStars";
import Spline from "@splinetool/react-spline";

// Floating elements
const FloatingDots = () =>
  Array.from({ length: 40 }, (_, i) => (
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
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  ));

const codeSnippets = [
  "function()",
  "return",
  "=>",
  "<div>",
  "useState()",
  "console.log()",
];

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
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {text}
      </motion.span>
    );
  });

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="relative h-screen flex items-center justify-center px-6 bg-black text-white overflow-hidden"
    >
      {/* 🔮 Background Layers */}
      <FloatingStars />
      <FloatingDots />
      <FloatingCode />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-black to-black blur-3xl opacity-70 z-0" />

      <Tilt
        glareEnable
        glareMaxOpacity={0.15}
        glareColor="#ffffff"
        glarePosition="all"
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        transitionSpeed={2000}
        className="relative z-10 w-full max-w-4xl"
      >
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 border border-purple-700/50 rounded-xl px-6 py-4 backdrop-blur-xl bg-transparent shadow-[0_0_35px_#a855f7] transition-all duration-700"
          initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.1,
          }}
          whileHover={{
            scale: 1.015,
            boxShadow: "0 0 50px rgba(168, 85, 247, 0.6)",
          }}
        >
          {/* 🤖 Left: 3D Robot */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="w-full md:w-1/2 h-[220px] md:h-[280px] rounded-lg overflow-hidden"
          >
            <Spline scene="https://prod.spline.design/bkeTrUKJndIaa1ri/scene.splinecode" />
          </motion.div>

          {/* 📝 Right: Text */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p className="text-md text-purple-500 font-mono mb-2">
              {`> Hello, I'm`}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold font-mono text-white">
              Ashish Reddy Manne
            </h1>

            <div className="mt-2 text-xl md:text-2xl font-mono text-gray-300">
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
            </div>

            <div className="mt-6 flex gap-4">
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
            </div>
          </motion.div>
        </motion.div>
      </Tilt>
    </motion.section>
  );
};

export default Hero;
