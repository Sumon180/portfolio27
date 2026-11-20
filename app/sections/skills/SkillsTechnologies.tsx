import Link from "next/link";
import { Icon } from "@iconify/react";

import Reveal from "@/app/components/Reveal";
import "./skills.css";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building beautiful user interfaces",
    icon: "solar:code-square-bold-duotone",
    style: "",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    title: "Backend Development",
    description: "Creating reliable application systems",
    icon: "solar:server-square-bold-duotone",
    style: "purple",
    technologies: [
      "Node.js",
      "Express.js",
      "Firebase",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "REST API",
      "Authentication",
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Tools that power my development process",
    icon: "solar:widget-5-bold-duotone",
    style: "pink",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Netlify",
      "npm",
    ],
  },
];

const learningGroups = [
  {
    label: "CURRENTLY LEARNING",
    items: [
      {
        name: "Docker",
        description: "Containerization & deployment",
        active: true,
      },
      {
        name: "Redis",
        description: "Caching & data storage",
        active: true,
      },
    ],
  },
  {
    label: "UP NEXT",
    items: [
      {
        name: "GraphQL",
        description: "Modern API development",
        active: false,
      },
      {
        name: "AWS",
        description: "Cloud infrastructure",
        active: false,
      },
      {
        name: "CI/CD",
        description: "Automated testing & deployment",
        active: false,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* SECTION HEADER */}
        <Reveal>
          <div className="section-header">
            <span className="section-subtitle">
              <span className="subtitle-line" />
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
            {skillGroups.map((group) => (
              <Reveal key={group.title}>
                <div className="skills-card">
                  <div className="card-heading">
                    <span className={`card-icon ${group.style}`}>
                      <Icon className="size-12" icon={group.icon} />
                    </span>

                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>
                  </div>

                  <div className="tech-grid flex flex-wrap gap-5">
                    {group.technologies.map((technology) => (
                      <span className="tech-item" key={technology}>
                        <span className="tech-dot" />
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
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

              {learningGroups.map((group, index) => (
                <div key={group.label}>
                  {index > 0 && <div className="learning-divider" />}

                  <div className="learning-group">
                    <span className="learning-label">{group.label}</span>

                    {group.items.map((item) => (
                      <div className="learning-item" key={item.name}>
                        <span
                          className={`learning-dot ${
                            item.active ? "active" : "upcoming"
                          }`}
                        />

                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                        </div>

                        {item.active && (
                          <span className="learning-status">Learning</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

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
