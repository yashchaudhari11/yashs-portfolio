import React from "react";
import { motion } from "framer-motion";
import { skills, Skill } from "../data/Skills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100 }
  },
  hover: {
    y: -8,
    scale: 1.05,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
  }
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 text-white overflow-hidden"
    >
      {/* Floating tech elements background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-2xl md:text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 40],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {['</>', '{ }', '();', '=>', '#'][i % 5]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Skills
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Technologies I've worked with and mastered to deliver exceptional digital experiences
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((skill: Skill, index: number) => (
            <motion.div
              key={index}
              className="relative"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-white/10 to-white/15 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10 hover:border-white/20 flex flex-col items-center justify-center space-y-4 cursor-pointer h-full"
                whileTap={{ scale: 0.95 }}
                aria-label={`Learn more about ${skill.name}`}
              >
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain z-10 transition-transform group-hover:scale-110" 
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/fallback-tech-icon.svg';
                    }}
                  />
                </div>
                <span className="text-base font-medium text-white/90 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/10 pointer-events-none transition-all duration-300"></div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* View more skills button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-medium flex items-center gap-2 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Ready to Collaborate?</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;