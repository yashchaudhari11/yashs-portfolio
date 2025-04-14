import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-6"
    >
      <motion.div
        className="max-w-4xl text-center space-y-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-12 leading-relaxed"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed backdrop-blur-sm bg-white/10 p-6 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm a passionate Computer Engineering student with a strong interest
          in full-stack web development and problem solving. I love crafting
          clean, interactive, and efficient applications using technologies like
          React.js, Node.js, and MongoDB. My journey is driven by curiosity,
          consistency, and the joy of building things that make an impact.
        </motion.p>

        <motion.div
          className="flex justify-center flex-wrap gap-4 pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {["BTech - Computer Engineering", "Frontend Focused", "Problem Solver"].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 hover:bg-white/20 transition"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
