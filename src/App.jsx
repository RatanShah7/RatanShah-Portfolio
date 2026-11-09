import { useState } from "react";
import "./App.css";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Recommendations", id: "recommendations" },
  { name: "Contact", id: "contact" }
];

const skills = [
  { name: "Java", level: "Advanced", icon: "☕" },
  { name: "Python", level: "Intermediate", icon: "🐍" },
  { name: "C", level: "Basic", icon: "C" },
  { name: "HTML", level: "Advanced", icon: "◇" },
  { name: "CSS", level: "Advanced", icon: "✦" },
  { name: "JavaScript", level: "Intermediate", icon: "JS" },
  { name: "MySQL", level: "Advanced", icon: "DB" },
  { name: "DSA", level: "Advanced", icon: "⌘" },
  { name: "GitHub", level: "Advanced", icon: "◉" },
  { name: "OOP", level: "Advanced", icon: "O" }
];

const education = [
  {
    year: "2024 - 2028",
    type: "UNDERGRADUATE",
    title: "B.Tech. in Computer Science Engineering",
    subtitle: "Artificial Intelligence & Machine Learning",
    institute: "Galgotias University",
    score: "CGPA: 9.05",
    side: "left"
  },
  {
    year: "2023 - 2024",
    type: "SENIOR SECONDARY",
    title: "Class XII - CBSE",
    subtitle: "Science",
    institute: "Shri Ram Public School, Kanpur",
    score: "Percentage: 70%",
    side: "right"
  },
  {
    year: "2021 - 2022",
    type: "SECONDARY",
    title: "Class X - CBSE",
    subtitle: "School Education",
    institute: "Shri Ram Public School, Kanpur",
    score: "Percentage: 75.2%",
    side: "left"
  }
];

