import React, { useEffect, useState } from 'react';

const sections = ['home', 'about', 'projects', 'skills', 'contact'];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial trigger
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-purple-900/80 via-indigo-800/80 to-pink-800/80 backdrop-blur-md shadow-md fixed top-0 w-full z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
          Yash Chaudhari
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex space-x-6 font-medium text-white/80 lg:flex-row ${
            isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-gradient-to-r from-purple-900 via-indigo-800 to-pink-800 p-6' : 'hidden'
          }`}
        >
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`transition hover:text-white ${
                  activeSection === section
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 font-semibold'
                    : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
