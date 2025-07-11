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

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-20 bg-[#0d0d0d] text-white overflow-hidden"
    >
      {/* Starry background and gradient blur */}
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
              className="relative block bg-[#121212]/60 border border-purple-700/40 rounded-xl p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-600/40 group min-h-[450px]"
            >
              {/* Hover Glow */}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 blur-sm transition pointer-events-none" />

              {/* Image Preview */}
              {proj.image && (
                <img
                  src={proj.image}
                  alt={`${proj.title} Preview`}
                  loading="lazy"
                  className="rounded-md w-full h-48 object-cover object-top border border-purple-800/30 shadow-inner mb-3"
                />
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-purple-300 font-mono mb-2">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed font-sans">
                {proj.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-2">
                {proj.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#1f1f1f] text-gray-300 border border-gray-700 px-2 py-1 rounded-full text-xs font-mono hover:border-purple-500 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link Text */}
              <div className="flex justify-between items-center mt-4">
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
                    <FaGithub className="text-xl" size={40} />
                  </a>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
