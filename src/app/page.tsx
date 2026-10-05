import Link from "next/link";

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
    title: "Learning Platform",
    description:
      "A structured learning platform with role-based learning paths, engineering concepts, practical exercises and progress tracking.",
    tags: ["Next.js", "TypeScript", "Learning"],
  },
  {
    number: "02",
    title: "Frontend Architecture Lab",
    description:
      "Experiments and reference implementations exploring micro frontends, scalable frontend architecture and modern web patterns.",
    tags: ["React", "Architecture", "MFE"],
  },
  {
    number: "03",
    title: "Engineering Playground",
    description:
      "A collection of practical experiments, utilities and ideas built while exploring new technologies and engineering approaches.",
    tags: ["Web", "AI", "Experiments"],
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <Link href="/" className="logo">
          PM<span>.</span>
        </Link>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="mailto:hello@parameshmoganti.com" className="nav-cta">
          Let&apos;s talk <span>↗</span>
        </a>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" />
            Lead Experience Engineer
          </p>

          <h1>
            I build digital
            <br />
            experiences that
            <br />
            <em>scale.</em>
          </h1>

          <p className="hero-description">
            I&apos;m Paramesh Moganti — a frontend engineer focused on building
            scalable React applications, frontend architecture, design systems
            and developer experiences.
          </p>

          <div className="hero-actions">
            <a href="#work" className="primary-button">
              Explore my work <span>↓</span>
            </a>

            <a
              href="mailto:hello@parameshmoganti.com"
              className="secondary-button"
            >
              Get in touch <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-aside">
          <div className="hero-grid" />
          <div className="hero-coordinate">
            <span>LAT</span>
            <strong>17° 23&apos; N</strong>
            <span>LNG</span>
            <strong>78° 29&apos; E</strong>
          </div>
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

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="section-number">05 / CONTACT</p>

        <h2>
          Have something
          <br />
          interesting in mind?
        </h2>

        <a href="mailto:hello@parameshmoganti.com" className="contact-email">
          hello@parameshmoganti.com <span>↗</span>
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
