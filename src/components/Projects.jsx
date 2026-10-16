import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "CartShare - Collaborative Shopping",
    description:
      "A real-time collaborative shopping cart application allowing users to share carts, add items together live, and streamline group shopping with instant synchronization.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/therajfaisal",
    live: "https://github.com/therajfaisal",
  },

  {
    id: "02",
    title: "CampusConnect - Student Community",
    description:
      "A modern campus platform enabling student collaboration, real-time event updates, course material sharing, and secure cloud authentication built with React and Firebase.",
    tech: [
      "React",
      "Firebase",
      "Firestore",
      "Tailwind CSS",
      "JavaScript",
    ],
    github: "https://github.com/therajfaisal",
    live: "https://github.com/therajfaisal",
  },

  {
    id: "03",
    title: "Spring Boot Microservices & REST API",
    description:
      "Robust backend service architecture featuring secure JWT-based authentication, relational schema management with PostgreSQL, and high-throughput RESTful endpoints.",
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "Docker",
    ],
    github: "https://github.com/therajfaisal",
    live: "https://github.com/therajfaisal",
  },

  {
    id: "04",
    title: "Algorithms & DSA Visualizer",
    description:
      "An interactive web platform visualizing complex Data Structures and Algorithms with step-by-step state animations, helping students understand algorithmic complexity intuitively.",
    tech: [
      "React",
      "JavaScript",
      "Data Structures",
      "Tailwind CSS",
      "GSAP",
    ],
    github: "https://github.com/therajfaisal",
    live: "https://github.com/therajfaisal",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">

     

      <div className="projects-top">

        <span className="tag">
          Featured Projects
        </span>

        <h2>
          Work that speaks
          <br />
          for itself
        </h2>

        <p>
          A selection of projects that showcase my expertise in full-stack
          development and modern architecture.
        </p>

      </div>

      <div className="project-list">

        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            <span className="project-label">
              ★ Flagship Project
            </span>

            <div className="project-heading">

              <h3>{project.id}</h3>

              <h1>{project.title}</h1>

            </div>

            <p className="description">
              {project.description}
            </p>

            <div className="tech-stack">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="buttons">

              <a href={project.github}>
                <FaGithub />
                GitHub
              </a>

              <a href={project.live}>
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
