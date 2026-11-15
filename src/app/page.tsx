import Link from "next/link";
import Image from "next/image";
import { getMediumArticles } from "@/lib/medium";
import ArchitectureVisual from "./components/ArchitectureVisual";

const expertise = [
  "React & TypeScript",
  "Frontend Architecture",
  "Micro Frontends",
  "Design Systems",
  "Cloud & DevOps",
  "Developer Experience",
];

const projects = [
  {
    number: "01",
    title: "Micro-Frontend Architecture",
    description:
      "Designing reusable frontend architectures that allow independently developed applications to integrate into a cohesive product. Explore the routing, integration, deployment, and maintainability trade-offs.",
    tags: ["React", "Module Federation", "Architecture"],
  },
  {
    number: "02",
    title: "Design Systems & Component Engineering",
    description:
      "Building reusable UI components, shared theming, and frontend packages that help teams deliver consistent experiences while reducing duplication and improving maintainability.",
    tags: ["TypeScript", "Design Systems", "NPM"],
  },
  {
    number: "03",
    title: "Accessibility & Frontend Quality",
    description:
      "Applying accessibility standards, testing practices, and frontend engineering discipline to build more inclusive and reliable digital experiences.",
    tags: ["WCAG 2.2 AA", "Testing", "Quality Engineering"],
  },
];

export default async function Home() {
  const articles = await getMediumArticles(3);
  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <Link href="/" className="logo" aria-label="Paramesh Moganti — Home">
          <Image
            src="/brand/logo-light.png"
            alt=""
            width={175}
            height={60}
            priority
          />
        </Link>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="mailto:parameshmoganti@gmail.com" className="nav-cta">
          Let&apos;s talk <span>↗</span>
        </a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" />
            Lead Frontend Engineer
          </p>

          <h1>
            I engineer
            <br />
            frontend platforms
            <br />
            that <em>scale.</em>
          </h1>

          <p className="hero-description">
            I&apos;m Paramesh Moganti — a frontend engineering leader focused on
            React, scalable frontend architecture, micro-frontends, design
            systems, and accessible digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#work" className="primary-button">
              Explore my work <span>↓</span>
            </a>

            <a
              href="mailto:parameshmoganti@gmail.com"
              className="secondary-button"
            >
              Get in touch <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-aside">
          <div className="hero-grid" />

          <ArchitectureVisual />
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          <span>REACT</span>
          <b>✦</b>
          <span>TYPESCRIPT</span>
          <b>✦</b>
          <span>ARCHITECTURE</span>
          <b>✦</b>
          <span>MICRO FRONTENDS</span>
          <b>✦</b>
          <span>DESIGN SYSTEMS</span>
          <b>✦</b>
          <span>REACT</span>
          <b>✦</b>
          <span>TYPESCRIPT</span>
          <b>✦</b>
          <span>ARCHITECTURE</span>
          <b>✦</b>
          <span>MICRO FRONTENDS</span>
          <b>✦</b>
        </div>
      </div>

      {/* Work */}
      <section id="work" className="section work-section">
        <div className="section-heading">
          <p className="section-number">01 / WHAT I DO</p>
          <h2>
            Turning complex
            <br />
            problems into <em>simple</em>
            <br />
            experiences.
          </h2>
        </div>

        <div className="work-copy">
          <p>
            My work sits at the intersection of engineering, architecture and
            user experience.
          </p>

          <p>
            I enjoy taking ambiguous problems, understanding the bigger picture
            and turning them into scalable, maintainable and intuitive digital
            products.
          </p>

          <a href="#expertise" className="text-link">
            Explore my expertise <span>↘</span>
          </a>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="section expertise-section">
        <div className="section-topline">
          <p className="section-number">02 / EXPERTISE</p>
          <p className="muted">A few things I enjoy building</p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <div className="expertise-item" key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <span className="arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <div className="section-heading projects-heading">
          <p className="section-number">03 / SELECTED PROJECTS</p>
          <h2>
            Things I&apos;m
            <br />
            <em>building.</em>
          </h2>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section about-section">
        <div>
          <p className="section-number">04 / A LITTLE MORE</p>
        </div>

        <div className="about-content">
          <h2>
            Engineering is more than
            <br />
            writing code.
          </h2>

          <p>
            I&apos;m interested in the systems behind great products —
            architecture, developer experience, reusable components, engineering
            practices and the decisions that make software easier to evolve.
          </p>

          <p>
            This website is my personal engineering playground — a place where I
            share what I build, what I learn and the ideas I&apos;m exploring.
          </p>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="section projects-section">
        <div className="section-heading projects-heading">
          <p className="section-number">05 / WRITING & INSIGHTS</p>
          <h2>
            Thoughts from
            <br />
            the <em>engineering trenches.</em>
          </h2>
          <p className="hero-description">
            Practical lessons on React, frontend architecture, deployment, and
            the problems we solve along the way.
          </p>
        </div>

        <div className="projects-list">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <article className="project-card" key={article.link}>
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="project-main">
                  <h3>{article.title}</h3>

                  {article.pubDate && (
                    <p className="muted">
                      {new Date(article.pubDate).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        timeZone: "UTC",
                      })}
                    </p>
                  )}

                  <p>{article.description}</p>

                  <a
                    className="text-link"
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read on Medium <span>↗</span>
                  </a>
                </div>

                <div className="project-arrow">↗</div>
              </article>
            ))
          ) : (
            <p className="muted">
              Articles are temporarily unavailable. Visit my Medium profile to
              explore my writing.
            </p>
          )}
        </div>

        <a
          className="text-link"
          href="https://medium.com/@parameshmoganti"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all articles on Medium <span>↗</span>
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="section-number">05 / CONTACT</p>

        <h2>
          Have something
          <br />
          interesting in mind?
        </h2>

        <a href="mailto:parameshmoganti@gmail.com" className="contact-email">
          parameshmoganti@gmail.com <span>↗</span>
        </a>

        <div className="contact-footer">
          <span>© {new Date().getFullYear()} Paramesh Moganti</span>

          <div>
            <a
              href="https://github.com/paramesh-moganti"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/paramesh-moganti/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
