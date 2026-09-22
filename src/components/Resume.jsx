export default function Resume() {
  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Resume</span>
        <h2>Resume</h2>
        <p>
          I'm a Backend and Full Stack Developer with hands-on experience building, securing,
          and deploying production web applications using React.js, Node.js, Express.js, and
          PostgreSQL. I independently designed, built, and continue to operate UyoFood, a live,
          revenue-generating food-ordering platform serving real customers and restaurants. My
          academic background also includes a B.Sc. in Microbiology, which strengthened my
          analytical and problem-solving skills.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">
          {/* Experience Section */}
          <div className="col-lg-6">
            <div className="experience-section">
              <div className="section-header" data-aos="fade-right" data-aos-delay="200">
                <div className="header-content">
                  <span className="section-badge">Experience</span>
                  <h2>Professional Journey</h2>
                  <p>
                    Hands-on ownership of a real, live product — from architecture to
                    production incidents — is what has shaped my growth as a developer.
                  </p>
                </div>
              </div>

              <div className="experience-cards">
                <div className="exp-card featured" data-aos="zoom-in" data-aos-delay="300">
                  <div className="card-header">
                    <div className="company-logo">
                      <i className="bi bi-buildings"></i>
                    </div>
                    <div className="period-badge">Current</div>
                  </div>
                  <div className="card-body">
                    <h3>Independent Developer — UyoFood</h3>
                    <p className="company-name">Self-Directed / Freelance</p>
                    <span className="duration">2026 - Present</span>
                    <p className="description">
                      Designed, built, and deployed a full-stack production food-ordering
                      platform (React.js, Node.js, Express.js, PostgreSQL). Integrated Paystack
                      payments with server-side verification and webhook processing, built
                      real-time order tracking with Socket.io, and configured production
                      infrastructure end to end — domain, DNS, and hosting. Operate the platform
                      live: diagnosed and resolved a production network outage down to root
                      cause, and handle real customer and vendor transactions daily.
                    </p>
                    <div className="skills-tags">
                      <span className="skill-tag">React.js</span>
                      <span className="skill-tag">Node.js</span>
                      <span className="skill-tag">PostgreSQL</span>
                      <span className="skill-tag">Express.js</span>
                      <span className="skill-tag">Socket.io</span>
                      <span className="skill-tag">Paystack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="col-lg-6">
            <div className="education-section">
              <div className="section-header" data-aos="fade-left" data-aos-delay="200">
                <div className="header-content">
                  <span className="section-badge">Education</span>
                  <h2>Academic Background</h2>
                  <p>
                    My academic journey blends formal certification with continuous self-learning
                    in modern web technologies.
                  </p>
                </div>
              </div>

              <div className="education-timeline" data-aos="fade-left" data-aos-delay="300">
                <div className="timeline-track">
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-mortarboard-fill"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">2025</span>
                        <span className="degree-level">Certification</span>
                      </div>
                      <h4>Nano Software Engineering Certificate</h4>
                      <p className="institution">ALX Software Engineering / Holberton School</p>
                      <p className="description">
                        Earned certification in software engineering, focusing on
                        problem-solving, algorithms, and building scalable backend systems.
                      </p>
                      <div className="achievement">
                        <i className="bi bi-award"></i>
                        <span>Certified Software Engineer</span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-code-slash"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">Ongoing</span>
                        <span className="degree-level">Self-Learning</span>
                      </div>
                      <h4>Cloud & DevOps</h4>
                      <p className="institution">Independent, Hands-On Practice</p>
                      <p className="description">
                        Deepening skills in Docker, AWS, and CI/CD pipelines, applied directly
                        to UyoFood's production infrastructure.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-book"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="degree-level">Bachelor's Degree</span>
                      </div>
                      <h4>B.Sc. Microbiology</h4>
                      <p className="institution">University of Cross River State (formerly CRUTECH)</p>
                      <p className="description">
                        Developed strong analytical and research skills, applying scientific
                        problem-solving approaches that complement my technical expertise in
                        software engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}