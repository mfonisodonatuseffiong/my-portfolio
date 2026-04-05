import { useEffect } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".typed", {
      strings: ["Frontend Developer", " Backend Developer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    return () => {
      typed.destroy(); // cleanup when component unmounts
    };
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img
        src="/assets/img/profile/pro.webp"
        alt="Background"
        data-aos="fade-in"
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2>Hi, I'm Mfoniso Donatus</h2>
            <p>
              I'm a <span className="typed"></span>
            </p>
            <div className="social-links">
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
