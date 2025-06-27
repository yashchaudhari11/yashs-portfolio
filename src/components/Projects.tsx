import { motion } from "framer-motion";
import projects, { Project } from "../data/Project";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-violet-900 text-white overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-2xl md:text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 60],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {["</>", "{ }", "();", "=>", "#"][i % 5]}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Header with animated gradient */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Here are some of my featured works. Each project represents a unique
            challenge and learning experience.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={index}
              className="group relative flex flex-col h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 z-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Glow effect - behind content */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]"></div>

              {/* Project image placeholder */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
              </div>

              {/* Content container */}
              <div className="relative z-10 flex flex-col flex-grow">
                {/* Project info */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 hover:bg-white/20 hover:text-white transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons - now clickable */}
                <div className="flex gap-3 mt-auto overflow-visible">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-white transition-all z-10"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiGithub />
                    <span>Code</span>
                  </motion.a>
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white transition-all z-10"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiExternalLink />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/yashchaudhari11?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-medium flex items-center gap-2 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="text-xl" />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
