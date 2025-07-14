import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import FloatingStars from "./FloatingStars";
import Lottie from "lottie-react";
import Gmail from "../assets/Gmail.json";
import Phone from "../assets/Phone.json";
import linkd from "../assets/LinkedIn.json";

const contactDetails = [
  {
    icon: <Lottie animationData={Gmail} className="h-25 w-25" loop={true} />,
    label: "ashishreddymanne@gmail.com",
    link: "mailto:ashishreddymanne@gmail.com",
    title: "Email Me",
    desc: "Reach out to me via email for collaborations, opportunities, or any queries you may have.",
  },
  {
    icon: <Lottie animationData={Phone} className="h-25 w-25" loop={true} />,
    label: "+91 9908563662",
    link: "tel:+919908563662",
    title: "Call Me",
    desc: "Available to connect for professional conversations or project discussions.",
  },
  {
    icon: <Lottie animationData={linkd} className="h-25 w-25" loop={true} />,
    label: "linkedin.com/in/ashishreddymanne",
    link: "https://www.linkedin.com/in/ashish-reddy-manne-1bb7b3252",
    title: "Connect on LinkedIn",
    desc: "Let’s network professionally and stay in touch through LinkedIn.",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-6 py-20 bg-[#0d0d0d] text-white overflow-hidden"
    >
      <FloatingStars />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-black blur-3xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {contactDetails.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              className="bg-[#121212] border border-purple-800 rounded-xl p-6 shadow-xl backdrop-blur-sm transition hover:shadow-pink-500/20 hover:-translate-y-1"
            >
              <div className="text-3xl flex justify-center text-purple-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white font-mono">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:underline break-all font-mono"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-300">{item.label}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
