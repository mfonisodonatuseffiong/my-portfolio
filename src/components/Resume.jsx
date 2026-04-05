export default function Resume() {
    return (
      <section id="resume" className="resume section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="subtitle">Resume</span>
          <h2>Resume</h2>
          <p>
            I am a Full Stack Developer with a strong foundation in backend engineering from
            ALX Holberton School, where I earned certification in Backend Software Engineering.
            Alongside my backend expertise, I have solid frontend skills with React.js (Vite),
            enabling me to build complete, scalable web applications.
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
                      My journey has been shaped by building projects that combine strong backend
                      architecture with modern frontend design. I enjoy solving problems and
                      delivering impactful solutions.
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
                      <h3>Full Stack Developer</h3>
                      <p className="company-name">Freelance / Open Source</p>
                      <span className="duration">2023 - Present</span>
                      <p className="description">
                        Building web applications using React.js (Vite) for frontend and Express.js,
                        Node.js, and PostgreSQL for backend. Contributing to open-source projects and
                        collaborating with teams to deliver scalable solutions.
                      </p>
                      <div className="skills-tags">
                        <span className="skill-tag">React.js</span>
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">PostgreSQL</span>
                        <span className="skill-tag">Express.js</span>
                      </div>
                    </div>
                  </div>
  
                  <div className="exp-card" data-aos="zoom-in" data-aos-delay="350">
                    <div className="card-header">
                      <div className="company-logo">
                        <i className="bi bi-laptop"></i>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Frontend Developer</h3>
                      <p className="company-name">Personal & Team Projects</p>
                      <span className="duration">2021 - 2023</span>
                      <p className="description">
                        Developed responsive user interfaces with React.js, Tailwind CSS, and
                        Bootstrap. Focused on performance optimization and user experience.
                      </p>
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
                          <span className="year-range">2022 - 2023</span>
                          <span className="degree-level">Certification</span>
                        </div>
                        <h4>Backend Software Engineering</h4>
                        <p className="institution">ALX Holberton School (Online)</p>
                        <p className="description">
                          Earned certification in Backend Software Engineering, focusing on
                          problem-solving, algorithms, and building scalable backend systems.
                        </p>
                        <div className="achievement">
                          <i className="bi bi-award"></i>
                          <span>Certified Backend Engineer</span>
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
                        <h4>Frontend Development</h4>
                        <p className="institution">Independent Projects & Online Courses</p>
                        <p className="description">
                          Strengthened frontend skills with React.js (Vite), Tailwind CSS, and
                          modern JavaScript frameworks to complement backend expertise.
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
  