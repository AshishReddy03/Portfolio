import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 bg-[#0d0d0d] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-400 font-mono mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className="space-y-6 text-left md:text-center font-mono text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex items-center justify-start md:justify-center gap-3 text-gray-300 hover:text-blue-400 transition">
            <FaEnvelope />
            <a href="mailto:ashishreddymanne@gmail.com" className="underline">
              ashishreddymanne@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-start md:justify-center gap-3 text-gray-300 hover:text-blue-400 transition">
            <FaPhoneAlt />
            <span>+91 9908563662</span> {/* Replace with your number */}
          </div>

          <div className="flex items-center justify-start md:justify-center gap-3 text-gray-300 hover:text-blue-400 transition">
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/ashish-reddy-manne-1bb7b3252"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              linkedin.com/in/ashishreddymanne
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
