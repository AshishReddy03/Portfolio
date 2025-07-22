import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import FloatingStars from "./FloatingStars";

// Custom image (Pinecone)
const pineconeLogo = (
  <img
    src="https://avatars.githubusercontent.com/u/87796377?s=200&v=4"
    alt="Pinecone"
    className="w-8 h-8 rounded"
  />
);

// Row 1: Frontend tools
const frontendSkills = [
  { name: "React", icon: <FaReact className="text-[#61DBFB]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F0DB4F]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-[#E44D26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#264de4]" /> },
];

// Row 2: Backend, DB, Tools
const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-[#3C873A]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "Java", icon: <FaJava className="text-[#007396]" /> },
];
const BackgroundBlobs = () => (
  <>
    <motion.div
      className="absolute w-80 h-80 bg-purple-600/30 rounded-full blur-3xl top-[10%] left-[5%] z-0"
      animate={{ y: [0, 20, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-[28rem] h-[28rem] bg-indigo-400/20 rounded-full blur-2xl bottom-[5%] right-[5%] z-0"
      animate={{ y: [0, -30, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
);
const ScrollingSkills = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto py-16 px-4 space-y-12">
      <FloatingStars />
      <BackgroundBlobs />
      <h2 className="text-3xl p-10 font-bold text-center text-purple-300 mb-4">
        My Tech Stack
      </h2>

      {/* Reusable row component */}
      {[frontendSkills, backendSkills].map((skillRow, index) => (
        <div key={index} className="relative w-full overflow-hidden group">
          {/* Fading gradient edges */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />

          {/* Icon scroller */}
          <div
            className="flex gap-10 items-center animate-scroll group-hover:[animation-play-state:paused]"
            style={{
              animationDelay: index === 1 ? "1.5s" : "0s",
              width: "max-content",
            }}
          >
            {[...skillRow, ...skillRow].map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="flex flex-col items-center justify-center w-24 hover:scale-110 transition-transform"
              >
                <div className="text-6xl mb-1">{skill.icon}</div>
                <p className="text-xs text-gray-300 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Keyframes for scrolling */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingSkills;
