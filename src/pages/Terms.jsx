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
  
        {/* Main */}
        <main className="main">
          {/* Page Title */}
          <div className="page-title light-background">
            <div className="container">
              <nav className="breadcrumbs">
                <ol>
                  <li><a href="/">Home</a></li>
                  <li className="current">Terms of Service</li>
                </ol>
              </nav>
              <h1>Terms of Service</h1>
            </div>
          </div>
  
          {/* Terms Section */}
          <section id="terms-of-service" className="terms-of-service section">
            <div className="container" data-aos="fade-up">
              <div className="tos-header text-center">
                <span className="last-updated">Last Updated: February 27, 2025</span>
                <h2>Terms of Service</h2>
                <p>Please read these terms carefully before using our services.</p>
              </div>
  
              <div className="tos-content">
                <div className="content-section">
                  <h3>1. Agreement to Terms</h3>
                  <p>By accessing our website and services, you agree to be bound by these Terms of Service.</p>
                </div>
  
                <div className="content-section">
                  <h3>2. Intellectual Property Rights</h3>
                  <p>All content is our exclusive property and protected by copyright laws.</p>
                </div>
  
                <div className="content-section">
                  <h3>3. User Accounts</h3>
                  <p>You must provide accurate information when creating an account and safeguard your password.</p>
                </div>
  
                <div className="content-section">
                  <h3>4. Prohibited Activities</h3>
                  <ul>
                    <li>Unauthorized access</li>
                    <li>Publishing malicious content</li>
                    <li>Systematic retrieval of data</li>
                    <li>Unauthorized framing</li>
                  </ul>
                </div>
  
                <div className="content-section">
                  <h3>5. Disclaimer</h3>
                  <p>Our services are provided “as is” without warranties of any kind.</p>
                </div>
  
                <div className="content-section">
                  <h3>6. Governing Law</h3>
                  <p>These Terms are governed by the laws of Nigeria.</p>
                </div>
              </div>
  
              {/* Contact */}
              <div className="tos-contact">
                <h4>Questions About Terms?</h4>
                <p>
                  Contact us at <a href="mailto:mfonisodonatus@gmail.com">mfonisodonatus@gmail.com</a>
                </p>
              </div>
            </div>
          </section>
        </main>
  
        {/* Footer */}
        <footer id="footer" className="footer">
          <div className="container text-center">
            <h3>DonaTech</h3>
            <p>Delivering scalable web solutions with modern technologies.</p>
            <p>© 2026 DonaTech. All Rights Reserved</p>
          </div>
        </footer>
      </div>
    );
  }
  