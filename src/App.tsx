import ThemeSlider from "./Components/ThemeSlider";
import { useTheme } from "./Components/ThemeContext";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";



export default function App() {
  const [isOpen, setIsOpen] = useState(false);
   const { themeStyles } = useTheme();
  return (
    <div>
      <nav className={`${themeStyles.navBg} ${themeStyles.navText} w-full fixed top-0 left-0 shadow-md z-50`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 relative">
          <div className="text-xl font-bold">Ishaan Lotlikar</div>
            <div className="hidden md:flex space-x-10">
                <a href="#home" className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded">Home</a>
                <a href="#about" className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded">About</a>
                <a href="#skills" className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded">Skills</a>
                <a href="#projects" className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded">Projects</a>
                <a href="#contact" className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded">Contact</a>
             </div>
            <div className="flex items-center space-x-4 md:space-x-0">
              <ThemeSlider />
              <button className="md:hidden focus:outline-none z-50" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-900 text-white w-full flex flex-col items-center space-y-2 py-4 absolute top-full left-0 z-40">
            <a href="#home" className="w-full text-center py-2 hover:bg-gray-800">Home</a>
            <a href="#about" className="w-full text-center py-2 hover:bg-gray-800">About</a>
            <a href="#skills" className="w-full text-center py-2 hover:bg-gray-800">Skills</a>
            <a href="#projects" className="w-full text-center py-2 hover:bg-gray-800">Projects</a>
            <a href="#contact" className="w-full text-center py-2 hover:bg-gray-800">Contact</a>
          </div>
        )}
      </nav>
      <div className="pt-24">
        <section id="home" className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 md:py-30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
            <div className={`${themeStyles.navBg} text-black rounded-2xl flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 shadow-lg ${themeStyles.navText}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center md:text-left">Hi, I'm Ishaan Lotlikar👋</h1>
              <p className="text-md sm:text-lg md:text-lg max-w-md text-center md:text-left">I’m a passionate <span className="font-semibold">Software Engineer</span>{" "} having 1.8 yrs of experience in software development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a href="#projects" className={`${themeStyles.bodyBg} ${themeStyles.text} px-4 sm:px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition text-center`}>
                  View Projects
                </a>
                <a href="/Ishaan_Resume.pdf" target="_blank" rel="noopener noreferrer" className={`${themeStyles.bodyBg} ${themeStyles.text} px-4 sm:px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition text-center`}>View My Resume
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mt-6 md:mt-0">
              <div className="group w-full h-36 sm:h-40 md:h-44 [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className={`absolute inset-0 flex items-center justify-center rounded-2xl shadow-lg text-xl sm:text-xl md:text-xl font-semibold ${themeStyles.navBg} ${themeStyles.text} [backface-visibility:hidden]`}>Currently
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-center rounded-2xl shadow-lg text-md sm:text-lg md:text-lg font-medium ${themeStyles.bodyBg} ${themeStyles.text} [transform:rotateY(180deg)] [backface-visibility:hidden]`}>working as a Software Engineer
                  </div>
                </div>
              </div>
              <div className="group w-full h-36 sm:h-40 md:h-44 [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className={`absolute inset-0 flex items-center justify-center rounded-2xl shadow-lg text-xl sm:text-xl md:text-xl font-semibold ${themeStyles.navBg} ${themeStyles.text} [backface-visibility:hidden]`}>Looking For
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-center rounded-2xl shadow-lg text-md sm:text-lg md:text-lg font-medium ${themeStyles.bodyBg} ${themeStyles.text} [transform:rotateY(180deg)] [backface-visibility:hidden]`}>opportunities to grow and contribute.
                  </div>
                </div>
              </div>
              <div className="group w-full h-36 sm:h-40 md:h-44 [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className={`absolute inset-0 flex items-center justify-center rounded-2xl shadow-lg text-xl sm:text-xl md:text-xl font-semibold ${themeStyles.navBg} ${themeStyles.text} [backface-visibility:hidden]`}>Better Opportunity
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-center rounded-2xl shadow-lg text-md sm:text-lg md:text-lg font-medium ${themeStyles.bodyBg} ${themeStyles.text} [transform:rotateY(180deg)] [backface-visibility:hidden]`}>to apply skills and learn more.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-50 flex flex-col items-center text-center px-6">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="max-w-2xl text-lg">I’m a Software Engineer with 1.8+ years of experience, specializing in Backend Development using CodeIgniter 4 and Laravel. I design and build scalable APIs while working closely with databases to ensure smooth and efficient data handling. Although UI isn’t my primary focus, I enjoy crafting clean and user-friendly solutions. Currently, I’m expanding my skillset by learning the MERN stack, exploring full-stack development, and staying up-to-date with modern technologies.🌟
          </p>
        </section>
        <section id="skills" className={`py-20 ${themeStyles.navBg} flex flex-col items-center px-6`}>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/tailwindcss-mark.d52e9897.svg" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">Tailwind CSS</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/icons8-javascript-48.png" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">JavaScript</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/icons8-typescript-48.png" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">TypeScript</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/React.png" alt="React" className="w-12 h-12 mb-2" />
              <span className="font-semibold">React.js</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/icons8-node-js-48.png" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">Next.js</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/icons8-express-js-48.png" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">Express</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/icons8-node-js-48.png" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">Node JS</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/icons8-php-logo-30.png" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">PHP</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/cilogo.gif" alt="CodeIgniter 4" className="w-12 h-12 mb-2" />
              <span className="font-semibold">CodeIgniter 4</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/icons8-laravel-48.png" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">Laravel</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/icons8-mysql-logo-50.png" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">MySQL</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/elephant64.png" alt="PostgreSQL" className="w-12 h-12 mb-2" />
              <span className="font-semibold">PostgreSQL</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/MongoDB_Logomark_ForestGreen.png" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">MongoDB</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/icons8-git-logo-48.png" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">Git</span>
            </div>
          </div>
        </section>
        <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">🚀 Projects I Have Worked On</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 border rounded-lg shadow hover:shadow-lg transition ${themeStyles.navBg}`}>
              <h3 className="text-xl font-bold mb-4">RoyCares</h3>
              <p className={`mb-4 text-700 ${themeStyles.text}`}>Lifestyle adjustment and recovery system that helps users progress through structured sections, complete self-assessments, and engage in therapy sessions. The platform provides personalized insights, guided video content for reflection, and supports psychiatrist-led recovery sessions.
              </p>
              <h4 className="font-semibold mb-2">My Role</h4>
              <ul className={`list-disc ml-6 mb-4 text-600 text-sm ${themeStyles.text}`}>
                <li>Designed and developed RESTful APIs using CodeIgniter 4 to support seamless backend functionality.</li>
                <li>Integrated PostgreSQL, optimizing database queries for efficient data storage and retrieval.</li>
                <li>Developed structured modules for user progress tracking, self-assessments, and therapy sessions.</li>
              </ul>
              <h4 className="font-semibold mb-2">Tech Stack</h4>
              <p className="mb-4 text-sm">PHP, CodeIgniter 4, PostgreSQL, Git</p>
              <a className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                More Details
              </a>
            </div>
            <div className={`p-6 border rounded-lg shadow hover:shadow-lg transition ${themeStyles.navBg}`}>
              <h3 className="text-xl font-bold mb-4">Logemanns</h3>
              <p className={`mb-4 text-700 ${themeStyles.text}`}>Redesigned and upgraded an interactive learning platform used for swallowing disorder assessment and training. Migrated the backend from CodeIgniter 2 to CodeIgniter 4, introducing a modern API-driven structure for improved data handling.
              </p>
              <h4 className="font-semibold mb-2">My Role</h4>
              <ul className={`list-disc ml-6 mb-4 text-600 text-sm ${themeStyles.text}`}>
                <li>Migrated the backend from CodeIgniter 2 to CodeIgniter 4, ensuring improved performance, security, and modernframework compatibility.</li>
                <li>Implemented JWT authentication for secure user access and session management, enhancing security over thelegacy system.</li>
                <li>Optimized database interactions by restructuring queries, reducing response time and improving performance</li>
              </ul>
              <h4 className="font-semibold mb-2">Tech Stack</h4>
              <p className="mb-4 text-sm">PHP, CodeIgniter 4, PostgreSQL, Git </p>
              <a className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">More Details</a>
            </div>
            <div className={`p-6 border rounded-lg shadow hover:shadow-lg transition ${themeStyles.navBg}`}>
              <h3 className="text-xl font-bold mb-4">Vehicle Rental Management System (Personal Project)</h3>
              <p className={`mb-4 text-700 ${themeStyles.text}`}>Vehicle Rental Management System has been developed to modernize the traditional approach to renting vehicles. In conventional systems, both renters and customers rely heavily on manual communication and offline processes. 
              </p>
              <h4 className="font-semibold mb-2">Tech Stack</h4>
              <p className="mb-4 text-sm">React, Tailwind CSS, CodeIgniter 4, MySQL</p>
              <a className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                More Details
              </a>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="/projects" className={`bg-800 ${themeStyles.navBg} ${themeStyles.text} px-6 py-3 rounded-lg hover:bg-gray-900 transition`}>View More →
            </a>
          </div>
        </section>
        <section id="contact" className={`py-20 ${themeStyles.navBg} flex flex-col items-center px-6`}>
          <p className={`${themeStyles.text} text-sm mb-2`}>Get in Touch</p>
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className={`flex flex-col md:flex-row items-center justify-center gap-6 px-8 py-4 border rounded-2xl shadow-md ${themeStyles.bodyBg}`}>
          <a href="mailto:ishaanlotlikar11@gmail.com" className="flex items-center gap-2 text-lg font-medium hover:text-blue-600 transition">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">✉️</span>ishaanlotlikar11@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/ishaan-lotlikar-54390b281/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-medium hover:text-blue-600 transition">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">in
          </span>
          LinkedIn
          </a>
        </div>
      </section>
      <footer className="mt-12 py-4 text-center text-sm text-gray-500 border-t">
        Copyright © {new Date().getFullYear()} Ishaan Lotlikar. All Rights Reserved.
      </footer>
    </div>
    </div>
  );
}
