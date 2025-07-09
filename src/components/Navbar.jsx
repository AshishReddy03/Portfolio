import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0d0d0d]/90 backdrop-blur-sm border-b border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-xl font-semibold text-white font-sans tracking-tight">
          Ashish<span className="text-blue-500">.dev</span>
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-sm text-gray-300 font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-200 group-hover:text-blue-400"
              >
                {item}
              </a>
              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
