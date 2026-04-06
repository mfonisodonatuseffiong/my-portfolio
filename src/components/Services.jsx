export default function Services() {
    return (
      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="subtitle">Services</span>
          <h2>Services</h2>
          <p>
            I deliver end‑to‑end software solutions, combining modern frontend design with
            robust backend engineering. My focus is on building scalable, secure, and
            user‑friendly applications that help businesses and individuals achieve their goals.
          </p>
        </div>
  
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Service Items */}
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="service-item">
                <div className="icon-wrapper">
                  <i className="bi bi-code-slash"></i>
                </div>
                <h4>Web Development</h4>
                <p>
                  Crafting responsive, dynamic web applications using React.js (Vite), Node.js,
                  Express.js, and PostgreSQL. From concept to deployment, I ensure performance
                  and scalability.
                </p>
                <a href="#portfolio" className="read-more">
                  <span>Explore</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="service-item featured">
                <div className="featured-tag">Featured</div>
                <div className="icon-wrapper">
                  <i className="bi bi-layout-text-window-reverse"></i>
                </div>
                <h4>UI/UX Design</h4>
                <p>
                  Designing clean, intuitive, and user‑friendly interfaces with Tailwind CSS,
                  Bootstrap, and Figma. I focus on creating experiences that engage users and
                  drive results.
                </p>
                <a href="#portfolio" className="read-more">
                  <span>Explore</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="service-item">
                <div className="icon-wrapper">
                  <i className="bi bi-phone"></i>
                </div>
                <h4>Mobile‑Friendly Apps</h4>
                <p>
                  Developing mobile‑responsive applications that deliver seamless experiences
                  across devices. I ensure accessibility and usability for diverse audiences.
                </p>
                <a href="#portfolio" className="read-more">
                  <span>Explore</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <div className="service-item">
                <div className="icon-wrapper">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h4>Security & Performance</h4>
                <p>
                  Implementing secure authentication, optimized queries, and performance tuning
                  to ensure reliability, scalability, and peace of mind for users and businesses.
                </p>
                <a href="#portfolio" className="read-more">
                  <span>Explore</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
  
            {/* New Service Item */}
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="500">
              <div className="service-item">
                <div className="icon-wrapper">
                  <i className="bi bi-people"></i>
                </div>
                <h4>Consulting & Collaboration</h4>
                <p>
                  Advising teams on software architecture, mentoring junior developers, and
                  collaborating on projects to ensure best practices, efficiency, and long‑term
                  success.
                </p>
                <a href="#portfolio" className="read-more">
                  <span>Explore</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="row mt-5">
            <div className="col-12" data-aos="fade-up" data-aos-delay="200">
              <div className="cta-box">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h3>Transform Your Vision Into Reality</h3>
                    <p>
                      Partner with me to bring your ideas to life with innovative, scalable,
                      and secure solutions tailored to your needs.
                    </p>
                  </div>
                  <div className="col-lg-4 text-lg-end text-center">
                    <a href="#contact" className="cta-btn">Start Your Project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  