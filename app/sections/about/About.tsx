"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/Reveal";
import "./about.css";

const stats = [
  {
    id: "projects",
    icon: "solar:code-bold",
    target: 10,
    suffix: "+",
    label: "Projects Built",
  },
  {
    id: "technologies",
    icon: "solar:layers-bold",
    target: 15,
    suffix: "+",
    label: "Technologies",
  },
  {
    id: "commitment",
    icon: "solar:users-group-rounded-bold",
    target: 100,
    suffix: "%",
    label: "Commitment",
  },
  {
    id: "passion",
    icon: "solar:heart-bold",
    target: 100,
    suffix: "%",
    label: "Passion for Coding",
  },
];

const details = [
  { label: "Name", value: "Sumon Hossain" },
  { label: "Profession", value: "Full-Stack Web Developer" },
  { label: "Location", value: "Bangladesh" },
];

function Counter({
  target,
  suffix,
  start,
}: {
  target: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frameId: number;
    const duration = 1800;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [start, target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    const element = statsRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounters(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="about-container">
        {/* SECTION HEADER */}
        <Reveal>
          <div className="about-header">
            <span className="section-subtitle">
              <span className="subtitle-line" />
              GET TO KNOW ME
            </span>

            <h2 className="section-title">
              More About <span className="gradient-text">Me</span>
            </h2>

            <p className="section-heading-description">
              A little introduction about who I am and what I love to create.
            </p>
          </div>
        </Reveal>

        <div className="about-content">
          {/* LEFT SIDE: IMAGE */}
          <Reveal className="about-visual">
            <div className="about-image-glow" />

            <div className="about-image-wrapper">
              <div className="about-image-border" />

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
            <div className="about-decoration decoration-one" />
            <div className="about-decoration decoration-two" />
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
              I specialize in building modern, responsive web applications using
              React, Next.js, TypeScript and Node.js. I also work with databases
              and backend technologies to build complete solutions.
            </p>

            <p>
              My goal is simple: create digital products that not only look
              amazing but also deliver meaningful experiences, excellent
              performance and real value.
            </p>

            {/* PERSONAL DETAILS */}
            <div className="about-details">
              {details.map((detail) => (
                <div className="detail-item" key={detail.label}>
                  <span className="detail-label">{detail.label}</span>
                  <strong>{detail.value}</strong>
                </div>
              ))}

              <div className="detail-item">
                <span className="detail-label">Availability</span>
                <strong className="available-text">
                  <span />
                  Open to Work
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
          <div className="about-stats-grid" ref={statsRef}>
            {stats.map((stat) => (
              <div className="stat-card" key={stat.id}>
                <div className="stat-icon">
                  <Icon icon={stat.icon} />
                </div>

                <h3>
                  <Counter
                    target={stat.target}
                    suffix={stat.suffix}
                    start={startCounters}
                  />
                </h3>

                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
