import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Anasol Consultancy Website",
    description:
      "Designed and developed the official website for a consultancy firm using React, Node.js, and MongoDB. Includes services, inquiry forms, and career page.",
    tech: ["React.js", "Node.js", "MongoDB", "HTML", "CSS"],
    link: "https://anasol.co.in",
  },
  {
    title: "WatchFlix – Video Streaming Platform",
    description:
      "Built a Netflix-style web app with user auth, global state via Context API, and lazy loading for performance. SQL used for managing video and user data.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "SQL"],
    link: "#",
  },
];

// Floating animation
const floatAnim = {
  animate: {
    y: [0, -5, 0, 5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 bg-[#0d0d0d] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-blue-400 font-mono mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="bg-[#141414] border border-[#1f1f1f] p-6 rounded-xl shadow-md hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-2"
              variants={floatAnim}
              animate="animate"
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-2 font-mono">
                {proj.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed font-sans">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#1f1f1f] text-gray-300 border border-gray-700 px-2 py-1 rounded-full font-mono hover:border-blue-500 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-400 font-mono underline"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
