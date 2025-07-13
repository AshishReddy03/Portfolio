import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import Spline from "@splinetool/react-spline";
import FloatingStars from "./FloatingStars";

// Floating elements
const codeSnippets = [
  "function()",
  "return",
  "=>",
  "<div>",
  "useState()",
  "console.log()",
];

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
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  const handleModelLoad = () => {
    setTimeout(() => setIsModelLoaded(true), 3500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-black text-white overflow-hidden"
    >
      {/* 🔮 Spline background (main robot scene) */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/IsxCOLIjgSeX9NbS/scene.splinecode"
          onLoad={handleModelLoad}
        />
      </div>

      {/* 🌌 Animated background layers */}
      <FloatingStars />
      <FloatingDots />
      <FloatingStars />
      <FloatingDots />
      {isModelLoaded && <FloatingCode />}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 via-black to-black blur-3xl opacity-70 z-0" />

      {/* 🧑‍🚀 Hero card (appears after model is loaded) */}
      {isModelLoaded && (
        <Tilt
          glareEnable
          glareMaxOpacity={0.15}
          glareColor="#ffffff"
          glarePosition="all"
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          transitionSpeed={2000}
          className="relative z-10 w-full px-2 max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl"
        >
          <motion.div
            className="flex flex-row items-center justify-between gap-4 border border-purple-700/50 rounded-xl px-4 py-4 backdrop-blur-xl bg-transparent shadow-[0_0_35px_#a855f7] w-full max-w-4xl"
            initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            whileHover={{
              scale: 1.015,
              boxShadow: "0 0 50px rgba(168, 85, 247, 0.6)",
            }}
          >
            {/* 🤖 Robot Model */}
            <div className="w-[45%] min-w-[120px] max-w-[180px] h-[160px] sm:h-[200px] md:h-[250px] rounded-lg overflow-hidden">
              <Spline scene="https://prod.spline.design/bkeTrUKJndIaa1ri/scene.splinecode" />
            </div>

            {/* 📝 Text Section */}
            <div className="w-[55%] flex flex-col justify-center text-left space-y-2">
              <p className="text-xs sm:text-sm text-purple-500 font-mono">{`> Hello, I'm`}</p>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-white leading-tight">
                Ashish Reddy Manne
              </h1>

              <div className="text-xs sm:text-sm md:text-base font-mono text-gray-300">
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

              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="px-4 py-1.5 bg-purple-700 text-white rounded-md font-mono text-xs sm:text-sm hover:bg-purple-800 transition"
                >
                  View Projects
                </a>
                <a
                  href="/AshishReddy_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-600 text-white px-4 py-1.5 rounded font-mono text-xs sm:text-sm hover:bg-green-700">
                    View Resume
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </Tilt>
      )}
    </section>
  );
};

export default Hero;
