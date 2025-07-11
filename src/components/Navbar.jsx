import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-purple-800 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-white font-mono tracking-tight">
          Ashish<span className="text-purple-500">.dev</span>
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-sm text-gray-300 font-mono">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="relative group transition">
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-300 group-hover:text-purple-400"
              >
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full rounded-full" />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
