import ThemeSlider from "./Components/ThemeSlider";
import { useTheme } from "./Components/ThemeContext";
import { projects } from "./Components/Constants";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { themeStyles } = useTheme();
  const [showMore, setShowMore] = useState(false);
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center md:text-left">Hi, I'm Ishaan Lotlikar 👨‍💻</h1>
              <p className="text-md sm:text-lg md:text-lg max-w-md text-center md:text-left">I’m a passionate <span className="font-semibold">Software Engineer</span>{" "} having more than 2 yrs of experience in software development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a href="#projects" className={`${themeStyles.bodyBg} ${themeStyles.text} px-4 sm:px-6 py-2 rounded-lg shadow hover:text-white hover:bg-gray-800 transition text-center`}>
                  View Projects
                </a>
                <a href="/Ishaan_Resume.pdf" target="_blank" rel="noopener noreferrer" className={`${themeStyles.bodyBg} ${themeStyles.navText} px-4 sm:px-6 py-2 rounded-lg shadow hover:text-white hover:bg-gray-800 transition text-center`}>View My Resume
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
        <section id="about" className="py-20 flex flex-col items-center px-6 mb-20">
          <div className="max-w-3xl w-full">
            {/* Header */}
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
              About me
            </p>
            <h2 className="text-3xl font-medium mb-5">
              Building things that work, end to end.
            </h2>

            <p className="text-sm md:text-base leading-relaxed mb-10">
              I'm a Software Engineer with 2+ years of experience in full-stack development.
              I design and build scalable applications from database schema to user interface —
              focusing on clean code, solid APIs, and interfaces people actually enjoy using.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full mb-10">
              {[
                { num: "2+", label: "Years of experience" },
                { num: "5+", label: "Technologies" },
                { num: "Full", label: "Stack coverage" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="rounded-lg p-4 text-center border"
                >
                  <p className="text-2xl font-semibold">{num}</p>
                  <p className="text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Currently learning */}
            <div className="w-full border-l-4 rounded-lg p-4 flex gap-4 items-start text-left border">
              <div className="w-9 h-9 min-w-[36px] rounded-md flex items-center justify-center">
                <div className="w-9 h-9 min-w-[36px] rounded-md bg-amber-100 flex items-center justify-center">
                  {themeStyles.bodyBg === "bg-zinc-50" || themeStyles.bodyBg === "bg-zinc-300" ? (
                    <SunIcon className="w-4 h-4 text-amber-600" />
                  ) : (
                    <MoonIcon className="w-4 h-4 text-amber-600" />
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-1">
                  Currently learning — AI & Machine Learning
                </p>
                <p className="text-sm leading-relaxed">
                  Exploring ML fundamentals, model training, and how to integrate AI
                  capabilities into real-world applications.
                </p>
              </div>
            </div>

          </div>
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
              <img src={ themeStyles.bodyBg === "bg-zinc-900" || themeStyles.bodyBg === "bg-zinc-700"  ? "/logos/icons8-express-js-64.png" : "/logos/icons8-express-js-48.png"} alt="Tailwind CSS" className="w-12 h-12 mb-2" />
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
              <img src={ themeStyles.bodyBg === "bg-zinc-50" || themeStyles.bodyBg === "bg-zinc-300"  ? "/logos/icons8-python-50.png" : "/logos/icons8-python-48.png"} alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">Python</span>
            </div>
            <div className={`p-4 ${themeStyles.bodyBg} rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl flex flex-col items-center`}>
              <img src="/logos/FastAPI.png" alt="Tailwind CSS" className="w-12 h-12 mb-2" />
              <span className="font-semibold">FastAPI</span>
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
        <section id="projects" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">Work</p>
            <h2 className="text-3xl font-medium mb-1">Projects I have worked on</h2>
            <p className="text-sm text-muted-foreground mb-10">A mix of professional builds and side projects.</p>

            <div className="grid md:grid-cols-3 gap-4">
              {projects.map((p) => (
                <div
                  key={p.name}
                  className={`border rounded-xl p-5 flex flex-col ${themeStyles.navBg}`}
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center`}>
                      {/* swap in your icon per project */}
                      <span className="text-sm">✦</span>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${p.badgeClass}`}>
                      {p.badge}
                    </span>
                  </div>

                  <p className="text-base font-medium mb-1">{p.name}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>

                  {p.role.length > 0 && (
                    <>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                        My role
                      </p>
                      <ul className="mb-4 space-y-1">
                        {p.role.map((r) => (
                          <li key={r} className="text-xs text-muted-foreground pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-muted-foreground/50">
                            {r}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <hr className="border-border my-3" />

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.stack.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                    {p.link && (
                    <div className="flex justify-start">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-muted border border-border hover:opacity-80 transition"
                      >
                        <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                        Live site
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* <div className="mt-10 text-center">
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-sm font-medium px-6 py-2.5 rounded-lg border border-border hover:bg-muted transition"
              >
                {showMore ? "Show less" : "View more projects"}
              </button>
            </div> */}
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
