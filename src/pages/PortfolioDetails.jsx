import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
                <li className="current">UyoFood</li>
              </ol>
            </nav>
            <h1>UyoFood — Live Food Ordering Platform</h1>
          </div>
        </div>

        {/* Portfolio Details */}
        <section id="portfolio-details" className="portfolio-details section">
          <div className="container section-title" data-aos="fade-up">
            <span className="subtitle">Case Study</span>
            <h2>UyoFood</h2>
            <p>
              A closer look at UyoFood — a live, revenue-generating food-ordering platform
              I independently designed, built, deployed, and continue to operate.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              {/* Left Column */}
              <div className="col-lg-8">
                {/* Swiper Slider */}
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  spaceBetween={30}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img src="/assets/img/portfolio/uyofood.png" alt="UyoFood screenshot" className="img-fluid" />
                  </SwiperSlide>
                </Swiper>

                {/* Content */}
                <div className="portfolio-content" data-aos="fade-up" data-aos-delay="200">
                  <h2>Live Food Ordering Platform</h2>

                  <div className="meta-info">
                    <span className="date"><i className="bi bi-calendar"></i> 2026 – Present</span>
                    <span className="category"><i className="bi bi-tag"></i> Full-Stack Web Application</span>
                    <span className="client"><i className="bi bi-building"></i> Independent / Self-Directed</span>
                  </div>

                  <p>
                    UyoFood connects real customers and restaurants for online food ordering.
                    I designed, built, deployed, and now operate the platform end to end —
                    including a live restaurant partner and real paying customers.
                  </p>

                  <h3>Project Overview</h3>
                  <p>
                    The platform handles the full order lifecycle: browsing, checkout, secure
                    payment, and real-time order tracking — backed by production infrastructure
                    I configured and maintain myself, including the domain, DNS, and hosting.
                  </p>

                  <div className="highlights-box">
                    <h4>Key Highlights</h4>
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Paystack payments with server-side verification and webhook processing</li>
                      <li><i className="bi bi-check-circle"></i> Real-time order tracking with Socket.io</li>
                      <li><i className="bi bi-check-circle"></i> JWT authentication, Helmet, CSP, and rate limiting</li>
                      <li><i className="bi bi-check-circle"></i> Custom domain, DNS, and production hosting configured end to end</li>
                      <li><i className="bi bi-check-circle"></i> Live incident response — traced and resolved a production network outage</li>
                    </ul>
                  </div>

                  <h3>Technical Implementation</h3>
                  <p>
                    Built with React.js, Node.js, Express.js, and PostgreSQL (Neon), with
                    Paystack for payments and Socket.io for real-time updates.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-4">
                <div className="sidebar" data-aos="fade-up" data-aos-delay="200">
                  {/* Project Info */}
                  <div className="info-card">
                    <h3>Project Details</h3>
                    <div className="info-item"><span className="label">Client</span><span className="value">Independent</span></div>
                    <div className="info-item"><span className="label">Category</span><span className="value">Food Ordering Platform</span></div>
                    <div className="info-item"><span className="label">Status</span><span className="value">Live, in production</span></div>
                    <div className="info-item"><span className="label">Technologies</span><span className="value">React, Node.js, Express, PostgreSQL</span></div>
                    <a href="https://www.uyofood.com" className="btn-primary" target="_blank" rel="noreferrer">
                      <i className="bi bi-box-arrow-up-right"></i> View Live Project
                    </a>
                  </div>

                  {/* Share */}
                  <div className="share-card">
                    <h3>Share</h3>
                    <div className="social-links">
                      <a href="https://www.facebook.com/sharer/sharer.php?u=https://my-portfolio-n6rg.vercel.app" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                      <a href="https://twitter.com/intent/tweet?url=https://my-portfolio-n6rg.vercel.app" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
                      <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://my-portfolio-n6rg.vercel.app" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
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
          <p>Delivering scalable web solutions with modern technologies.</p>
          <div className="social-links">
            <a href="https://linkedin.com/in/mfoniso-donatus-b4a23b402" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/mfonisodonatuseffiong" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
          </div>
          <p className="mt-3">© 2026 DonaTech. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
