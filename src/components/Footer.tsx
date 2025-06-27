import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
    {
      href: "https://github.com/yashchaudhari11/",
      icon: <Github className="w-6 h-6 text-white" />,
    },
    {
      href: "https://linkedin.com/in/yash-chaudhari-a94701242/",
      icon: <Linkedin className="w-6 h-6 text-white" />,
    },
    {
      href: "",
      icon: <Twitter className="w-6 h-6 text-white"/>
    },
    {
      href: "https://instagram.com/yashchaudhari.11/",
      icon: <Instagram className="w-6 h-6 text-white" />,
    },
  ];

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="py-10 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* <motion.h2
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
        </motion.p> */}

        <motion.div
            className="flex justify-center gap-6 mb-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} // Keep animations from resetting
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.15, rotate: 3 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

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
