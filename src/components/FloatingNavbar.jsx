import React from "react";
import {
  FaHome,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSun,
} from "react-icons/fa";

const FloatingNavbar = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="group bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 shadow-lg 
        px-8 py-5 rounded-full flex items-center gap-6 backdrop-blur-md 
        transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
        {/* Home Icon */}
        <a href="#home" className="hover:text-purple-500 transition">
          <FaHome size={23} />
        </a>

        {/* Divider */}

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/AshishReddy03"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaGithub size={23} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-reddy-manne-1bb7b3252"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaLinkedin size={23} />
          </a>
          <a
            href="mailto:ashishreddymanne@gmail.com"
            className="hover:text-purple-500 transition"
          >
            <FaEnvelope size={23} />
          </a>
        </div>

        {/* Divider */}
      </div>
    </div>
  );
};

export default FloatingNavbar;
