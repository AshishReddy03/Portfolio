import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import FloatingStars from "./FloatingStars";

// Icons
import { FaReact, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";
import { SiMongodb, SiPostgresql } from "react-icons/si";

// Skill categories
const skills = [
  {
    title: "Frontend",
    icon: <FaReact className="text-[#61DBFB]" />,
    items: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: <FaNodeJs className="text-[#3C873A]" />,
    items: ["Node.js", "Express.js", "Spring Boot"],
  },
  {
    title: "Databases",
    icon: <SiMongodb className="text-[#47A248]" />,
    items: ["MongoDB", "MySQL", "Mongoose"],
  },
  {
    title: "Tools",
    icon: <FaGitAlt className="text-[#F05032]" />,
    items: ["GitHub", "VS Code", "Postman"],
  },
  {
    title: "Languages",
    icon: <FaJava className="text-[#007396]" />,
    items: ["Java", "Python", "SQL"],
  },
];

// Floating effect animation
const floatAnim = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#0d0d0d] text-white py-20 px-6 overflow-hidden flex items-center"
    >
      {/* Background */}
      <FloatingStars />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-black to-black blur-2xl opacity-70 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center space-y-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Tech Stack
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map((category, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              transitionSpeed={2500}
              className="hover:scale-[1.02] transition-transform"
            >
              <motion.div
                className="relative bg-[#121212]/70 border border-purple-700 rounded-xl p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-purple-500/30"
                animate={floatAnim.animate}
              >
                {/* Glowing ring background */}
                <div className="absolute -inset-1 rounded-xl bg-purple-600/10 blur-2xl opacity-30 z-[-1]" />

                {/* Heading */}
                <div className="flex items-center justify-center text-2xl font-bold text-purple-300 mb-4 font-mono gap-2">
                  {category.icon} {category.title}
                </div>

                {/* Skills List */}
                <ul className="flex flex-wrap justify-center gap-3 text-sm text-gray-300">
                  {category.items.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#1c1c1c] hover:bg-purple-700/30 px-3 py-1.5 rounded-md font-mono transition"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
