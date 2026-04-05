export default function About() {
    return (
      <section id="about" className="about section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="subtitle">About Me</span>
          <h2>About Me</h2>
          <p>
            I’m a dedicated Full Stack Developer with a strong focus on building scalable,
            efficient, and user‑friendly web applications. My expertise lies in crafting modern
            front‑end experiences with React.js (Vite) and developing robust back‑end systems
            using Express.js, Node.js, and PostgreSQL. I thrive on solving complex problems,
            optimizing performance, and turning ideas into digital solutions that make an impact.
          </p>
        </div>
  
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5">
            {/* Profile Card */}
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="150">
              <div className="profile-card">
                <div className="profile-header">
                  <div className="profile-avatar">
                    <img
                      src="/assets/img/profile/profile-square-3.webp"
                      className="img-fluid"
                      alt="Mfoniso Donatus Effiong"
                    />
                    <div className="status-indicator"></div>
                  </div>
                  <h3>Mfoniso Donatus Effiong</h3>
                  <span className="role">Full Stack Developer</span>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                    <span>4.8</span>
                  </div>
                </div>
  
                <div className="profile-stats">
                  <div className="stat-item">
                    <h4>20+</h4>
                    <p>Projects</p>
                  </div>
                  <div className="stat-item">
                    <h4>3+</h4>
                    <p>Years</p>
                  </div>
                  <div className="stat-item">
                    <h4>5</h4>
                    <p>Awards</p>
                  </div>
                </div>
  
                <div className="profile-actions">
                  <a href="/assets/docs/Mfoniso-CV.pdf" className="btn-primary">
                    <i className="bi bi-download"></i> Download CV
                  </a>
                  <a href="mailto:mfonisodonatuseffiong@gmail.com" className="btn-secondary">
                    <i className="bi bi-envelope"></i> Contact
                  </a>
                </div>
  
                <div className="social-connect">
                  <a href="https://www.linkedin.com/in/mfoniso-donatus"><i className="bi bi-linkedin"></i></a>
                  <a href="https://github.com/mfonisodonatuseffiong"><i className="bi bi-github"></i></a>
                  <a href="https://twitter.com/yourhandle"><i className="bi bi-twitter"></i></a>
                  <a href="https://instagram.com/yourhandle"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
  
            {/* Bio and Skills */}
            <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
              <div className="content-wrapper">
                <div className="bio-section">
                  <div className="section-tag">About Me</div>
                  <h2>Transforming Ideas into Digital Reality</h2>
                  <p>
                    I enjoy using my skills to create impactful projects and contribute to the
                    open‑source community. Beyond coding, I’m passionate about continuous learning,
                    collaborating with teams, and exploring cloud deployments to optimize web
                    performance.
                  </p>
                </div>
  
                {/* Skills Showcase */}
                <div className="skills-showcase" data-aos="fade-up" data-aos-delay="250">
                  <div className="section-tag">Core Skills</div>
                  <h3>Technical Proficiency</h3>
  
                  <div className="skills-list skills-animation">
                    {[
                      { name: "React.js (Vite)", percent: 95 },
                      { name: "Node.js & Express.js", percent: 90 },
                      { name: "PostgreSQL & MongoDB", percent: 85 },
                      { name: "UI/UX & Figma", percent: 80 },
                      { name: "Docker & AWS", percent: 75 },
                    ].map((skill, idx) => (
                      <div className="skill-item" key={idx}>
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percent">{skill.percent}%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={skill.percent}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${skill.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  