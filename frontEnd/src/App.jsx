import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Lightbulb,
  Atom,
  Globe,
  Award,
  ExternalLink,
  Code,
  Menu,
  X,
} from "lucide-react";

// 🖼️ Assets
import profile from "./assets/profile.png";
import buyMinute from "./assets/buyMinute.png";
import Learning_Management from "./assets/Learning_Management.png";
import social_media from "./assets/social_media.png";
import DentistApp from "./assets/DentistApp.png";
import Bank from "./assets/Bank.png";
import converter from "./assets/Converter.png";
import player from "./assets/Player.png";
import cert_1 from "./assets/cert_1.png";
import cert_2 from "./assets/cert_2.png";
import cert_3 from "./assets/cert_3.png";
import cert_4 from "./assets/cert_4.png";
import City_Sky_Line_By_HTML_AND_CSS from "./assets/City_Sky_Line_By_HTML_AND_CSS.png";
import Palindrom_checker from "./assets/Palindrom_checker.png";
import Roman_To_Arabic_Number_Converter from "./assets/Roman_To_Arabic_Number_Converter.png";
import Wheel_by_html_and_css from "./assets/Wheel_by_html_and_css.png";

// Placeholder images for new projects
const InventorySystem = "https://via.placeholder.com/400x250?text=Inventory+System";
const RealTimeBingoGame = "https://via.placeholder.com/400x250?text=Real-Time+Bingo+Game";

// 🧾 Data
const certifications = [cert_1, cert_2, cert_3, cert_4];

const fullstackProjects = [
  {
    title: "BuyMinute E-commerce",
    description:
      "Fullstack MERN e-commerce platform with Stripe, JWT, Clerk, and MongoDB for secure transactions.",
    image: buyMinute,
    link: "https://buyminuteusersite.onrender.com",
    adminLink: "https://buyminuteadminsite.onrender.com",
    github: "https://github.com/Eyueal191/BuyMinute",
  },
  {
    title: "Bocher Social Media App",
    description: "Fullstack social application (MERN/Next.js) – Coming Soon",
    image: social_media,
  },
  {
    title: "Memar Learning Management",
    description: "Comprehensive Learning Management System – Coming Soon",
    image: Learning_Management,
  },
  {
    title: "AI-Dentist Assistant",
    description: "AI-powered dental assistant tool with image processing – Coming Soon",
    image: DentistApp,
  },
  {
    title: "Modern Banking App",
    description: "Sleek and modern banking dashboard interface – Coming Soon",
    image: Bank,
  },
  {
    title: "Inventory System",
    description: "Fullstack inventory management system using MERN stack and JWT authentication.",
    image: InventorySystem,
    link: "https://stockmate-2-inventory-system.onrender.com",
    github: "https://github.com/Eyueal191/InventorySystem",
  },
  {
    title: "Real-Time Bingo Game",
    description: "Interactive real-time bingo game with Node.js, Socket.IO, and React frontend.",
    image: RealTimeBingoGame,
    link: "https://bingoarenagame-gapk.onrender.com",
    github: "https://github.com/Eyueal191/RealTimeBingoGame",
  },
];

const reactMiniProjects = [
  {
    title: "Real-Time Currency Converter",
    description: "React + API-based converter using `useEffect` and `fetch` for live rates.",
    image: converter,
    link: "https://minzr.onrender.com",
    github: "https://github.com/Eyueal191/Currency_Converter",
  },
  {
    title: "Custom Music Player",
    description: "React-based audio player with custom controls and playlist management.",
    image: player,
    link: "https://zema.onrender.com",
    github: "https://github.com/Eyueal191/Zema_Music_Player",
  },
];

const htmlCssMiniProjects = [
  {
    title: "Roman To Arabic Number Converter",
    description: "Pure JavaScript/HTML/CSS project implemented on CodePen.",
    image: Roman_To_Arabic_Number_Converter,
    link: "https://codepen.io/Eyueal-Ayalew-the-sasster/full/ZYQZgmN",
  },
  {
    title: "Stylized City Sky Line",
    description: "Animated city skyline built purely with HTML and CSS.",
    image: City_Sky_Line_By_HTML_AND_CSS,
    link: "https://codepen.io/Eyueal-Ayalew-the-sasster/full/wBMZVeP",
  },
  {
    title: "Palindrom Checker Tool",
    description: "Simple validator to check if a word or phrase is palindrome.",
    image: Palindrom_checker,
    link: "https://codepen.io/Eyueal-Ayalew-the-sasster/full/YPwMmvN",
  },
  {
    title: "Spinning Wheel Animation",
    description: "Advanced wheel animation using HTML & CSS transformations.",
    image: Wheel_by_html_and_css,
    link: "https://codepen.io/Eyueal-Ayalew-the-sasster/full/qEbwexO",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

/** Project Card Component */
const ProjectCard = ({ project }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="bg-gray-800 rounded-xl shadow-xl hover:shadow-red-600/50 transition-transform duration-500 flex flex-col overflow-hidden"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
    />
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-red-500 font-semibold hover:text-red-600"
        >
          <ExternalLink className="w-4 h-4" /> View Main Site
        </a>
      )}
      {project.adminLink && (
        <a
          href={project.adminLink}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-500"
        >
          <ExternalLink className="w-4 h-4" /> View Admin Site
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-gray-300 font-semibold hover:text-gray-100"
        >
          <Code className="w-4 h-4" /> View GitHub
        </a>
      )}
    </div>
  </motion.div>
);

