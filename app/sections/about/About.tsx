import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/Reveal";
import "./about.css";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-container">
        {/* SECTION HEADER */}
        <Reveal>
          <div className="about-header">
            <span className="section-subtitle">
              <span className="subtitle-line"></span>
              GET TO KNOW ME
            </span>

            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>

            <p className="section-heading-description">
              A little introduction about who I am and what I love to create.
            </p>
          </div>
        </Reveal>

        <div className="about-content">
          {/* LEFT SIDE: IMAGE */}
          <Reveal className="about-visual">
            <div className="about-image-glow"></div>

            <div className="about-image-wrapper">
              <div className="about-image-border"></div>

              <Image
                src="/images/profile.png"
                alt="Sumon Hossain - Web Developer"
                className="about-profile-image"
                width={600}
                height={700}
                priority={false}
              />
            </div>

            {/* EXPERIENCE CARD */}
            <div className="about-experience-card">
              <div className="experience-icon">
                <Icon icon="solar:code-square-bold" />
              </div>

              <div>
                <strong>Creative Developer</strong>
                <span>Turning ideas into reality</span>
              </div>
            </div>

            {/* DECORATIVE ELEMENTS */}
            <div className="about-decoration decoration-one"></div>
            <div className="about-decoration decoration-two"></div>
          </Reveal>

          {/* RIGHT SIDE: CONTENT */}
          <Reveal className="about-info">
            <span className="about-greeting">HELLO THERE!</span>

            <h3>
              I'm <span className="gradient-text">Sumon Hossain</span>
            </h3>

            <h4>Creative Web Developer & Digital Problem Solver</h4>

            <p>
              I'm a passionate web developer who loves transforming creative
              ideas into beautiful, functional and user-friendly digital
              experiences.
            </p>

            <p>
              I specialize in building modern, responsive websites using HTML,
              CSS, JavaScript and React. I also explore Firebase and Solidity to
              expand my development capabilities.
            </p>

            <p>
              My goal is simple: create digital products that not only look
              amazing but also deliver meaningful experiences, excellent
              performance and real value.
            </p>

            {/* PERSONAL DETAILS */}
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name</span>
                <strong>Sumon Hossain</strong>
              </div>

              <div className="detail-item">
                <span className="detail-label">Profession</span>
                <strong>Web Developer</strong>
              </div>

              <div className="detail-item">
                <span className="detail-label">Location</span>
                <strong>Bangladesh</strong>
              </div>

              <div className="detail-item">
                <span className="detail-label">Availability</span>
                <strong className="available-text">
                  <span></span> Open to Work
                </strong>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="about-actions">
              <Link href="#contact" className="about-btn about-primary-btn">
                Let's Work Together
                <Icon icon="solar:arrow-up-right-bold" />
              </Link>

              <a
                href="/resume.pdf"
                className="about-btn about-outline-btn"
                download
              >
                Download CV
                <Icon icon="solar:download-bold" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* STATISTICS */}
        <Reveal className="about-stats">
          {/* PROJECTS BUILT */}
          <div className="stat-card">
            <div className="stat-icon">
              <Icon icon="solar:code-bold" />
            </div>

            <h3>
              <span className="counter" data-target="10">
                0
              </span>
              <span>+</span>
            </h3>

            <p>Projects Built</p>
          </div>

          {/* TECHNOLOGIES */}
          <div className="stat-card">
            <div className="stat-icon">
              <Icon icon="solar:layers-bold" />
            </div>

            <h3>
              <span className="counter" data-target="6">
                0
              </span>
              <span>+</span>
            </h3>

            <p>Technologies</p>
          </div>

          {/* COMMITMENT */}
          <div className="stat-card">
            <div className="stat-icon">
              <Icon icon="solar:users-group-rounded-bold" />
            </div>

            <h3>
              <span className="counter" data-target="100">
                0
              </span>
              <span>%</span>
            </h3>

            <p>Commitment</p>
          </div>

          {/* PASSION */}
          <div className="stat-card">
            <div className="stat-icon">
              <Icon icon="solar:heart-bold" />
            </div>

            <h3>
              <span className="counter" data-target="100">
                0
              </span>
              <span>%</span>
            </h3>

            <p>Passion for Coding</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
