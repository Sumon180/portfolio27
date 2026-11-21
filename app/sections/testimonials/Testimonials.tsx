import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "./testimonials.css";
import Reveal from "@/app/components/Reveal";

const testimonials = [
  {
    id: 1,
    review:
      "Sumon delivered a clean and professional website. The design was modern, responsive, and exactly what I was looking for. Communication was smooth throughout the project.",
    name: "Client Name",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 2,
    review:
      "Great attention to detail and a strong understanding of frontend development. The final result was fast, user-friendly, and looked excellent on mobile devices.",
    name: "Client Name",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 3,
    review:
      "Working with Sumon was a positive experience. He understood the requirements, suggested useful improvements, and created an impressive web experience.",
    name: "Client Name",
    role: "Project Collaborator",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        {/* Section Heading */}
        <Reveal className="section-header">
          <span className="section-subtitle">
            <Icon icon="fa6-solid:comments" />
            CLIENT FEEDBACK
          </span>

          <h2 className="section-title">
            What People <span className="gradient-text">Say</span>
          </h2>

          <p className="section-description">
            Feedback and experiences from people I&apos;ve had the pleasure of
            working with.
          </p>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <Reveal className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-top">
                <div className="testimonial-quote-icon">
                  <Icon icon="mdi:format-quote-open" />
                </div>

                <div
                  className="testimonial-stars"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon icon="solar:star-bold" key={index} />
                  ))}
                </div>
              </div>

              <p className="testimonial-text">
                &quot;{testimonial.review}&quot;
              </p>

              <div className="testimonial-divider"></div>

              <div className="testimonial-author">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                  width={55}
                  height={55}
                  className="testimonial-avatar"
                />

                <div className="testimonial-author-info">
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>

                <div className="testimonial-verified">
                  <Icon icon="fa6-solid:circle-check" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal className="testimonials-footer">
          <div className="testimonials-footer-content">
            <span className="testimonials-footer-icon">
              <Icon icon="mdi:handshake" />
            </span>

            <div>
              <h3>Let&apos;s Create Something Great Together</h3>
              <p>Have a project in mind? I&apos;d love to hear about it.</p>
            </div>
          </div>

          <Link href="#contact" className="testimonials-cta">
            Get In Touch
            <Icon icon="fa6-solid:arrow-right" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
