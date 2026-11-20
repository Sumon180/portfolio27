import { Icon } from "@iconify/react";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero" className="section hero-section">
      {/* BACKGROUND EFFECTS */}
      <div className="grid-overlay" />

      <div className="hero-content">
        {/* LEFT CONTENT */}
        <div className="hero-left reveal">
          <div className="hero-status">
            <span className="status-dot" />
            <span>Available for new projects</span>
          </div>

          <div className="hero-heading">
            <span className="hero-greeting">HELLO, I'M</span>

            <h1>
              Sumon
              <span className="name-highlight"> Hossain</span>
            </h1>

            <h2>
              Creative{" "}
              <span className="gradient-text typing-text">Web Developer</span>
            </h2>
          </div>

          <p className="hero-description">
            I build modern, responsive and visually stunning websites that turn
            creative ideas into meaningful digital experiences. Let's transform
            your vision into something extraordinary.
          </p>

          {/* CTA BUTTONS */}
          <div className="hero-actions">
            <a href="#projects" className="hero-btn primary-btn magnetic-btn">
              <span>Explore My Work</span>
              <Icon icon="solar:arrow-up-right-bold" />
            </a>

            <a href="#contact" className="hero-btn secondary-btn magnetic-btn">
              <span>Let's Talk</span>
              <Icon icon="solar:chat-round-line-bold" />
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-socials">
            <a
              href="https://github.com/Sumon180"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Icon icon="mdi:github" />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icon icon="mdi:linkedin" />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Icon icon="mdi:facebook" />
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-right reveal">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-orbit orbit-three" />

          <div className="hero-glow" />

          {/* CODE EDITOR */}
          <div className="hero-code-card tilt-card">
            <div className="code-card-header">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>

              <span className="terminal-title">sumon.dev — developer.js</span>

              <Icon icon="solar:code-square-bold" />
            </div>

            <div className="code-card-body">
              <div>
                <span className="line-number">01</span>{" "}
                <span className="code-purple">const</span> developer = {"{"}
              </div>

              <div>
                <span className="line-number">02</span>
                {"  "}name: <span className="code-green">'Sumon Hossain'</span>,
              </div>

              <div>
                <span className="line-number">03</span>
                {"  "}role: <span className="code-green">'Web Developer'</span>,
              </div>

              <div>
                <span className="line-number">04</span>
                {"  "}passion:{" "}
                <span className="code-green">'Building Ideas'</span>,
              </div>

              <div>
                <span className="line-number">05</span>
                {"  "}creative: <span className="code-orange">true</span>,
              </div>

              <div>
                <span className="line-number">06</span>
                {"  "}available: <span className="code-orange">true</span>
              </div>

              <div>
                <span className="line-number">07</span>
                {"}"};
              </div>

              <div className="code-comment">
                // Turning ideas into reality ✨
              </div>
            </div>

            <div className="code-card-footer">
              <span>
                <span className="online-indicator" />
                JavaScript
              </span>

              <span>UTF-8</span>
              <span>Ln 07, Col 02</span>
            </div>
          </div>

          {/* FLOATING CARD 1 */}
          <div className="floating-card floating-card-top">
            <div className="floating-icon">
              <Icon icon="solar:verified-check-bold" />
            </div>

            <div>
              <strong>Clean Code</strong>
              <small>Quality Development</small>
            </div>
          </div>

          {/* FLOATING CARD 2 */}
          <div className="floating-card floating-card-bottom">
            <div className="floating-icon">
              <Icon icon="solar:monitor-smartphone-bold" />
            </div>

            <div>
              <strong>100% Responsive</strong>
              <small>All Devices</small>
            </div>
          </div>

          {/* DECORATIVE ELEMENTS */}
          <div className="hero-circle circle-one" />
          <div className="hero-circle circle-two" />

          <div className="floating-particle particle-one" />
          <div className="floating-particle particle-two" />
          <div className="floating-particle particle-three" />
        </div>
      </div>

      {/* BOTTOM SCROLL */}
      <a href="#about" className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <Icon icon="solar:arrow-down-linear" />
      </a>

      {/* MOUSE SPOTLIGHT */}
      <div className="mouse-spotlight" />
    </section>
  );
};

export default Hero;
