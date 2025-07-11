// components/FloatingStars.jsx
import React from "react";
import { motion } from "framer-motion";

const FloatingStars = ({ count = 40 }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <motion.span
          key={i}
          className="absolute bg-white rounded-full pointer-events-none select-none"
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
      ))}
    </>
  );
};

export default FloatingStars;
