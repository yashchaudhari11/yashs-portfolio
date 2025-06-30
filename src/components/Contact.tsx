import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 animate-text mb-10 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          className="text-white/80 mb-12 text-base sm:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          I’m actively seeking internship opportunities, open to project
          collaborations and exploring exciting roles to grow professionally.
          Feel free to connect professionally or just say hello.
        </motion.p>

        <motion.div
          className="bg-white/10 p-8 rounded-2xl backdrop-blur-md shadow-lg max-w-xl mx-auto text-left space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center gap-4 text-white/90">
            <Mail size={20} />
            <span>yashchaudhari.rcpit@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <MapPin size={20} />
            <span>Shirpur, Maharashtra, India</span>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
          >
            Download CV
          </a>
          <a
            href="mailto:yashchaudhari.rcpit@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-xl text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition"
          >
            Contact Me
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
