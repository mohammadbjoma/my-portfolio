import { useEffect, useMemo, useState } from "react";

const projects = [
  {
    title: "Clinic Management System",
    description:
      "A clinic management system that enables online appointments and unifies all clinic sections for efficient patient care.",
    image: "/img&icon/Screenshot (1).png",
    tags: ["HTML", "CSS", "PHP", "MySQL"],

  },
  {
    title: "Inventory Management System",
    description:
      "Full-stack inventory platform built with Django and JavaScript, featuring authentication, CRUD workflows, and a Wordle-style game, deployed on AWS EC2.",
    image: "/img&icon/inventory-managment-system.PNG",
    tags: ["HTML", "CSS", "JavaScript", "Python", "SQLite"],
    url: "http://3.227.211.218/",
  },
  {
    title: "Ticketing System",
    description:
      "Django-based ticketing system that lets users create, view, and manage support tickets with a polished UI.",
    image: "/img&icon/Ticketing-System.PNG",
    tags: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
    url: "http://98.92.112.91",
  },
  {
    title: "Weather Forecast App",
    description:
      "Responsive weather application built with React and Vite, featuring real-time weather data, multi-language support (EN/AR), and 7-day forecasts using Weatherbit API.",
    image: "/img&icon/WeatherApp.png",
    tags: ["React", "JavaScript", "Vite", "API"],
    url: "https://github.com/mohammadbjoma/weather-website",
  },

];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  const slides = useMemo(
    () =>
      projects.map((project, index) => ({
        ...project,
        id: `${project.title}-${index}`,
      })),
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => clearInterval(timer);
  }, [total]);

  const goTo = (index) => {
    const nextIndex = (index + total) % total;
    setActiveIndex(nextIndex);
  };

  return (
    <div className="project-slider">
      <div className="slider-controls">
        <button className="btn ghost" onClick={() => goTo(activeIndex - 1)}>
          ◀ Prev
        </button>
        <div className="dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={index === activeIndex ? "dot active" : "dot"}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button className="btn ghost" onClick={() => goTo(activeIndex + 1)}>
          Next ▶
        </button>
      </div>

      <div className="slider-window">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image">
            <img
  src={project.image}
  alt={project.title}
  className="project-img"
/>

              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn"
                  >
                    Visit Website →
                  </a>
                )}
              </div>

            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
