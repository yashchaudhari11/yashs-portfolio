import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 animate-text mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-white/80 mb-10 text-lg sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Feel free to reach out if you'd like to collaborate or just want to say hi!
        </motion.p>

        <motion.form
          className="space-y-6 text-left bg-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-md mx-auto max-w-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
