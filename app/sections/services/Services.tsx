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
              <span className="service-category">WEB DEVELOPMENT</span>
              <h3>Custom Website Development</h3>

              <p>
                Modern, responsive, and high-performance websites tailored to
                your brand, business goals, and audience.
              </p>

              <ul className="service-features">
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Responsive Design
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Clean &amp; Maintainable Code
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Performance Optimization
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
              <h3>Frontend UI Development</h3>

              <p>
                Interactive and polished user interfaces built with modern
                frontend technologies and attention to detail.
              </p>

              <ul className="service-features">
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  HTML, CSS &amp; JavaScript
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  React Interfaces
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Smooth UI Interactions
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
              <h3>Backend Development</h3>

              <p>
                Secure, scalable, and efficient backend solutions that power
                your applications with reliable APIs, databases, and server-side
                logic.
              </p>

              <ul className="service-features">
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Server-Side Development
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  REST API Development
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Firebase &amp; Database Integration
                </li>
                <li>
                  <Icon icon="solar:check-circle-bold" />
                  Authentication &amp; Security
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
