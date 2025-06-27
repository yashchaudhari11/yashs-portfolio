import { motion } from "framer-motion";
import { FiAward, FiBook, FiCalendar } from "react-icons/fi";

const Qualifications = () => {
  const qualifications = [
    {
      institution: "Garud High School",
      degree: "Secondary School Certificate (SSC)",
      period: "2016-2021",
      icon: <FiBook className="text-xl" />,
      highlights: [
        "Percentage: 73.60%",
      ]
    },
    {
      institution: "Z. B. Patil Junior College",
      degree: "Intermediate Studies",
      period: "2021-2022",
      icon: <FiBook className="text-xl" />,
      highlights: [
        "Managed vaccination camp",
        "Physics, Chemistry, Mathematics",
      ]
    },
    {
      institution: "Gangamata Junior College of Art & Science",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2022-2023",
      icon: <FiBook className="text-xl" />,
      highlights: [
        "Percentage: 68.00%",
        "CET Percentile: 91.22%",
      ]
    },
    {
      institution: "R. C. Patel Institute of Technology, Shirpur",
      degree: "Bachelor of Technology - Computer Engineering",
      period: "2023-2027",
      icon: <FiAward className="text-xl" />,
      highlights: [
        "Specializing in Full Stack Development",
        "Rank 3 in Encrypt-Mania Competition",
        "CGPA: 7.14/10 (Current)",
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      },
    },
  };

  return (
    <section
      id="qualification"
      className="relative py-28 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 text-white overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-conic from-indigo-900/20 via-purple-900/20 to-violet-900/20"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Academic Timeline
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            My educational journey through the years
          </motion.p>
        </motion.div>

        {/* Timeline Track */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500/30 via-purple-500/30 to-indigo-500/30 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className={`absolute top-8 w-6 h-6 rounded-full border-4 border-white ${index === 0 ? 'bg-purple-500' : 'bg-indigo-500'} left-1/2 transform -translate-x-1/2 z-10`}></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="bg-gradient-to-br from-white/10 to-white/15 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg">
                        {qual.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{qual.institution.split(',')[0]}</h3>
                        <p className="text-purple-300">{qual.degree}</p>
                        <div className="flex items-center gap-2 text-white/70 mt-2">
                          <FiCalendar className="text-blue-300" />
                          <span>{qual.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 pl-2">
                      {qual.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/90">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View more button */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#achievements"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Academic Achievements</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Qualifications;