const projects = [
  {
    number: "01",
    title: "Online Pet Adoption & Care Management System",
    date: "Oct 2025 - Nov 2025",
    description:
      "A desktop-based management system designed to simplify pet registration, adoption tracking and temporary pet care management.",
    points: [
      "Pet registration and management",
      "Adoption tracking system",
      "Temporary care management",
      "Database-driven application"
    ],
    tech: ["Java", "MySQL", "JDBC", "Swing"],
    icon: "🐾"
  },
  {
    number: "02",
    title: "SpendWise - Personal Expense Management",
    date: "Aug 2026 - Sep 2026",
    description:
      "A responsive web application for tracking income, expenses and personal spending with an interactive and modern interface.",
    points: [
      "Income and expense tracking",
      "Interactive JavaScript UI",
      "Dark and light mode",
      "Responsive design"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "💰"
  }
];

const recommendations = [
  {
    name: "Problem Solving",
    role: "DSA & Competitive Practice",
    text: "Consistent problem-solving practice with 200+ LeetCode problems covering arrays, strings, hashing, greedy techniques and core data structures.",
    icon: "⌘"
  },
  {
    name: "Project Building",
    role: "Software Development",
    text: "Hands-on experience building database-driven Java applications and responsive web applications using modern frontend technologies.",
    icon: "✦"
  },
  {
    name: "Continuous Learning",
    role: "AI & Machine Learning",
    text: "Currently developing skills in Machine Learning and Data Science through academic work, practical projects and internship experience.",
    icon: "◈"
  }
];

function App() {
  const [activeNav, setActiveNav] = useState("Home");

  const handleNav = (name, id) => {
    setActiveNav(name);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const handleContact = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const subject = form.get("subject");
    const message = form.get("message");

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:ratanshah200515@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <button
            className="logo"
            onClick={() => handleNav("Home", "home")}
            aria-label="Go to home"
          >
            RS
          </button>

          <nav className="nav-links" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${
                  activeNav === item.name ? "active" : ""
                }`}
                onClick={() => handleNav(item.name, item.id)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            className="talk-button"
            onClick={() => handleNav("Contact", "contact")}
          >
            Let's Talk
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-anchor">
          <div className="hero-container">
            <div className="hero-content">
              <span className="eyebrow">HELLO, I'M</span>

              <h1>
                Ratan <span>Shah</span>
              </h1>

              <h2>
                AI & ML Student <span>/</span> Software Developer
              </h2>

              <p>
                Computer Science undergraduate specializing in AI & ML, with a
                strong foundation in Java, OOP, DSA and SQL. I enjoy building
                practical applications and solving challenging problems.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-button"
                  onClick={() => handleNav("Contact", "contact")}
                >
                  HIRE ME <span>→</span>
                </button>

                <a
                  className="secondary-button"
                  href="https://github.com/RatanShah7"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="code-card">
                <div className="code-top"></div>

                <div className="code-content">
                  <p>
                    <span className="purple">const</span> developer = {"{"}
                  </p>
                  <p className="indent">
                    name: <span className="green">"Ratan Shah"</span>,
                  </p>
                  <p className="indent">
                    role: <span className="green">"Software Developer"</span>,
                  </p>
                  <p className="indent">
                    passion: <span className="green">"AI & ML"</span>
                  </p>
                  <p>{"}"}</p>
                </div>
              </div>

              <span className="floating-tag tag-java">JAVA</span>
              <span className="floating-tag tag-dsa">DSA</span>
              <span className="floating-tag tag-ml">AI/ML</span>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section section-anchor">
          <div className="section-heading">
            <span className="eyebrow">MY EXPERTISE</span>
            <h2>Skills</h2>
            <p>
              Technologies and tools I use to build applications and solve
              problems.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="education-section section-anchor">
          <div className="section-heading">
            <span className="eyebrow">MY JOURNEY</span>
            <h2>Education</h2>
            <p>My academic journey and educational background.</p>
          </div>

          <div className="timeline">
            {education.map((item) => (
              <div
                className={`education-item ${item.side}`}
                key={item.year}
              >
                <div className="education-card">
                  <span className="education-year">{item.year}</span>
                  <span className="education-type">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p className="education-subtitle">{item.subtitle}</p>
                  <p>{item.institute}</p>
                  <strong>{item.score}</strong>
                </div>

                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section section-anchor">
          <div className="section-heading">
            <span className="eyebrow">MY WORK</span>
            <h2>Projects</h2>
            <p>
              A selection of projects where I applied programming,
              problem-solving and development skills.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual project-${project.number}`}>
                  <span className="project-number">{project.number}</span>

                  <div className="project-window">
                    <div className="window-dots">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                    <div className="window-line long"></div>
                    <div className="window-line medium"></div>
                    <div className="window-line short"></div>
                    <div className="window-button"></div>
                  </div>

                  <span className="project-icon">{project.icon}</span>
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span>PROJECT</span>
                    <small>{project.date}</small>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="tech-tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/RatanShah7"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    VIEW ON GITHUB ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="recommendations"
          className="recommendations-section section-anchor"
        >
          <div className="section-heading">
            <span className="eyebrow">RECOMMENDATIONS</span>
            <h2>What I Bring</h2>
            <p>
              A snapshot of the skills, mindset and experience I bring to
              development projects.
            </p>
          </div>

          <div className="recommendations-grid">
            {recommendations.map((item, index) => (
              <article className="recommendation-card" key={item.name}>
                <div className="recommendation-top">
                  <span className="recommendation-number">
                    0{index + 1}
                  </span>
                  <div className="recommendation-icon">{item.icon}</div>
                </div>

                <div className="stars">★★★★★</div>

                <p className="recommendation-text">"{item.text}"</p>

                <div className="recommendation-person">
                  <div className="person-avatar">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="recommendation-dots">
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        </section>

        <section id="contact" className="contact-section section-anchor">
          <div className="section-heading">
            <span className="eyebrow">CONTACT ME</span>
            <h2>Get In Touch</h2>
            <p>
              Let's connect and discuss opportunities, projects or ideas.
            </p>
          </div>

          <div className="contact-container">
            <form className="contact-form" onSubmit={handleContact}>
              <div className="contact-form-heading">
                <div className="contact-icon">✉</div>
                <div>
                  <h3>Leave Me Your Info</h3>
                  <p>I will get back to you as soon as possible.</p>
                </div>
              </div>

              <label>Your Full Name</label>
              <input name="name" type="text" required />

              <label>Your Email</label>
              <input name="email" type="email" required />

              <label>Subject</label>
              <input name="subject" type="text" required />

              <label>Your Message</label>
              <textarea name="message" rows="5" required></textarea>

              <button type="submit" className="primary-button">
                SEND MESSAGE <span>→</span>
              </button>
            </form>

            <div className="contact-info">
              <span className="eyebrow">CONTACT INFORMATION</span>
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new opportunities, projects and
                collaborations.
              </p>

              <div className="info-list">
                <div className="info-card">
                  <div className="info-icon">📍</div>
                  <div>
                    <span>LOCATION</span>
                    <strong>Kanpur, Uttar Pradesh, India</strong>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">✉</div>
                  <div>
                    <span>EMAIL</span>
                    <strong>ratanshah200515@gmail.com</strong>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">☎</div>
                  <div>
                    <span>PHONE</span>
                    <strong>+91 6387572145</strong>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">in</div>
                  <div>
                    <span>LINKEDIN</span>
                    <a
                      href="https://www.linkedin.com/in/ratan-shah-97978b30a/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="social-buttons">
                <a
                  href="https://github.com/RatanShah7"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/ratan-shah-97978b30a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a href="mailto:ratanshah200515@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <button
              className="logo"
              onClick={() => handleNav("Home", "home")}
            >
              RS
            </button>

            <h3>Ratan Shah</h3>
            <p>
              AI & ML student and software developer focused on building
              practical applications and solving problems.
            </p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.name, item.id)}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() =>
                handleNav("Recommendations", "recommendations")
              }
            >
              Recommendations
            </button>
            <button onClick={() => handleNav("Contact", "contact")}>
              Contact
            </button>
          </div>

          <div className="footer-column">
            <h4>Projects</h4>
            <a href="https://github.com/RatanShah7" target="_blank" rel="noreferrer">
              Pet Adoption System
            </a>
            <a href="https://github.com/RatanShah7" target="_blank" rel="noreferrer">
              SpendWise
            </a>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <a href="https://github.com/RatanShah7" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ratan-shah-97978b30a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:ratanshah200515@gmail.com">Email</a>
            <a href="tel:+916387572145">Phone</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;