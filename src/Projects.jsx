import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import "./Projects.css";

function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem(
      "portfolio-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    const revealElements =
      document.querySelectorAll(".projects-reveal");

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  const projects = [
    {
      number: "01",
      title: "Kapada Sahayog",
      category: "FULL STACK WEB APPLICATION",
      description:
        "A cloth donation management platform designed to connect donors with cloth banks and simplify the donation collection process.",
      technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
      link: "#",
    },
    {
      number: "02",
      title: "E-Commerce Management",
      category: "E-COMMERCE",
      description:
        "Product management, content updates, SEO optimization and digital operations for an online handicraft store.",
      technologies: ["WordPress", "WooCommerce", "SEO", "Canva"],
      link: "#",
    },
    {
      number: "03",
      title: "Data Analytics Dashboard",
      category: "DATA ANALYTICS",
      description:
        "An interactive analytics project focused on transforming raw business data into useful insights and visual reports.",
      technologies: ["Excel", "SQL", "Python", "Power BI"],
      link: "#",
    },
  ];

  return (
    <div className="projects-page">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">

          <a href="/" className="logo" onClick={closeMenu}>
            Nirvik Tamrakar<span></span>
          </a>

          <nav
            className={`nav-links ${
              menuOpen ? "active" : ""
            }`}
          >
            <a href="/#home" onClick={closeMenu}>
              Home
            </a>

            <a href="/#about" onClick={closeMenu}>
              About
            </a>

            <a href="/#skills" onClick={closeMenu}>
              Skills
            </a>

            <a
              href="/projects"
              onClick={closeMenu}
            >
              Projects
            </a>

            <a href="/#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <div className="nav-actions">

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={
                darkMode
                  ? "Light mode"
                  : "Dark mode"
              }
            >
              {darkMode ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            <a
              href="/#contact"
              className="nav-button"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </a>

            <button
              className="mobile-menu"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={25} />
              ) : (
                <Menu size={25} />
              )}
            </button>

          </div>
        </div>
      </header>

      {/* PROJECTS */}
      <main className="projects-page-main">

        <div className="projects-page-heading projects-reveal">
          <span>03 / PROJECTS</span>

          <h1>
            Selected
            <em> work.</em>
          </h1>

          <p>
            A collection of projects that represent what I'm
            currently learning, building and exploring.
          </p>
        </div>

        <div className="projects-page-list">

          {projects.map((project, index) => (
            <article
              className="projects-page-card projects-reveal"
              key={project.number}
              style={{
                "--delay": `${index * 100}ms`,
              }}
            >
              <div className="projects-page-number">
                {project.number}
              </div>

              <div className="projects-page-info">

                <span className="projects-page-category">
                  {project.category}
                </span>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="projects-page-technologies">
                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>

              </div>

              <a
                href={project.link}
                className="projects-page-link"
                aria-label={`Open ${project.title}`}
              >
                <ExternalLink size={19} />
              </a>

            </article>
          ))}

        </div>
      </main>
    </div>
  );
}

export default Projects;