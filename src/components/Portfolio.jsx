export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Portfolio</span>
        <h2>Portfolio</h2>
        <p>
          A selection of my featured projects, blending creative design with full stack
          development. Each project highlights my ability to deliver scalable, user‑friendly,
          and visually appealing solutions.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          {/* Filters */}
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li data-filter="*" className="filter-active">All Work</li>
            <li data-filter=".filter-web">Web Apps</li>
            <li data-filter=".filter-ui">UI Design</li>
          </ul>

          {/* Portfolio Items */}
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {[
              {
                img: "/assets/img/portfolio/uyofood.png",
                category: "Live Production Platform",
                title: "UyoFood",
                tags: ["React", "Node.js", "PostgreSQL", "Paystack", "Socket.io"],
                year: "2026",
                filter: "filter-web",
                link: "/portfolio-details",
                linkLabel: "View Case Study",
              },
              {
                img: "/assets/img/portfolio/GoNow3.webp",
                category: "Web Application",
                title: "GoNow Flight Management",
                tags: ["React", "Node.js", "PostgreSQL"],
                year: "2025",
                filter: "filter-web",
                link: "https://github.com/mfonisodonatuseffiong/GoNow",
                linkLabel: "View on GitHub",
              },
              {
                img: "/assets/img/portfolio/justconnect.png",
                category: "Web Application",
                title: "JustConnect",
                tags: ["React", "Node.js", "PostgreSQL"],
                year: "2025",
                filter: "filter-web",
                link: "https://github.com/mfonisodonatuseffiong/justconnect",
                linkLabel: "View on GitHub",
              },
              {
                img: "/assets/img/portfolio/port.webp",
                category: "Personal Project",
                title: "Portfolio Website",
                tags: ["React", "Vite", "UI/UX"],
                year: "2026",
                filter: "filter-ui",
                link: "https://my-portfolio-n6rg.vercel.app",
                linkLabel: "Visit Live Site",
              },
            ].map((project, idx) => (
              <div
                className={`col-lg-4 col-md-6 portfolio-item isotope-item ${project.filter}`}
                key={idx}
              >
                <div className="portfolio-card">
                  <div className="portfolio-image-container">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="img-fluid"
                      loading="lazy"
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-info">
                        <span className="project-category">{project.category}</span>
                        <h4>{project.title}</h4>
                      </div>
                      <div className="portfolio-actions">
                        <a
                          href={project.img}
                          className="glightbox portfolio-link"
                        >
                          <i className="bi bi-plus-lg"></i>
                        </a>
                        <a
                          href={project.link}
                          className="portfolio-details"
                          target={project.link.startsWith("http") ? "_blank" : undefined}
                          rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          title={project.linkLabel}
                        >
                          <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-meta">
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span className="tag" key={i}>{tag}</span>
                      ))}
                    </div>
                    <div className="project-year">{project.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="portfolio-bottom" data-aos="fade-up" data-aos-delay="400">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>Like what you see?</h3>
              <p>
                Let's collaborate to bring your ideas to life with innovative and scalable
                solutions.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn btn-accent">Let's Work Together</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
