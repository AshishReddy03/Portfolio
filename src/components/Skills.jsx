import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Languages",
    tech: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    tech: ["HTML5", "CSS3", "Tailwind CSS", "React.js"],
  },
  {
    title: "Backend",
    tech: ["Spring Boot", "Node.js", "Express.js"],
  },
  {
    title: "Database",
    tech: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    tech: ["VS Code", "Postman", "Git", "GitHub"],
  },
];

// floating animation for each card
const floatAnim = {
  animate: {
    y: [0, -6, 0, 6, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0d0d0d] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-blue-400 font-mono mb-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              className="bg-[#141414] p-6 rounded-xl border border-[#2a2a2a] shadow-md"
              variants={floatAnim}
              animate="animate"
            >
              <h3 className="text-xl font-semibold text-blue-300 font-mono mb-4 border-b border-blue-600 pb-2">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.tech.map((tech, j) => (
                  <motion.span
                    key={j}
                    className="bg-[#1f1f1f] text-gray-200 text-sm font-mono px-3 py-1 rounded-full border border-gray-700 hover:border-blue-400 transition"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
