import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-6 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Your Name</p>
          <p className="text-sm text-gray-400">
            Junior Web Developer | React, TailwindCSS, Framer Motion
          </p>
        </div>

        <div className="flex space-x-6 justify-center md:justify-end mt-4 md:mt-0">
          <motion.a
            href="https://github.com/yourgithub"
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yourlinkedin"
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            href="mailto:youremail@example.com"
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
            aria-label="Email"
          >
            <FaEnvelope size={30} />
          </motion.a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
