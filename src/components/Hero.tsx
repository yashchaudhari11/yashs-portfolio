import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import '../globals.css'

const Hero: React.FC = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, []);

  const socialLinks = [
    {
      href: "https://github.com/yashchaudhari11/",
      icon: <Github className="w-6 h-6" />,
      name: "GitHub"
    },
    {
      href: "https://linkedin.com/in/yash-chaudhari-a94701242/",
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn"
    },
    {
      href: "mailto:yashchaudhari.rcpit@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      name: "Email"
    },
  ];

  const handleResumeDownload = () => {
    const resumePath = '../resume/yash_resume.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Yash_Chaudhari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className={`relative ${'../globals.css'}`}>
      <br/>
      <br/>
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background with floating elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0 bg-[url('/images/background.png')] bg-cover bg-center opacity-20" />
          
          {/* Floating Tech Icons */}
          <div className="absolute inset-0 opacity-10">
            {['</>', '{ }', '()', '=>', ';'].map((symbol, i) => (
              <motion.div
                key={i}
                className="absolute text-white text-2xl"
                style={{
                  left: `${Math.random() * 90 + 5}%`,
                  top: `${Math.random() * 90 + 5}%`,
                }}
                animate={{
                  y: [0, (Math.random() - 0.5) * 40],
                  x: [0, (Math.random() - 0.5) * 40],
                  rotate: [0, Math.random() * 360],
                }}
                transition={{
                  duration: Math.random() * 15 + 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {symbol}
              </motion.div>
            ))}
          </div>
          
          {/* Gradient Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                x: [-100, -50, -100],
                y: [-100, -150, -100]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl opacity-20"
              animate={{
                scale: [1, 1.3, 1],
                x: [100, 150, 100],
                y: [100, 50, 100]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
          <motion.div
            key={animationKey}
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Title with custom font for name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
    I'm <span className="font-['Audiowide']">Yash</span>
  </span>
</h1>
              
              {/* Animated subtitle */}
              <motion.div
                className="overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white/80 mb-8">
                  <motion.span 
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white/80 via-white/90 to-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                  >
                    Full Stack Developer & Problem Solver
                  </motion.span>
                </h2>
              </motion.div>
            </motion.div>

            {/* Description with typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mb-10"
            >
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  Crafting exceptional digital experiences with
                </motion.span>{' '}
                <motion.span
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  modern technologies
                </motion.span>{' '}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  and
                </motion.span>{' '}
                <motion.span
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                >
                  clean code
                </motion.span>
                <motion.span
                  className="inline-block ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleResumeDownload}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </motion.button>
              
              <motion.a
                href="#about"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium flex items-center justify-center gap-2 hover:bg-white/20 transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ y: -3 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/10 transition-all group-hover:shadow-lg group-hover:shadow-white/10">
                    {link.icon}
                  </div>
                  <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <br/>
          <br/>
          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-xs text-white/50 mb-2">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-4 h-4 border-r-2 border-b-2 border-white/50 transform rotate-45" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>
    </div>
  );
};

export default Hero;