import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// Floating stars
const FloatingStars = () =>
  Array.from({ length: 40 }, (_, i) => (
    <motion.span
      key={i}
      className="absolute bg-white rounded-full"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        opacity: Math.random() * 0.3 + 0.3,
        zIndex: 0,
      }}
      animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 3,
      }}
    />
  ));

// Background blobs
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

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-b from-[#0d0d0d] to-black text-white flex items-center overflow-hidden"
    >
      {/* Background */}
      <FloatingStars />
      <BackgroundBlobs />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Description */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white font-mono mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed font-sans">
            Hey! I’m <span className="text-white font-semibold">Ashish</span>, a
            Full Stack Developer based in{" "}
            <span className="text-white font-semibold">Hyderabad</span>.
            <br />
            <br />I recently graduated from{" "}
            <span className="text-purple-400">Anurag University</span> with a
            B.Tech in CSE and a CGPA of{" "}
            <strong className="text-white">8.25</strong>.
            <br />I enjoy building responsive UIs with React, writing scalable
            APIs in Node.js, and learning new tech to build clean, modern web
            apps.
          </p>
        </motion.div>

        {/* Right: 3D Tilt Cards */}
        <motion.div
          className="grid gap-6 text-sm font-mono"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { label: "📍 Location", value: "Hyderabad, India" },
            { label: "🎓 Degree", value: "B.Tech in CSE (2021–2025)" },
            { label: "📧 Email", value: "ashishreddymanne@gmail.com" },
          ].map((item, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              transitionSpeed={2500}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              className="hover:scale-[1.02] transition-transform"
            >
              <motion.div
                className="relative bg-[#111111] border border-purple-800/40 p-5 rounded-xl shadow-md hover:border-purple-500/60"
                whileHover={{
                  scale: 1.04,
                }}
              >
                {/* Glowing ring behind card */}
                <div className="absolute -inset-1 rounded-xl bg-purple-700 opacity-10 blur-2xl z-[-1]" />
                <h4 className="text-purple-400 mb-1">{item.label}</h4>
                <p className="text-gray-300">{item.value}</p>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
