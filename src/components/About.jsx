import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-[#0d0d0d] text-white flex items-center"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-blue-400 border-b border-blue-600 inline-block pb-1 font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I’m a Computer Science graduate from{" "}
          <span className="text-white">Anurag University</span>, based in
          Hyderabad. With a CGPA of <span className="text-white">8.25</span>,
          I’ve developed strong skills in full-stack development — particularly
          using React and Node.js.
          <br />I love crafting clean UIs, writing scalable backend code, and
          learning new technologies that help turn ideas into real, working
          products.
        </motion.p>

        {/* Quick Info List */}
        <motion.ul
          className="space-y-4 text-gray-300 font-mono text-sm"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            { label: "📍 Location", value: "Hyderabad, India" },
            { label: "🎓 Degree", value: "B.Tech in CSE (2021–2025)" },
            { label: "📧 Email", value: "ashishreddymanne@gmail.com" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="border border-[#1a1a1a] bg-[#111] px-4 py-3 rounded-md hover:border-blue-500 transition duration-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <strong className="text-blue-400">{item.label}</strong>:{" "}
              {item.value}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default About;
