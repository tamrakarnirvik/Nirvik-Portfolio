import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Database,
  GitBranch,
  Globe,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Send,
  Sun,
  X,
} from "lucide-react";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

useEffect(() => {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    observer.disconnect();
  };
}, []);

const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  
  const skills = [
    {
      icon: <Code2 size={23} />,
      title: "Development",
      description: "Developing responsive websites and web applications.",
      items: ["HTML", "CSS", "JavaScript", "React", "Django", "Python"],
    },
    {
      icon: <Database size={23} />,
      title: "Database",
      description: "Working with databases and structured data.",
      items: ["SQL", "SQLite", "MySQL", "Database Design"],
    },
    {
      icon: <BarChart3 size={23} />,
      title: "Analytics",
      description: "Analyzing data to find useful patterns and insights.",
      items: ["Excel", "Power BI", "Python", "Data Visualization"],
    },
    {
      icon: <Globe size={23} />,
      title: "Digital",
      description: "Working with websites, e-commerce platforms, and digital content.",
      items: ["WordPress", "WooCommerce", "SEO", "Canva"],
    },
  ];

    return (
    <>
      <div
        className="mouse-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      <div className="app">
      

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            Nirvik Tamrakar<span></span>
          </a>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="/projects" onClick={closeMenu}>
            Projects
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a href="#contact" className="nav-button">
              Let's Talk
              <ArrowUpRight size={16} />
            </a>

            <button
              className="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-content reveal">
            <div className="availability">
              <span></span>
              Open to Opportunities
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              <span className="first-name">Nirvik</span>
              <span>Tamrakar</span>
              </h1>

            <h2>
              Developer <span>×</span> Data
              <br />
              Analytics Enthusiast.
            </h2>

            <p className="hero-description">
              I build web applications and data-driven solutions with a focus on practical, user-friendly experiences.
            </p>

            <div className="hero-buttons">
              <a href="/projects" className="primary-button">
              View My Work
              <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="secondary-button">
                Get In Touch
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="#"
                aria-label="GitHub"
                className="social-icon"
                title="GitHub"
              >
                <GitBranch size={19} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="social-icon"
                title="LinkedIn"
              >
                <Network size={19} />
              </a>

              <a
                href="mailto:your@email.com"
                aria-label="Email"
                className="social-icon"
                title="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay">
  <div className="visual-glow"></div>
  <div className="visual-circle"></div>

  <div className="code-card">
    <div className="code-top">
      <div className="window-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <span>developer.js</span>

      <div className="code-status">
        <span></span>
        live
      </div>
    </div>

    <div className="code-body">
      <div className="code-content">
        <p>
          <span className="purple">const</span>{" "}
          <span className="blue">developer</span> = {"{"}
        </p>

        <p className="indent">
          <span className="green">name</span>:{" "}
          <span className="orange">'Nirvik'</span>,
        </p>

        <p className="indent">
          <span className="green">role</span>:{" "}
          <span className="orange">'Developer'</span>,
        </p>

        <p className="indent">
          <span className="green">focus</span>:{" "}
          <span className="orange">'Data'</span>,
        </p>

        <p className="indent">
          <span className="green">passion</span>:{" "}
          <span className="orange">'Building'</span>
        </p>

        <p>
          {"}"}
          <span className="cursor">_</span>
        </p>
      </div>

      <div className="profile-photo">
        <div className="profile-photo-ring">
          <img src="/profile.jpg" alt="Nirvik Tamrakar" />
        </div>

        <span className="profile-status">
          <span></span>
          available
        </span>
      </div>
    </div>
  </div> {/* <-- THIS WAS MISSING */}

  <div className="floating-card card-one">
    <Code2 size={18} />
    <span>Build</span>
  </div>

  <div className="floating-card card-two">
    <BarChart3 size={18} />
    <span>Analyze</span>
  </div>

  <div className="floating-card card-three">
    <Database size={18} />
    <span>Data</span>
  </div>
</div>

</section>


        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-heading reveal">
            <span>01 / ABOUT</span>

            <h2>
              A little
              <em> about me.</em>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-text reveal" style={{ "--delay": "80ms" }}>
              <p className="large-text">
                I'm interested in technology, web development, and data.
                I enjoy building <strong>practical solutions</strong> that are simple to use and easy to <strong>understand</strong>.
              </p>

              <p>
                My interests are mainly in web development and data analytics.
                I enjoy understanding a problem, working through the details, 
                and building a solution that serves a clear purpose.
              </p>

              <p>
                I'm currently expanding my skills in 
                modern web technologies, databases, data analysis, 
                and application development.
              </p>

              <a href="#contact" className="text-link">
                Let's work together
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="about-stats reveal" style={{ "--delay": "180ms" }}>
              <div className="stat">
                <span>01</span>
                <strong>Curiosity</strong>
                <p>Always learning something new.</p>
              </div>

              <div className="stat">
                <span>02</span>
                <strong>Problem Solving</strong>
                <p>Turning problems into practical solutions.</p>
              </div>

              <div className="stat">
                <span>03</span>
                <strong>Creativity</strong>
                <p>Making technology simple and engaging.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills">
          <div className="section-heading reveal">
            <span>02 / SKILLS</span>

            <h2>
              Technologies
              <em> I work with.</em>
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                className="skill-card reveal"
                key={skill.title}
                style={{ "--delay": `${index * 80}ms` }}
              >
                <div className="skill-number">0{index + 1}</div>

                <div className="skill-icon">{skill.icon}</div>

                <h3>{skill.title}</h3>

                <p className="skill-description">{skill.description}</p>

                <div className="skill-list">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        

        {/* EXPERIENCE */}
        <section className="section experience">
          <div className="section-heading reveal">
            <span>04 / JOURNEY</span>

            <h2>
              My professional
              <em> journey.</em>
            </h2>
          </div>

          <div className="timeline">
            <div
  className="timeline-item reveal"
  style={{ "--delay": "0ms" }}
>
              <div className="timeline-date">2025 — PRESENT</div>

              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <h3>Back Office Admin / E-Commerce</h3>
                <span>Cellapp Pvt. Ltd.</span>

                <p>
                  Managing E-Commerce Operations, Social Media Management, 
                  Digital Marketing, Search Engine Optimization(SEO), Product Information, Website Content, and Online Store Activities.
                </p>
              </div>
            </div>

            <div
  className="timeline-item reveal"
  style={{ "--delay": "100ms" }}
>
              <div className="timeline-date">2025 — 2026</div>

              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <h3>Full Stack Web Project</h3>
                <span>Academic Project</span>

                <p>
                  Developed a Django-based Cloth Donation Platform with 
                  donor forms, database management and an admin interface.
                </p>
              </div>
            </div>

            <div
  className="timeline-item reveal"
  style={{ "--delay": "200ms" }}
>
              <div className="timeline-date">PRESENT</div>

              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <h3>Data Analytics Learning</h3>
                <span>Independent Learning</span>

                <p>
                  Currently building my skills in Excel, SQL, 
                  Python, Data Visualization, and Business Analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="contact-box reveal">
            <div className="contact-glow"></div>

            <div className="contact-content">
              <span>05 / CONTACT</span>

              <h2>
                Have an idea?
                <br />
                <em>Let's talk.</em>
              </h2>

              <p>
                Have a project in mind or want to get in touch? 
                Feel free to send me a message.
              </p>

              <a href="mailto:nirviktamrakarr@email.com" className="primary-button">
                Get in Touch
                <Send size={17} />
              </a>
            </div>

            <div className="contact-details">
              <div>
                <Mail size={19} />
                <span>Email</span>
                <a href="mailto:nirviktamrakarr@email.com">nirviktamrakarr@email.com</a>
              </div>

              <div>
                <MapPin size={19} />
                <span>Location</span>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-container">
          <div>
            <a href="#home" className="footer-logo">
              Nirvik Tamrakar<span></span>
            </a>

            <p>Building ideas into digital experiences.</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="/projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a href="#" aria-label="GitHub">
              <GitBranch size={17} />
            </a>

            <a href="#" aria-label="LinkedIn">
              <Network size={17} />
            </a>

            <a href="mailto:your@email.com" aria-label="Email">
              <Mail size={17} />
            </a>
          </div>
        </div>

        <div className="copyright">
          © 2026 Nirvik Tamrakar. All rights reserved.
        </div>
      </footer>
        </div>
    </>
  );
}

export default App;