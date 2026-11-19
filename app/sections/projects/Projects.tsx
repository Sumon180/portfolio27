import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "./projects.css";
import Reveal from "@/app/components/Reveal";

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
          {/* Project 01 */}
          <Reveal className="project-card">
            <div className="project-image">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85"
                alt="Analytics dashboard project preview"
                width={1000}
                height={650}
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="project-image-overlay">
                <span>01 / Featured Project</span>
                <a
                  href="https://your-live-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Preview portfolio project"
                >
                  <Icon icon="mdi:open-in-new" />
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span className="project-type">Web Development</span>
                <span className="project-number">01</span>
              </div>

              <h3>Personal Portfolio Website</h3>

              <p>
                A modern, responsive portfolio website featuring smooth
                animations, interactive elements, and a clean user interface.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-actions">
                <a
                  href="https://your-live-demo.com"
                  className="project-btn project-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <Icon icon="mdi:open-in-new" />
                </a>

                <a
                  href="https://github.com/your-username/portfolio"
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

          {/* Project 02 */}
          <Reveal className="project-card">
            <div className="project-image">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85"
                alt="Business website project preview"
                width={1000}
                height={650}
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="project-image-overlay">
                <span>02 / Featured Project</span>
                <a
                  href="https://your-live-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Preview e-commerce project"
                >
                  <Icon icon="mdi:open-in-new" />
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span className="project-type">Frontend Development</span>
                <span className="project-number">02</span>
              </div>

              <h3>E-commerce Dashboard</h3>

              <p>
                A sleek dashboard interface with product management, interactive
                components, and a responsive layout.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-actions">
                <a
                  href="https://your-live-demo.com"
                  className="project-btn project-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <Icon icon="mdi:open-in-new" />
                </a>

                <a
                  href="https://github.com/your-username/ecommerce-dashboard"
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

          {/* Project 03 */}
          <Reveal className="project-card">
            <div className="project-image">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
                alt="Firebase web application preview"
                width={1000}
                height={650}
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="project-image-overlay">
                <span>03 / Featured Project</span>
                <a
                  href="https://your-live-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Preview Firebase project"
                >
                  <Icon icon="mdi:open-in-new" />
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span className="project-type">Full-Stack Development</span>
                <span className="project-number">03</span>
              </div>

              <h3>Firebase Web Application</h3>

              <p>
                A dynamic web application with user authentication, database
                integration, and a smooth user experience.
              </p>

              <div className="project-tags">
                <span>JavaScript</span>
                <span>Firebase</span>
                <span>CSS</span>
              </div>

              <div className="project-actions">
                <a
                  href="https://your-live-demo.com"
                  className="project-btn project-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <Icon icon="mdi:open-in-new" />
                </a>

                <a
                  href="https://github.com/your-username/firebase-app"
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
