export default function Starter() {
    return (
      <div className="starter-page">
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
                  <li className="current">Starter Page</li>
                </ol>
              </nav>
              <h1>Starter Page</h1>
            </div>
          </div>
  
          {/* Starter Section */}
          <section id="starter-section" className="starter-section section">
            <div className="container section-title" data-aos="fade-up">
              <span className="subtitle">Starter Section</span>
              <h2>Starter Section</h2>
              <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium totam rem aperiam.
              </p>
            </div>
  
            <div className="container" data-aos="fade-up">
              <p>Use this page as a starter for your own custom pages.</p>
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
                <p>Ikot Mbonde</p>
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
  