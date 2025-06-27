export type Project = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  liveLink: string;
};

const projects: Project[] = [
  {
    title: "Resume ATS Score Checker",
    description:
      "A web app that checks resumes against ATS bots using parsing and matching techniques with modern React and Node.js stack.",
    techStack: ["React", "Node.js", "MongoDB", "TailwindCSS", "ML"],
    link: "https://github.com/your-github/resume-ats",
    liveLink: "https://www.lovelace.ai/projects/resume-ats",
  },
  {
    title: "Disease Consultant Bot",
    description:
      "An AI-powered chatbot that provides disease-related consultation using machine learning and real-time data scraping.",
    techStack: ["Python", "Flask", "MongoDB"],
    link: "https://github.com/your-github/disease-bot",
    liveLink: "https://www.lovelace.ai/projects/resume-ats",
  },
  {
    title: "Portfolio Website",
    description:
      "Portfolio website showcasing my projects, skills, and experience with a modern design and responsive layout.",
    techStack: ["React", "Vite", "TailwindCSS", "Typescript"],
    link: "https://github.com/yashchaudhari11/yashs-portfolio",
    liveLink: "https://yashs-portfolio-gules.vercel.app/",
  },
];

export default projects;