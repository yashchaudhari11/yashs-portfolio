import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="py-10 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 animate-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-white/80 mb-6 text-lg sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Feel free to reach out via social media or email.
        </motion.p>

        <div className="flex justify-center space-x-6 flex-wrap justify-center sm:space-x-8">
          <a
            href="https://github.com/yashchaudhari11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition text-base sm:text-lg"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yash-chaudhari-a94701242/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition text-base sm:text-lg"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yashchaudhari9599@gmail.com"
            className="text-white hover:text-blue-400 transition text-base sm:text-lg"
          >
            Email
          </a>
        </div>

        <motion.p
          className="text-white/50 mt-6 text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          &copy; {new Date().getFullYear()} Yash Chaudhari. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
