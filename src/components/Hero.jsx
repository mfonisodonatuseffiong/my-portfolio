import { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    typedRef.current = new Typed(".typed", {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Freelance Software Engineer",
        "Web Application Developer"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    AOS.init({
      duration: 1000,
      once: true,
    });

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section dark-background d-flex align-items-center">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          
          {/* Left-side text */}
          <div 
            className="col-lg-6 col-md-12 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start px-3 px-lg-5" 
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <div className="hero-content">
              {/* ✅ Name stays on one line */}
              <h2 className="mb-3 text-nowrap">Hi, I'm Mfoniso Donatus</h2>
              
              <p className="mb-2">
                I'm a <span className="typed"></span>
              </p>
              
              <p 
                className="tagline accent-text mb-4" 
                data-aos="fade-in" 
                data-aos-delay="300"
              >
                Building scalable apps with React & Node.js, powered by cloud and modern design.
              </p>

              {/* Social Links */}
              <div className="social-links d-flex justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="https://twitter.com/iamkaytwobaba" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter-x fs-4"></i>
                </a>
                <a href="https://facebook.com/kaytwobaba" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook fs-4"></i>
                </a>
                <a href="https://instagram.com/iamkaytwobabaofficial" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram fs-4"></i>
                </a>
                <a href="https://linkedin.com/in/mfonisodonatus" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
                <a href="https://github.com/mfonisodonatuseffiong" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github fs-4"></i>
                </a>
              </div>

              {/* Hero Actions */}
              <div className="hero-actions d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                <a href="#portfolio" className="btn btn-accent" role="button">View My Work</a>
                <a 
                  href="/assets/docs/Mfoniso-Donatus-CV.pdf" 
                  download="Mfoniso-Donatus-CV.pdf" 
                  className="btn btn-secondary" 
                  role="button"
                >
                  <i className="bi bi-download"></i> Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right-side image */}
          <div 
            className="col-lg-6 col-md-12 order-1 order-lg-2 text-center mb-4 mb-lg-0 d-flex justify-content-center" 
            data-aos="fade-in"
          >
            <img
              src="/assets/img/profile/pro22.webp"
              alt="Profile"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "700px", marginTop: "-40px" }}  // ✅ bigger and pushed up
            />
          </div>
        </div>
      </div>
    </section>
  );
}
