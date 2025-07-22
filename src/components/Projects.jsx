import React from "react";
import { motion } from "framer-motion";
import FloatingStars from "./FloatingStars";
import anasol from "../assets/anasol.png";
import chat from "../assets/chat.png";
import { FaGithub } from "react-icons/fa";

// Project data with preview image
const projects = [
  {
    title: "Anasol Consultancy Website",
    description:
      "Designed and developed the official website for a consultancy firm using React, Node.js, and MongoDB. Includes services, inquiry forms, and career page.",
    tech: ["React.js", "Node.js", "MongoDB", "HTML", "CSS"],
    link: "https://anasol.co.in",
    github: "https://github.com/AshishReddy03/ACSWEBTEST", // <-- ADD THIS
    image: anasol, // Add your preview image here
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Developed a full-stack chat app with real-time messaging using Socket.IO. Features include typing indicators, live user count, smooth animations with Framer Motion, and clean UI with Tailwind CSS. Frontend deployed on Vercel and backend on Render, kept alive 24/7 using UptimeRobot.",
    tech: ["React.js", "Tailwind CSS", "Socket.IO", "Node.js", "Express.js"],
    github: "https://github.com/AshishReddy03/ChatApplication", // <-- ADD THIS
    link: "https://chat-application-seven-gray.vercel.app/",
    image: chat, // Add your preview image here
  },
];

// Animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-20 bg-[#0d0d0d] text-white overflow-hidden"
    >
      {/* Starry background and gradient blur */}
      <BackgroundBlobs />
      <FloatingStars />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-black blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj, i) => (
            <motion.a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-[#1a1a1a] border border-purple-700/30 shadow-md hover:shadow-purple-600/30 transition-all duration-300 hover:-translate-y-2 backdrop-blur-md"
            >
              {/* Project Image Banner */}
              {proj.image && (
                <img
                  src={proj.image}
                  alt={`${proj.title} Preview`}
                  loading="lazy"
                  className="h-56 w-full object-cover object-top border-b border-purple-800/30"
                />
              )}

              {/* Content Block */}
              <div className="p-6 flex flex-col gap-4">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-purple-300 font-mono group-hover:text-pink-400 transition">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed font-sans">
                  {proj.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#222] text-gray-300 border border-gray-700 px-3 py-1 rounded-full text-xs font-mono hover:border-purple-500 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Section: View Project + GitHub */}
                <div className="flex justify-between items-center pt-4 border-t border-purple-800/20 mt-auto">
                  <span className="text-sm text-purple-400 font-mono underline underline-offset-2 group-hover:text-pink-400 transition">
                    View Project →
                  </span>

                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                      title="View Source on GitHub"
                    >
                      <FaGithub
                        size={28}
                        className="transition-transform group-hover:scale-110"
                      />
                    </a>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
