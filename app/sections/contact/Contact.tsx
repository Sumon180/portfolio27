"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "./contact.css";

import Reveal from "@/app/components/Reveal";
export default function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const service = String(formData.get("service") || "");
    const message = String(formData.get("message") || "");

    const recipient = "your-email@example.com";

    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${service}\n\nMessage:\n${message}`,
    );

    setFormStatus("Opening your email application...");

    window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    form.reset();
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Heading */}
        <Reveal className="section-header">
          <span className="section-subtitle">
            <Icon icon="solar:plain-bold" />
            GET IN TOUCH
          </span>

          <h2 className="section-title">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>

          <p className="section-description">
            Have an idea, a project, or an opportunity? Let&apos;s connect and
            turn your vision into reality.
          </p>
        </Reveal>

        <div className="contact-container">
          {/* Left: Contact Information */}
          <Reveal className="contact-info">
            <div className="contact-intro">
              <span className="contact-eyebrow">LET&apos;S TALK</span>

              <h3>Have a project in mind?</h3>

              <p>
                I&apos;m always interested in discussing new projects, creative
                ideas, and opportunities to build something useful.
              </p>
            </div>

            <div className="contact-details">
              {/* Email */}
              <a
                href="mailto:your-email@example.com"
                className="contact-detail-card"
              >
                <span className="contact-detail-icon">
                  <Icon icon="solar:letter-bold" />
                </span>

                <span className="contact-detail-text">
                  <small>Email me</small>
                  <strong>your-email@example.com</strong>
                </span>

                <Icon icon="mdi:open-in-new" className="contact-detail-arrow" />
              </a>

              {/* Location */}
              <div className="contact-detail-card">
                <span className="contact-detail-icon">
                  <Icon icon="solar:map-point-bold" />
                </span>

                <span className="contact-detail-text">
                  <small>Location</small>
                  <strong>Bangladesh</strong>
                </span>
              </div>

              {/* Availability */}
              <div className="contact-detail-card">
                <span className="contact-detail-icon">
                  <Icon icon="solar:clock-circle-bold" />
                </span>

                <span className="contact-detail-text">
                  <small>Availability</small>
                  <strong>Open to opportunities</strong>
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social">
              <h4>Connect with me</h4>

              <div className="contact-social-links">
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
                  href="https://facebook.com/your-username"
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
            </div>

            <div className="contact-decoration contact-decoration-one"></div>
            <div className="contact-decoration contact-decoration-two"></div>
          </Reveal>

          {/* Right: Contact Form */}
          <Reveal className="contact-form-wrapper">
            <div className="contact-form-heading">
              <span className="contact-form-icon">
                <Icon icon="solar:chat-round-dots-bold" />
              </span>

              <div>
                <h3>Send Me a Message</h3>
                <p>I&apos;ll be happy to hear from you.</p>
              </div>
            </div>

            <form
              id="contactForm"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contactName">Your Name</label>
                  <input
                    type="text"
                    id="contactName"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    minLength={2}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactEmail">Email Address</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  id="contactSubject"
                  name="subject"
                  placeholder="What is this about?"
                  required
                  minLength={3}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactService">Project Type</label>

                <select
                  id="contactService"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Custom Website Development">
                    Custom Website Development
                  </option>
                  <option value="Landing Page Development">
                    Landing Page Development
                  </option>
                  <option value="Frontend UI Development">
                    Frontend UI Development
                  </option>
                  <option value="Backend Development">
                    Backend Development
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contactMessage">Your Message</label>
                <textarea
                  id="contactMessage"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  minLength={10}
                ></textarea>
              </div>

              <div className="contact-form-bottom">
                <p className="form-note">
                  <Icon icon="fa6-solid:lock" />
                  Your information is used only to respond to your inquiry.
                </p>

                <button type="submit" className="contact-submit-btn">
                  <span>Send Message</span>
                  <Icon icon="fa6-solid:paper-plane" />
                </button>
              </div>

              <p
                id="contactFormStatus"
                className="contact-form-status"
                role="status"
                aria-live="polite"
              >
                {formStatus}
              </p>
            </form>
          </Reveal>
        </div>

        {/* Bottom Message */}
        <Reveal className="contact-bottom">
          <span>Have a great idea?</span>

          <span className="contact-bottom-highlight">
            Let&apos;s make it happen. <Icon icon="fa6-solid:bolt" />
          </span>
        </Reveal>
      </div>
    </section>
  );
}
