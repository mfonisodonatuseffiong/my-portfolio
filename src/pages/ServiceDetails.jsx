import React from "react";

const ServiceDetails = () => {
  return (
    <div className="service-details-page">

      {/* Header */}
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
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
                <li className="current">Service Details</li>
              </ol>
            </nav>
            <h1>Service Details</h1>
          </div>
        </div>

        {/* Service Details Section */}
        <section id="service-details" className="service-details section">
          <div className="container">
            <div className="row">

              {/* Sidebar */}
              <div className="col-lg-4 order-lg-2">
                <div className="sticky-sidebar">

                  <div className="service-card">
                    <div className="card-header">
                      <div className="service-icon">
                        <i className="bi bi-code-square"></i>
                      </div>
                      <h3>Web Development</h3>
                      <p className="service-tagline">Full-Stack Solutions</p>
                    </div>

                    <div className="card-body">
                      <div className="price-tag">
                        <span className="label">Starting at</span>
                        <span className="price">$2,500</span>
                      </div>

                      <ul className="quick-info">
                        <li><i className="bi bi-clock"></i> 4-6 weeks delivery</li>
                        <li><i className="bi bi-arrow-repeat"></i> Unlimited revisions</li>
                        <li><i className="bi bi-shield-check"></i> 60 days support</li>
                      </ul>

                      <div className="cta-buttons">
                        <a href="#" className="btn-primary">Start Project</a>
                        <a href="#" className="btn-secondary">Schedule Call</a>
                      </div>
                    </div>
                  </div>

                  {/* Contact Card */}
                  <div className="contact-card">
                    <h4>Have Questions?</h4>
                    <p>Let's discuss your project requirements</p>
                    <div className="contact-methods">
                      <a href="mailto:mfonisodonatus@gmail.com" className="contact-item">
                        <i className="bi bi-envelope"></i> mfonisodonatus@gmail.com
                      </a>
                      <a href="tel:+234806819955" className="contact-item">
                        <i className="bi bi-telephone"></i> +234806819955
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Main Content */}
              <div className="col-lg-8 order-lg-1">
                <div className="service-overview">
                  <span className="badge">Premium Service</span>
                  <h2>Professional Web Development That Drives Results</h2>
                  <p className="lead-text">
                    Transform your digital presence with custom web solutions built to perform.
                  </p>
                </div>

                {/* Image */}
                <div className="service-image-showcase">
                  <img
                    src="/assets/img/services/services-1.webp"
                    alt="Web Development"
                    className="img-fluid"
                  />
                  <div className="image-overlay">
                    <div className="tech-stack">
                      <span>React</span>
                      <span>Node</span>
                      <span>MongoDB</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="features-grid">
                  <h3>What You Get</h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="bi bi-layers"></i>
                        <h4>Modern Architecture</h4>
                        <p>Scalable and maintainable code</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="bi bi-speedometer2"></i>
                        <h4>Lightning Fast</h4>
                        <p>Optimized performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiceDetails;
