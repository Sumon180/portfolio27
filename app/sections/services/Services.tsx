import Link from "next/link";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/Reveal";
import "./services.css";

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Section Heading */}
        <Reveal className="section-header">
          <span className="section-subtitle">
            <span className="subtitle-line"></span>
            WHAT I OFFER
          </span>

          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>

          <p className="section-description">
            I create modern, user-friendly digital experiences that help
            businesses build their online presence and grow.
          </p>
        </Reveal>

        {/* Services Grid */}
        <div className="services-grid">
          {/* Service 01 */}
          <Reveal className="service-card">
            <div className="service-card-top">
              <span className="service-number">01</span>
              <span className="service-icon">
                <Icon icon="solar:code-square-bold-duotone" />
              </span>
            </div>

            <div className="service-card-content">
              <span className="service-category">FULL-STACK DEVELOPMENT</span>
              <h3>End-to-End Full-Stack Web Application Development</h3>

              <p>
                Building complete, modern, and scalable web applications from
                intuitive frontend interfaces to powerful backend systems.
                Delivering secure APIs, efficient database solutions, and
                seamless functionality tailored to your business requirements.
              </p>

              <ul className="service-features">
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Modern & Responsive Frontend Development
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Custom Full-Stack Development
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Database Architecture & Integration
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Secure Authentication & Authorization
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Full-Stack Performance & Scalability
                </li>
              </ul>
            </div>

            <Link href="#contact" className="service-link">
              Discuss Your Project
              <Icon icon="solar:arrow-right-linear" />
            </Link>
            <span className="service-card-glow"></span>
          </Reveal>

          {/* Service 02 */}
          <Reveal className="service-card">
            <div className="service-card-top">
              <span className="service-number">02</span>
              <span className="service-icon cyan">
                <Icon icon="solar:palette-bold-duotone" />
              </span>
            </div>
            <div className="service-card-content">
              <span className="service-category">FRONTEND DEVELOPMENT</span>
              <h3>Custom Website & Landing Page Development</h3>

              <p>
                Creating visually stunning, responsive, and user-friendly
                websites with modern frontend technologies, smooth interactions,
                and pixel-perfect designs that deliver engaging user
                experiences.
              </p>

              <ul className="service-features">
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Modern & Responsive UI Design
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  React & Next.js Development
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Custom Landing Pages & Websites
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Smooth Animations & Interactions
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  SEO & Performance Optimization
                </li>
              </ul>
            </div>
            <Link href="#contact" className="service-link">
              Discuss Your Project
              <Icon icon="solar:arrow-right-linear" />
            </Link>
            <span className="service-card-glow"></span>
          </Reveal>

          {/* Service 03 */}
          <Reveal className="service-card">
            <div className="service-card-top">
              <span className="service-number">03</span>
              <span className="service-icon cyan">
                <Icon icon="solar:server-square-bold-duotone" />
              </span>
            </div>

            <div className="service-card-content">
              <span className="service-category">BACKEND DEVELOPMENT</span>
              <h3>Backend Development & API Integration</h3>

              <p>
                Developing secure, scalable, and high-performance backend
                systems with robust APIs, efficient database management, and
                reliable server-side architecture to power modern web
                applications.
              </p>

              <ul className="service-features">
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Node.js & Express.js Development
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  REST API Development & Integration
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Database Design & Management
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Authentication & Authorization
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Security & Performance Optimization
                </li>
              </ul>
            </div>

            <Link href="#contact" className="service-link">
              Discuss Your Project
              <Icon icon="solar:arrow-right-linear" />
            </Link>

            <span className="service-card-glow"></span>
          </Reveal>
        </div>

        {/* Bottom CTA */}
        <Reveal className="services-cta">
          <div className="services-cta-content">
            <span className="services-cta-label">
              <span className="availability-dot"></span>
              LET&apos;S WORK TOGETHER
            </span>

            <h3>Have an idea? Let&apos;s build something amazing.</h3>

            <p>
              Tell me about your project, and let&apos;s turn your idea into a
              powerful digital experience.
            </p>
          </div>

          <Link href="#contact" className="services-cta-btn">
            Start a Project
            <Icon icon="solar:arrow-up-right-linear" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
