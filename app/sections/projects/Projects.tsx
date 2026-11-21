import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "./projects.css";
import Reveal from "@/app/components/Reveal";

const projects = [
  {
    id: 1,
    type: "Web Development",
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website featuring smooth animations, interactive elements, and a clean user interface.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Analytics dashboard project preview",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/your-username/portfolio",
  },
  {
    id: 2,
    type: "Frontend Development",
    title: "E-commerce Dashboard",
    description:
      "A sleek dashboard interface with product management, interactive components, and a responsive layout.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Business website project preview",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/your-username/ecommerce-dashboard",
  },
  {
    id: 3,
    type: "Full-Stack Development",
    title: "Firebase Web Application",
    description:
      "A dynamic web application with user authentication, database integration, and a smooth user experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Firebase web application preview",
    technologies: ["JavaScript", "Firebase", "CSS"],
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/your-username/firebase-app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Heading */}
        <Reveal className="section-header">
          <span className="section-subtitle">
            <Icon icon="fa6-solid:code" />
            MY RECENT WORK
          </span>

          <h2 className="section-title">
            Featured <span className="gradient-text">Latest</span> Projects
          </h2>

          <p className="section-description">
            A selection of projects that showcase my skills, creativity, and
            passion for building modern web experiences.
          </p>
        </Reveal>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <Reveal className="project-card" key={project.id}>
              {/* Project Image */}
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1000}
                  height={650}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="project-image-overlay">
                  <span>
                    {String(project.id).padStart(2, "0")} / Featured Project
                  </span>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Preview ${project.title}`}
                  >
                    <Icon icon="mdi:open-in-new" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-type">{project.type}</span>

                  <span className="project-number">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {/* Project Actions */}
                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    className="project-btn project-btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <Icon icon="mdi:open-in-new" />
                  </a>

                  <a
                    href={project.githubUrl}
                    className="project-btn project-btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="mdi:github" />
                    GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Projects Footer */}
        <Reveal className="projects-footer">
          <p>Have a project idea in mind?</p>

          <Link href="#contact" className="projects-more-link">
            Let&apos;s work together
            <Icon icon="fa6-solid:arrow-right" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
