import Link from "next/link";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/Reveal";
import "./skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* SECTION HEADER */}
        <Reveal>
          <div className="section-header">
            <span className="section-subtitle">
              <span className="subtitle-line"></span>
              MY EXPERTISE
            </span>

            <h2 className="section-title">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>

            <p className="section-description">
              The tools and technologies I use to transform ideas into modern,
              responsive, and powerful digital experiences.
            </p>
          </div>
        </Reveal>

        <div className="skills-layout">
          {/* MAIN SKILLS */}
          <div className="skills-main">
            {/* FRONTEND DEVELOPMENT */}
            <Reveal>
              <div className="skills-card">
                <div className="card-heading">
                  <span className="card-icon">
                    <Icon icon="solar:code-square-bold-duotone" />
                  </span>

                  <div>
                    <h3>Frontend Development</h3>
                    <p>Building beautiful user interfaces</p>
                  </div>
                </div>

                <div className="tech-grid">
                  <div className="tech-item">
                    <Icon icon="skill-icons:html" />
                    <span>HTML5</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:css" />
                    <span>CSS3</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:javascript" />
                    <span>JavaScript</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:typescript" />
                    <span>TypeScript</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:react-dark" />
                    <span>React</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:nextjs-dark" />
                    <span>Next.js</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:tailwindcss-dark" />
                    <span>Tailwind CSS</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:redux" />
                    <span>Redux</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* BACKEND DEVELOPMENT */}
            <Reveal>
              <div className="skills-card">
                <div className="card-heading">
                  <span className="card-icon purple">
                    <Icon icon="solar:server-square-bold-duotone" />
                  </span>

                  <div>
                    <h3>Backend Development</h3>
                    <p>Creating reliable application systems</p>
                  </div>
                </div>

                <div className="tech-grid">
                  <div className="tech-item">
                    <Icon icon="skill-icons:nodejs-dark" />
                    <span>Node.js</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:expressjs-dark" />
                    <span>Express.js</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="devicon:firebase" />
                    <span>Firebase</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="devicon:mysql-wordmark" />
                    <span>MySQL</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="devicon:postgresql" />
                    <span>PostgreSQL</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:mongodb" />
                    <span>MongoDB</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:prisma" />
                    <span>Prisma ORM</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="solar:code-square-bold-duotone" />
                    <span>REST API</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="solar:shield-check-bold-duotone" />
                    <span>Authentication</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* TOOLS & WORKFLOW */}
            <Reveal>
              <div className="skills-card">
                <div className="card-heading">
                  <span className="card-icon pink">
                    <Icon icon="solar:widget-5-bold-duotone" />
                  </span>

                  <div>
                    <h3>Tools & Workflow</h3>
                    <p>Tools that power my development process</p>
                  </div>
                </div>

                <div className="tech-grid">
                  <div className="tech-item">
                    <Icon icon="skill-icons:git" />
                    <span>Git</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:github-dark" />
                    <span>GitHub</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:vscode-dark" />
                    <span>VS Code</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="simple-icons:postman" />
                    <span>Postman</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="simple-icons:vercel" />
                    <span>Vercel</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="skill-icons:netlify-dark" />
                    <span>Netlify</span>
                  </div>

                  <div className="tech-item">
                    <Icon icon="simple-icons:npm" />
                    <span>npm</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* LEARNING ROADMAP */}
          <Reveal>
            <aside className="learning-card">
              <div className="learning-heading">
                <span className="learning-icon">✦</span>

                <div>
                  <h3>Learning Journey</h3>
                  <p>Growing every day</p>
                </div>
              </div>

              {/* CURRENTLY LEARNING */}
              <div className="learning-group">
                <span className="learning-label">CURRENTLY LEARNING</span>

                <div className="learning-item">
                  <span className="learning-dot active"></span>

                  <div>
                    <h4>Docker</h4>
                    <p>Containerization & deployment</p>
                  </div>

                  <span className="learning-status">Learning</span>
                </div>

                <div className="learning-item">
                  <span className="learning-dot active"></span>

                  <div>
                    <h4>Redis</h4>
                    <p>Caching & data storage</p>
                  </div>

                  <span className="learning-status">Learning</span>
                </div>
              </div>

              <div className="learning-divider"></div>

              {/* UP NEXT */}
              <div className="learning-group">
                <span className="learning-label">UP NEXT</span>

                <div className="learning-item">
                  <span className="learning-dot upcoming"></span>

                  <div>
                    <h4>GraphQL</h4>
                    <p>Modern API development</p>
                  </div>
                </div>

                <div className="learning-item">
                  <span className="learning-dot upcoming"></span>

                  <div>
                    <h4>AWS</h4>
                    <p>Cloud infrastructure</p>
                  </div>
                </div>

                <div className="learning-item">
                  <span className="learning-dot upcoming"></span>

                  <div>
                    <h4>CI/CD</h4>
                    <p>Automated testing & deployment</p>
                  </div>
                </div>
              </div>

              <div className="learning-footer">
                <span>Always learning.</span>
                <span className="footer-sparkle">✦</span>
              </div>
            </aside>
          </Reveal>
        </div>

        {/* BOTTOM CTA */}
        <Reveal>
          <div className="skills-bottom">
            <div className="skills-bottom-icon">
              <Icon icon="solar:rocket-2-bold-duotone" />
            </div>

            <div>
              <h3>Always Learning, Always Building</h3>

              <p>
                Exploring new technologies and improving my skills to build
                better digital products.
              </p>
            </div>

            <Link href="#projects" className="skills-explore-btn">
              Explore Projects
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
