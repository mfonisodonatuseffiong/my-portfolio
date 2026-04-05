export default function Privacy() {
    return (
      <div className="privacy-page">
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
  
        {/* Main Content */}
        <main className="main">
          {/* Page Title */}
          <div className="page-title light-background">
            <div className="container">
              <nav className="breadcrumbs">
                <ol>
                  <li><a href="/">Home</a></li>
                  <li className="current">Privacy Policy</li>
                </ol>
              </nav>
              <h1>Privacy Policy</h1>
            </div>
          </div>
  
          {/* Privacy Section */}
          <section id="privacy-section" className="privacy-section section">
            <div className="container section-title" data-aos="fade-up">
              <span className="subtitle">Privacy Policy</span>
              <h2>Our Commitment to Your Privacy</h2>
              <p>
                We value your trust and are committed to protecting your personal information.
                This Privacy Policy explains how we collect, use, and safeguard your data when
                you interact with our services.
              </p>
            </div>
  
            <div className="container" data-aos="fade-up">
              <h3>Information We Collect</h3>
              <p>
                We may collect personal details such as your name, email address, phone number,
                and usage data when you use our services.
              </p>
  
              <h3>How We Use Your Information</h3>
              <p>
                Your information is used to provide and improve our services, communicate with you,
                and ensure security and compliance.
              </p>
  
              <h3>Data Protection</h3>
              <p>
                We implement industry-standard security measures to protect your data from unauthorized
                access, disclosure, alteration, or destruction.
              </p>
  
              <h3>Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please reach out to us at:
                <br />
                <strong>Email:</strong> mfonisodonatus@gmail.com <br />
                <strong>Phone:</strong> +234806819955
              </p>
            </div>
          </section>
        </main>
  
        {/* Footer */}
        <footer id="footer" className="footer">
          <div className="container footer-top">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-about">
                <a href="/" className="logo d-flex align-items-center">
                  <span className="sitename">DonaTech</span>
                </a>
                <p>
                  Delivering scalable web solutions with modern technologies and a passion
                  for innovation.
                </p>
                <div className="social-links d-flex mt-4">
                  <a href="#"><i className="bi bi-twitter-x"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/mfoniso-donatus"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
  
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/#about">About Me</a></li>
                  <li><a href="/#services">Services</a></li>
                  <li><a href="/terms">Terms of Service</a></li>
                  <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
              </div>
  
              <div className="col-lg-2 col-6 footer-links">
                <h4>My Services</h4>
                <ul>
                  <li><a href="/#services">Web Design</a></li>
                  <li><a href="/#services">Web Development</a></li>
                  <li><a href="/#services">UI/UX Design</a></li>
                  <li><a href="/#services">Mobile Apps</a></li>
                  <li><a href="/#services">Security</a></li>
                </ul>
              </div>
  
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Me</h4>
                <p>#5 Cosmos Close, Uyo</p>
                <p>Akwa Ibom State</p>
                <p>Nigeria</p>
                <p className="mt-4"><strong>Phone:</strong> <span>+234806819955</span></p>
                <p><strong>Email:</strong> <span>mfonisodonatus@gmail.com</span></p>
              </div>
            </div>
          </div>
  
          <div className="container copyright text-center mt-4">
            <p>
              © <span>Copyright</span> <strong className="px-1 sitename">DonaTech</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
            <div className="credits">
              Designed by <a href="#">DonaTech</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  