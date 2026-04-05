export default function Terms() {
    return (
      <div className="terms-page">
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
  
            <a className="btn-getstarted" href="/#about">Get Started</a>
          </div>
        </header>
  
        <main className="main">
          {/* Page Title */}
          <div className="page-title light-background">
            <div className="container">
              <nav className="breadcrumbs">
                <ol>
                  <li><a href="/">Home</a></li>
                  <li className="current">Terms</li>
                </ol>
              </nav>
              <h1>Terms</h1>
            </div>
          </div>
  
          {/* Terms Section */}
          <section id="terms-of-service" className="terms-of-service section">
            <div className="container" data-aos="fade-up">
  
              <div className="tos-header text-center">
                <span className="last-updated">
                  Last Updated: February 27, 2025
                </span>
                <h2>Terms of Service</h2>
                <p>
                  Please read these terms of service carefully before using our services
                </p>
              </div>
  
              <div className="tos-content">
  
                {/* Agreement */}
                <div className="content-section">
                  <h3>1. Agreement to Terms</h3>
                  <p>
                    By accessing our website and services, you agree to be bound by
                    these Terms of Service and all applicable laws.
                  </p>
  
                  <div className="info-box">
                    <i className="bi bi-info-circle"></i>
                    <p>
                      These terms apply to all users, visitors, and others who use
                      our services.
                    </p>
                  </div>
                </div>
  
                {/* Intellectual Property */}
                <div className="content-section">
                  <h3>2. Intellectual Property Rights</h3>
                  <p>
                    Our service and its original content are protected by
                    international copyright laws.
                  </p>
  
                  <ul className="list-items">
                    <li>All content is our exclusive property</li>
                    <li>You may not copy or modify content</li>
                    <li>Our trademarks may not be used</li>
                    <li>Personal use only</li>
                  </ul>
                </div>
  
                {/* User Accounts */}
                <div className="content-section">
                  <h3>3. User Accounts</h3>
                  <p>
                    When you create an account, you must provide accurate
                    information.
                  </p>
  
                  <div className="alert-box">
                    <i className="bi bi-exclamation-triangle"></i>
  
                    <div className="alert-content">
                      <h5>Important Notice</h5>
                      <p>
                        You are responsible for safeguarding your password.
                      </p>
                    </div>
                  </div>
                </div>
  
                {/* Prohibited */}
                <div className="content-section">
                  <h3>4. Prohibited Activities</h3>
  
                  {[
                    "Systematic retrieval of data",
                    "Publishing malicious content",
                    "Unauthorized framing",
                    "Unauthorized access",
                  ].map((item, idx) => (
                    <div className="prohibited-item" key={idx}>
                      <i className="bi bi-x-circle"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
  
                {/* Disclaimer */}
                <div className="content-section">
                  <h3>5. Disclaimers</h3>
  
                  <ul>
                    <li>Service may contain errors</li>
                    <li>Service may be interrupted</li>
                    <li>No guaranteed accuracy</li>
                    <li>Errors may not be corrected</li>
                  </ul>
                </div>
  
                {/* Governing Law */}
                <div className="content-section">
                  <h3>6. Governing Law</h3>
                  <p>
                    These Terms are governed by the laws of Nigeria.
                  </p>
                </div>
  
              </div>
  
              {/* Contact */}
              <div className="tos-contact">
                <div className="contact-box">
                  <i className="bi bi-envelope"></i>
  
                  <div>
                    <h4>Questions About Terms?</h4>
                    <a href="mailto:mfonisodonatus@gmail.com">
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
  
            </div>
          </section>
        </main>
  
        {/* Footer */}
        <footer id="footer" className="footer">
          <div className="container footer-top">
  
            <div className="row gy-4">
  
              <div className="col-lg-5 footer-about">
                <span className="sitename">DonaTech</span>
  
                <p>
                  Delivering scalable web solutions with modern technologies.
                </p>
              </div>
  
              <div className="col-lg-3 footer-contact">
                <h4>Contact</h4>
  
                <p>#5 Cosmos Close, Uyo</p>
                <p>Akwa Ibom</p>
                <p>Nigeria</p>
  
                <p>
                  <strong>Email:</strong> mfonisodonatus@gmail.com
                </p>
              </div>
  
            </div>
  
          </div>
  
          <div className="container text-center mt-4">
            <p>
              © Copyright <strong>DonaTech</strong> All Rights Reserved
            </p>
          </div>
  
        </footer>
  
      </div>
    );
  }