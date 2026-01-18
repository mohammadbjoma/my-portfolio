import { useState } from "react";
import Projects from "./components/Project.jsx";

const skills = {
  technical: [
    "Programming Languages: C, C++, Java, JavaScript, Python",
    "Web Development: HTML, CSS, React",
    "Databases: MySQL, PostgreSQL",
    "Object-Oriented Programming (OOP)",
    "Full Stack Development (REST APIs)",
    "Version Control: Git, GitHub, Trello",
    "Debugging & Testing",
    "Software Development Life Cycle (SDLC)",
    "Deployment tools: AWS with EC2 instances",
  ],
  soft: [
    "English (communication)",
    "Teamwork & collaboration",
    "Time management",
    "Adaptability & flexibility",
    "Creativity & innovation",
    "Self-motivation & continuous learning",
  ],
  blended: [
    "Critical thinking",
    "Decision-making",
    "Problem-solving",
    "Analytical thinking",
    "Attention to detail",
  ],
};

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "app dark" : "app"}>
      <header className="nav-bar">
        <div className="nav-content">
          <div className="logo">Mohammad</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <button
              type="button"
              className="btn ghost"
              onClick={() => setIsDark((prev) => !prev)}
            >
              {isDark ? "Light mode" : "Dark mode"}
            </button>
            <a className="btn primary" href="/CV.pdf" download>
              Download <span>CV</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <p className="eyebrow">Hello, I&apos;m</p>
            <h1>Eng. Mohammad Joma</h1>
            <p className="lead">
              A Full-Stack Developer and Computer Systems Engineer specializing in
              building secure, scalable, and user-focused web applications with
              Python and modern JavaScript.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn ghost" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-card">
            <img src="/img&icon/myImg.jpg" alt="Mohammad Joma" />
            <div>
              <h3>Full-Stack Developer</h3>
              <p>Palestine Technical University – Kadoorie</p>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div>
            <h2>Get to know me better</h2>
            <p>
              My name is Mohammad Joma, a Full-Stack Developer and Computer
              Science Engineer who graduated from Palestine Technical University –
              Kadoorie. I enjoy turning ideas into practical, user-centered
              solutions through technology and continuous learning.
            </p>
          </div>
          <div className="about-values">
            <h3>Motivational Traits & Values</h3>
            <ul>
              <li>
                <strong>Ambition & Growth:</strong> Every challenge is an
                opportunity to learn and improve.
              </li>
              <li>
                <strong>Passion for Technology:</strong> I love creating solutions
                that impact everyday life.
              </li>
              <li>
                <strong>Problem-Solving Mindset:</strong> I enjoy transforming
                ideas into working solutions.
              </li>
              <li>
                <strong>Resilience:</strong> I push through obstacles with
                creativity.
              </li>
              <li>
                <strong>Team Spirit:</strong> Collaboration helps us achieve more.
              </li>
              <li>
                <strong>Innovation:</strong> I build efficient, scalable software
                that brings value.
              </li>
            </ul>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="section-heading">
            <h2>My Skills</h2>
            <p>Balanced technical depth with strong collaboration skills.</p>
          </div>
          <div className="skills-overlap">
            <article className="skill-circle skill-circle--tech">
              <h3>Technical Skills</h3>
              <ul>
                {skills.technical.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="skill-circle skill-circle--soft">
              <h3>Soft Skills</h3>
              <ul>
                {skills.soft.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <div className="skill-both">
              <h3>Both</h3>
              <ul>
                {skills.blended.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="section-heading">
            <h2>Featured Projects</h2>
            <p>Swipe through a curated slider of my latest work.</p>
          </div>
          <Projects />
        </section>

        <section id="contact" className="contact">
          <div>
            <h2>Send Me a Message</h2>
            <p>
              Let&apos;s collaborate on your next project or talk about software
              solutions.
            </p>
          </div>
          <form
            className="contact-form"
            action="mailto:engmohamadjoma@gmail.com"
            method="post"
            encType="text/plain"
          >
            <label>
              Your Name
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </label>
            <label>
              Your Email
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </label>
            <label>
              Your Message
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
              />
            </label>
            <button className="btn primary" type="submit">
              Send Message
            </button>
          </form>
          <div className="social-links">
            <a
              className="social-card"
              href="https://www.linkedin.com/in/mohammad-qadomi/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img&icon/linked in icon.png" alt="LinkedIn" />
            </a>
            <a
              className="social-card"
              href="https://github.com/mohammadbjoma"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img&icon/githubicon.png" alt="GitHub" />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Mohammad Joma. All rights reserved.</p>
      </footer>
    </div>
  );
}
