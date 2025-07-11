import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import FloatingStars from "./FloatingStars";

const contactDetails = [
  {
    icon: <FaEnvelope />,
    label: "ashishreddymanne@gmail.com",
    link: "mailto:ashishreddymanne@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    label: "+91 9908563662",
    link: null,
  },
  {
    icon: <FaLinkedin />,
    label: "linkedin.com/in/ashishreddymanne",
    link: "https://www.linkedin.com/in/ashish-reddy-manne-1bb7b3252",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-6 py-20 bg-[#0d0d0d] text-white overflow-hidden"
    >
      <FloatingStars />
      {/* Background Blur Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-black blur-3xl z-0" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="space-y-6 font-mono text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {contactDetails.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-4 text-gray-300 hover:text-purple-400 transition group"
            >
              <span className="text-lg group-hover:text-pink-400 transition">
                {item.icon}
              </span>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
