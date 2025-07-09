import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-500 text-center py-6 border-t border-gray-800">
      <p className="text-sm">
        © {new Date().getFullYear()} Ashish Reddy Manne. Built with ❤️ using
        React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
