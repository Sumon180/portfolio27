"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { Icon } from "@iconify/react";
import "./footer.css";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-glow"></div>

      <div className="container">
        {/* Footer Main */}
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="#home" className="footer-logo">
              Sumon<span>.dev</span>
              <span className="footer-logo-dot"></span>
            </Link>

            <p className="footer-description">
              Creative Web Developer passionate about building modern,
              responsive, and meaningful digital experiences. Let's turn great
              ideas into reality.
            </p>

            <div className="footer-availability">
              <span className="availability-dot"></span>
              Available for new opportunities
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul className="footer-nav">
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About Me</Link>
              </li>
              <li>
                <Link href="#skills">My Skills</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>What I Do</h3>

            <ul className="footer-nav">
              <li>
                <Link href="#services">Website Development</Link>
              </li>
              <li>
                <Link href="#services">Landing Pages</Link>
              </li>
              <li>
                <Link href="#services">Frontend Development</Link>
              </li>
              <li>
                <Link href="#services">Backend Development</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-column footer-connect">
            <h3>Let's Connect</h3>

            <p>
              Follow my journey and stay connected for updates on my latest
              work.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Icon icon="mdi:github" />
              </a>

              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" />
              </a>

              <a
                href="https://facebook.com/devsumon.96"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Icon icon="mdi:facebook" />
              </a>

              <a
                href="https://instagram.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" />
              </a>
            </div>

            <Link href="#contact" className="footer-contact-link">
              Let's Talk
              <Icon icon="solar:arrow-right-up-linear" />
            </Link>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            <Icon icon="fa6-regular:copyright" />
            <span>{currentYear}</span>
            <span className="footer-brand-name">Sumon.dev</span>
            <span className="footer-copyright-separator">|</span>
            All rights reserved.
          </p>

          <p className="footer-made-with">
            Designed &amp; Built with
            <Icon icon="solar:heart-bold" />
            by <span>Sumon Hossain</span>
          </p>

          <Link href="#home" className="footer-back-top">
            <span>Back to top</span>
            <Icon icon="solar:arrow-up-linear" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
