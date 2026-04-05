export default function PortfolioDetails() {
    return (
      <div className="portfolio-details-page">
        
        {/* Header */}
        <header id="header" className="header d-flex align-items-center sticky-top">
          <div className="container-fluid container-xl position-relative d-flex align-items-center">
            
            <a href="/" className="logo d-flex align-items-center me-auto">
              <h1 className="sitename">DonaTech</h1>
            </a>
  
            <nav id="navmenu" className="navmenu">
              <ul>
                <li><a href="/#hero">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#resume">Resume</a></li>
                <li><a href="/#services">Services</a></li>
                <li><a href="/#portfolio">Portfolio</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
  
            <a className="btn-getstarted" href="/#about">
              Get Started
            </a>
  
          </div>
        </header>
  
  
        {/* Main */}
        <main className="main">
  
          {/* Page Title */}
          <div className="page-title light-background">
            <div className="container">
              <nav className="breadcrumbs">
                <ol>
                  <li><a href="/">Home</a></li>
                  <li className="current">Portfolio Details</li>
                </ol>
              </nav>
              <h1>Portfolio Details</h1>
            </div>
          </div>
  
  
          {/* Portfolio Details */}
          <section id="portfolio-details" className="portfolio-details section">
  
            <div className="container section-title" data-aos="fade-up">
              <span className="subtitle">Portfolio Details</span>
              <h2>Portfolio Details</h2>
              <p>
                Here’s a closer look at one of my featured projects, highlighting
                the design, development, and technical implementation.
              </p>
            </div>
  
  
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-5">
  
  
                {/* Left Column */}
                <div className="col-lg-8">
  
                  {/* Slider */}
                  <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper">
  
                      {[
                        "/assets/img/portfolio/portfolio-3.webp",
                        "/assets/img/portfolio/portfolio-6.webp",
                        "/assets/img/portfolio/portfolio-9.webp",
                        "/assets/img/portfolio/portfolio-11.webp",
                      ].map((img, idx) => (
                        <div className="swiper-slide" key={idx}>
                          <img
                            src={img}
                            alt="Portfolio"
                            className="img-fluid"
                          />
                        </div>
                      ))}
  
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
  
  
                  {/* Content */}
                  <div
                    className="portfolio-content"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
  
                    <h2>Innovative Digital Platform</h2>
  
                    <div className="meta-info">
                      <span className="date">
                        <i className="bi bi-calendar"></i>
                        {" "}March 15, 2024
                      </span>
  
                      <span className="category">
                        <i className="bi bi-tag"></i>
                        {" "}Web Development
                      </span>
  
                      <span className="client">
                        <i className="bi bi-building"></i>
                        {" "}TechCorp Solutions
                      </span>
                    </div>
  
  
                    <p>
                      This project involved building a responsive, scalable web
                      platform with advanced authentication and real-time data
                      synchronization.
                    </p>
  
  
                    <h3>Project Overview</h3>
  
                    <p>
                      The platform was designed to deliver seamless user
                      experiences, optimized performance, and a comprehensive
                      admin dashboard.
                    </p>
  
  
                    <div className="highlights-box">
                      <h4>Key Highlights</h4>
  
                      <ul>
                        <li><i className="bi bi-check-circle"></i> Responsive design</li>
                        <li><i className="bi bi-check-circle"></i> Authentication system</li>
                        <li><i className="bi bi-check-circle"></i> Real-time sync</li>
                        <li><i className="bi bi-check-circle"></i> Fast performance</li>
                        <li><i className="bi bi-check-circle"></i> Admin dashboard</li>
                      </ul>
  
                    </div>
  
  
                    <h3>Technical Implementation</h3>
  
                    <p>
                      Built with React, Node.js and MongoDB using modern scalable
                      architecture.
                    </p>
  
  
                    <blockquote>
  
                      <i className="bi bi-quote quote-icon"></i>
  
                      <p>
                        "Working with DonaTech delivered an exceptional digital
                        platform beyond expectations."
                      </p>
  
                      <div className="author">
  
                        <img
                          src="/assets/img/person/person-m-7.webp"
                          alt="Author"
                        />
  
                        <div className="author-info">
                          <h5>Michael Anderson</h5>
                          <span>Project Lead</span>
                        </div>
  
                      </div>
  
                    </blockquote>
  
                  </div>
  
                </div>
  
  
                {/* Right Column */}
                <div className="col-lg-4">
  
                  <div
                    className="sidebar"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
  
                    {/* Project Info */}
                    <div className="info-card">
                      <h3>Project Details</h3>
  
                      <div className="info-item">
                        <span className="label">Client</span>
                        <span className="value">TechCorp</span>
                      </div>
  
                      <div className="info-item">
                        <span className="label">Category</span>
                        <span className="value">Web Development</span>
                      </div>
  
                      <div className="info-item">
                        <span className="label">Duration</span>
                        <span className="value">8 Weeks</span>
                      </div>
  
                      <div className="info-item">
                        <span className="label">Technologies</span>
                        <span className="value">
                          React, Node.js, MongoDB
                        </span>
                      </div>
  
                      <a
                        href="https://example.com"
                        className="btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-box-arrow-up-right"></i>
                        {" "}View Live Project
                      </a>
  
                    </div>
  
  
                    {/* Share */}
                    <div className="share-card">
                      <h3>Share</h3>
  
                      <div className="social-links">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                      </div>
  
                    </div>
  
                  </div>
  
                </div>
  
              </div>
            </div>
  
          </section>
  
        </main>
  
  
        {/* Footer */}
        <footer id="footer" className="footer">
  
          <div className="container text-center">
  
            <h3>DonaTech</h3>
  
            <p>
              Delivering scalable web solutions with modern technologies.
            </p>
  
            <div className="social-links">
  
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
  
            </div>
  
            <p className="mt-3">
              © 2026 DonaTech. All Rights Reserved
            </p>
  
          </div>
  
        </footer>
  
      </div>
    );
  }