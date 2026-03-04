import React, { useState } from "react";
import { motion } from "framer-motion";
import {
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

/* Assets */
import buyMinute from "./assets/buyMinute.png";
import converter from "./assets/Converter.png";
import player from "./assets/Player.png";
import cert_1 from "./assets/cert_1.png";
import cert_2 from "./assets/cert_2.png";
import cert_3 from "./assets/cert_3.png";
import cert_4 from "./assets/cert_4.png";

/* Certifications */
const certifications = [cert_1, cert_2, cert_3, cert_4];

/* ---------------- PROJECT DATA ---------------- */

const InventorySystem =
  "https://via.placeholder.com/400x250?text=Inventory+System";

const RealTimeBingoGame =
  "https://via.placeholder.com/400x250?text=Real-Time+Bingo+Game";

const fullstackProjects = [
  {
    title: "BuyMinute E-commerce",
    description:
      "Fullstack MERN e-commerce platform with Stripe, JWT, Clerk and MongoDB.",
    image: buyMinute,
    link: "https://buyminuteusersite.onrender.com",
    adminLink: "https://buyminuteadminsite.onrender.com",
    github: "https://github.com/Eyueal191/BuyMinute",
  },

  {
    title: "Inventory Management System",
    description:
      "Fullstack inventory system using MERN stack authentication.",
    image: InventorySystem,
    link: "https://stockmate-2-inventory-system.onrender.com",
    github: "https://github.com/Eyueal191/InventorySystem",
  },

  {
    title: "Real-Time Bingo Game",
    description:
      "Multiplayer real-time bingo game using Socket.IO and React frontend.",
    image: RealTimeBingoGame,
    link: "https://bingoarenagame-gapk.onrender.com",
    github: "https://github.com/Eyueal191/RealTimeBingoGame",
  },
];

const reactMiniProjects = [
  {
    title: "Real-Time Currency Converter",
    description: "React API-based live currency converter.",
    image: converter,
    link: "https://minzr.onrender.com",
    github: "https://github.com/Eyueal191/Currency_Converter",
  },
  {
    title: "Custom Music Player",
    description: "React audio player with playlist control.",
    image: player,
    link: "https://zema.onrender.com",
    github: "https://github.com/Eyueal191/Zema_Music_Player",
  },
];

/* ---------------- SKILLS LIST ---------------- */

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "JWT Authentication",
  "Clerk OAuth2",
  "Stripe Integration",
  "Cloudinary",
  "Image Processing",
  "REST API Development",
  "Socket.IO",
  "Responsive Design",
];

/* ---------------- ANIMATION ---------------- */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

/* ---------------- PROJECT CARD ---------------- */

const ProjectCard = ({ project }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="bg-gray-800 rounded-xl shadow-xl hover:shadow-red-600/50 flex flex-col overflow-hidden"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-60 object-cover hover:scale-105 transition"
    />

    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>

      <p className="text-gray-300 text-sm mb-4 flex-grow">
        {project.description}
      </p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          className="text-red-500 flex items-center gap-2 hover:text-red-600"
        >
          <ExternalLink className="w-4 h-4" /> View Site
        </a>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          className="text-gray-300 flex items-center gap-2 mt-2 hover:text-gray-100"
        >
          <Code className="w-4 h-4" /> GitHub
        </a>
      )}
    </div>
  </motion.div>
);

/* ---------------- SECTION ---------------- */

const Section = ({ title, Icon, projects }) => (
  <section className="max-w-7xl mx-auto p-8 mt-16">
    <h2 className="text-3xl font-extrabold flex items-center gap-3 border-l-4 border-red-500 pl-4 mb-8">
      {Icon && <Icon />}
      {title}
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  </section>
);

/* ---------------- SKILLS SECTION ---------------- */

const SkillsSection = () => (
  <section className="max-w-7xl mx-auto p-8 mt-16">
    <h2 className="text-3xl font-extrabold border-l-4 border-yellow-500 pl-4 mb-6">
      Skills
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div
          key={skill}
          className="bg-gray-800 rounded-xl p-3 text-center font-semibold hover:scale-105 transition"
        >
          {skill}
        </div>
      ))}
    </div>
  </section>
);

/* ---------------- NAVBAR ---------------- */

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <h1 className="text-3xl font-bold text-red-500">Dagim</h1>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

/* ---------------- MAIN APP ---------------- */

const App = () => {
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <div className="bg-neutral-950 text-white min-h-screen">

      <Navbar />

      {/* Header */}
      <header className="text-center pt-40 pb-20">
        <h1 className="text-6xl font-extrabold text-red-500">
          Dagim
        </h1>

        <p className="text-xl text-gray-300 mt-4">
          Full-Stack Web Developer
        </p>

        <button
          onClick={scrollToProjects}
          className="mt-8 px-6 py-3 bg-red-500 rounded-full hover:bg-red-600 transition"
        >
          View Projects
        </button>
      </header>

      {/* Skills */}
      <SkillsSection />

      {/* Projects */}
      <div id="projects">
        <Section
          title="Fullstack Projects"
          Icon={Lightbulb}
          projects={fullstackProjects}
        />

        <Section
          title="Mini Projects"
          Icon={Atom}
          projects={reactMiniProjects}
        />
      </div>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto p-8 mt-20">
        <h2 className="text-3xl font-bold border-l-4 border-yellow-500 pl-4 mb-8 flex items-center gap-3">
          <Award /> Certifications
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <img
              key={i}
              src={cert}
              className="rounded-xl hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800 mt-20">
        © {new Date().getFullYear()} Dagim. All rights reserved.
      </footer>

    </div>
  );
};

export default App;