/** Section Component */
const Section = ({ title, Icon, projects }) => (
  <section id="projects" className="max-w-7xl mx-auto p-8 mt-16">
    <motion.h2
      className="text-3xl font-extrabold text-white mb-8 flex items-center gap-3 border-l-4 border-red-500 pl-4"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {Icon && <Icon className="w-6 h-6 text-white" />}
      {title}
    </motion.h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  </section>
);

/** Bio Section */
const BioSection = () => (
  <section id="about" className="max-w-4xl mx-auto p-8 text-center mt-16">
    <motion.h2
      className="text-4xl font-extrabold text-white mb-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      About Me
    </motion.h2>
    <motion.p
      className="text-lg text-gray-300 leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      I am a passionate <span className="text-red-500 font-semibold">Full-Stack Web Developer</span> and an <span className="text-yellow-400 font-semibold">ALX Africa Software Engineering Graduate</span>.  
      Skilled in React, TypeScript, Node.js, Express.js, MongoDB, and modern tools like Stripe, Clerk, and Cloudinary.
    </motion.p>
  </section>
);

/** Skills Section */
const SkillsSection = () => {
  const knownSkills = [
    "React",
    "TypeScript",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "JWT Authentication",
    "Clerk OAuth2",
    "Stripe",
    "Cloudinary",
    "ImageKit",
  ];

  const learningSkills = ["Next.js", "NestJS", "AWS Fundamentals"];

  return (
    <section id="skills" className="max-w-7xl mx-auto p-8 mt-16">
      <motion.h2
        className="text-3xl font-extrabold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {knownSkills.map((skill) => (
          <motion.div
            key={skill}
            className="bg-gray-800 text-white rounded-xl p-3 text-center font-semibold shadow hover:shadow-red-500/50 transition transform hover:-translate-y-1 hover:scale-105"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}

        {learningSkills.map((skill) => (
          <motion.div
            key={skill}
            className="bg-gray-800 text-yellow-400 rounded-xl p-3 text-center italic font-semibold shadow hover:shadow-yellow-500/50 transition transform hover:-translate-y-1 hover:scale-105 opacity-80"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {skill} (Learning)
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/** Navbar */
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-900/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <span className="text-3xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
          Portfolio
        </span>

        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          <li><a href="#about" className="hover:text-red-500 transition">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-red-500 transition">Projects</a></li>
          <li><a href="#certifications" className="hover:text-yellow-400 transition">Certifications</a></li>
          <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>
        </ul>

        <button className="md:hidden text-white hover:text-red-500 transition" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-neutral-800 flex flex-col items-center gap-6 py-6 border-t border-gray-700"
        >
          {["About", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-lg font-semibold text-white hover:text-red-500 transition"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

/** Main App */
const App = () => {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-neutral-950 text-white font-sans scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <header className="relative max-w-7xl mx-auto p-10 pt-32 flex flex-col items-center text-center">
        <motion.img
          src={profile}
          alt="Eyueal Ayalew"
          className="w-44 h-44 md:w-60 md:h-60 rounded-full object-cover border-4 border-white shadow-2xl mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 bg-clip-text text-transparent drop-shadow-xl mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Eyueal Ayalew
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-200 font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Full-Stack Web Developer
        </motion.p>
        <motion.button
          onClick={scrollToProjects}
          className="mt-4 px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          View My Projects
        </motion.button>
      </header>

      {/* Bio + Skills Sections */}
      <BioSection />
      <SkillsSection />

      {/* Projects Sections */}
      <Section title="Fullstack Projects" Icon={Lightbulb} projects={fullstackProjects} />
      <Section title="React Mini Projects" Icon={Atom} projects={reactMiniProjects} />
      <Section title="Core Web Development" Icon={Globe} projects={htmlCssMiniProjects} />

      {/* Certifications */}
      <section id="certifications" className="max-w-7xl mx-auto p-8 mt-16">
        <h2 className="text-3xl font-extrabold text-white mb-8 flex items-center gap-3 border-l-4 border-yellow-500 pl-4">
          <Award className="w-6 h-6 text-yellow-500" /> Key Certifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.img
              key={idx}
              src={cert}
              alt={`Cert ${idx + 1}`}
              className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 mt-20 p-8 text-center text-gray-300 w-full">
        <h4 className="text-xl font-bold text-white mb-3">Get In Touch</h4>
        <p className="mb-2">Let's connect and build something amazing:</p>
        <p className="mb-4 text-white font-semibold">📧 eyuealayalew191@gmail.com | 📞 0909040610</p>
        <div className="flex justify-center gap-6 text-2xl mb-4">
          <a href="https://www.linkedin.com/in/eyueal-ayalew" target="_blank" rel="noreferrer" className="text-white hover:text-blue-500"><Linkedin className="w-7 h-7" /></a>
          <a href="https://github.com/Eyueal191" target="_blank" rel="noreferrer" className="text-white hover:text-gray-300"><Github className="w-7 h-7" /></a>
        </div>
        <p className="text-sm border-t border-gray-600 pt-4 mt-4">
          <Code className="w-4 h-4 inline mr-1 text-blue-500" /> Built with React, Tailwind & Framer Motion.
        </p>
        <p className="text-xs mt-1">© {new Date().getFullYear()} Eyueal Ayalew. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
