import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [animationKey, setAnimationKey] = useState(0); // key to force re-mount

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimationKey((prevKey) => prevKey + 1);
  }, []); // This ensures it runs only when the component mounts (like page load)

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
      href: "mailto:yashchaudhari9599@gmail.com",
      icon: <Mail className="w-6 h-6 text-white" />,
    },
  ];

  const skills = [
    { name: "JAVA", url: "https://docs.oracle.com/en/java/" },
    { name: "React.js", url: "https://reactjs.org/docs/getting-started.html" },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ];

  return (
    <div id="home">
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient + Texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-800">
          <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-80" />

          {/* Animated Blobs */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={animationKey} // This ensures the content is re-rendered on every visit
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            key={Math.random()} // Ensures motion replays on every visit
          >
            <div className="w-48 h-48 mx-auto rounded-full border-4 border-white/50 overflow-hidden shadow-lg shadow-white/10">
              <img
                src="./images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
            viewport={{ once: false }} // Keep animations from resetting
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-lg animate-pulse">
              Hey,
            </span>{" "}
            <span className="text-3xl md:text-5xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
              I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 animate-text">
                Yash
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-2xl lg:text-3xl mb-8 text-white/90 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }} // Keep animations from resetting
          >
            A passionate developer with a knack for creating dynamic web
            applications.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-6 mb-12"
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

          {/* Skills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }} // Keep animations from resetting
          >
            {skills.map((skill, idx) => (
              <motion.a
                key={idx}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 hover:bg-white/20 transition"
                whileHover={{ scale: 1.1 }}
              >
                {skill.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </header>
    </div>
  );
};

export default Hero;
