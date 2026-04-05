export default function Portfolio() {
    return (
      <section id="portfolio" className="portfolio section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="subtitle">Portfolio</span>
          <h2>Portfolio</h2>
          <p>
            Here are some of my featured projects, blending creative design with full stack
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
              <li data-filter=".filter-creative">Creative</li>
              <li data-filter=".filter-digital">Digital</li>
              <li data-filter=".filter-strategy">Strategy</li>
              <li data-filter=".filter-development">Development</li>
            </ul>
  
            {/* Portfolio Items */}
            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {[
                {
                  img: "/assets/img/portfolio/portfolio-1.webp",
                  category: "Creative Design",
                  title: "Visual Identity System",
                  tags: ["Branding", "Identity"],
                  year: "2024",
                  filter: "filter-creative",
                },
                {
                  img: "/assets/img/portfolio/portfolio-2.webp",
                  category: "Digital Experience",
                  title: "Interactive Web Platform",
                  tags: ["Web Design", "Development"],
                  year: "2024",
                  filter: "filter-digital",
                },
                {
                  img: "/assets/img/portfolio/portfolio-3.webp",
                  category: "Brand Strategy",
                  title: "Market Positioning",
                  tags: ["Strategy", "Consulting"],
                  year: "2023",
                  filter: "filter-strategy",
                },
                {
                  img: "/assets/img/portfolio/portfolio-4.webp",
                  category: "Full Stack",
                  title: "Custom Application",
                  tags: ["React", "Node.js"],
                  year: "2024",
                  filter: "filter-development",
                },
                {
                  img: "/assets/img/portfolio/portfolio-5.webp",
                  category: "Art Direction",
                  title: "Campaign Design",
                  tags: ["Creative", "Campaign"],
                  year: "2024",
                  filter: "filter-creative",
                },
                {
                  img: "/assets/img/portfolio/portfolio-6.webp",
                  category: "Digital Product",
                  title: "Mobile Experience",
                  tags: ["Mobile", "UI/UX"],
                  year: "2023",
                  filter: "filter-digital",
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
                          <a href="#" className="portfolio-details">
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
                  Let’s collaborate to bring your ideas to life with innovative and scalable
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
  