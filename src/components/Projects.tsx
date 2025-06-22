import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Resume ATS Score Checker",
      description:
        "A web app that checks resumes against ATS bots using parsing and matching techniques with modern React and Node.js stack.",
      techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      link: "https://github.com/your-github/resume-ats",
    },
    {
      title: "Disease Consultant Bot",
      description:
        "An AI-powered chatbot that provides disease-related consultation using machine learning and real-time data scraping.",
      techStack: ["Python", "Flask", "TensorFlow", "MongoDB"],
      link: "https://github.com/your-github/disease-bot",
    },
    {
      title: "Conversational Resume Builder",
      description:
        "Interactive chatbot that scrapes LinkedIn, Leetcode & Naukri data to auto-fill resume templates.",
      techStack: ["React", "Vite", "TailwindCSS", "OpenAI"],
      link: "https://github.com/your-github/resume-bot",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-12 leading-relaxed"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <h3 className="text-2xl font-semibold text-white mb-3 leading-relaxed">
                {project.title}
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-indigo-300 hover:text-indigo-100 underline transition"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
