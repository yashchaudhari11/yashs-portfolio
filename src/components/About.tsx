import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 text-white px-6 py-8 overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-2xl md:text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 50],
              x: [0, (Math.random() - 0.5) * 50],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {['</>', '{ }', '();', '=>', '#'][i % 5]}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/10 text-white/90 relative overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Glow effect */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>

        {/* Profile Image with fade-in effect */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
            <img
              src="./images/profile.jpg"
              alt="Your Name"
              className="relative w-72 h-84 rounded-2xl object-cover shadow-xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 z-10"
            />
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 pointer-events-none transition-all duration-500"></div>
          </div>
        </motion.div>

        {/* About Text */}
        <div className="space-y-6 text-left">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 pb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            <motion.p 
              className="text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              I'm a Computer Engineering student and self-taught developer with a strong passion for full-stack web development and problem-solving. I love creating responsive, clean applications using modern tools like{" "}
              <span className="text-pink-300 font-medium hover:text-pink-200 transition-colors">React.js</span>,{" "}
              <span className="text-purple-300 font-medium hover:text-purple-200 transition-colors">Node.js</span>, and{" "}
              <span className="text-indigo-300 font-medium hover:text-indigo-200 transition-colors">MongoDB</span>.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              I'm actively improving my{" "}
              <span className="text-emerald-300 font-medium hover:text-emerald-200 transition-colors">
                data structures and algorithms
              </span>{" "}
              skills, staying updated with the latest technologies, and seeking opportunities to contribute through impactful{" "}
              <span className="text-yellow-300 font-medium hover:text-yellow-200 transition-colors">internships</span> and{" "}
              <span className="text-yellow-300 font-medium hover:text-yellow-200 transition-colors">
                collaborative projects
              </span>.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              "BTech - Computer Engineering",
              "Full-Stack Developer",
              "Problem Solver",
            ].map((tag, i) => (
              <motion.span
                key={i}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;