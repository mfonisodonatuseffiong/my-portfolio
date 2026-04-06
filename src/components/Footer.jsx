export default function Footer() {
    return (
      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            {/* About */}
            <div className="col-lg-5 col-md-12 footer-about">
              <a href="/" className="logo d-flex align-items-center">
                <span className="sitename">DonaTech</span>
              </a>
              <p>
                Building scalable and user‑friendly web applications with modern technologies.
                Passionate about creating impactful digital solutions.
              </p>
              <div className="social-links d-flex mt-4">
                <a href="https://twitter.com/yourhandle"><i className="bi bi-twitter-x"></i></a>
                <a href="https://facebook.com/yourhandle"><i className="bi bi-facebook"></i></a>
                <a href="https://instagram.com/yourhandle"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/mfoniso-donatus"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
  
            {/* Useful Links */}
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
  
            {/* Services */}
            <div className="col-lg-2 col-6 footer-links">
              <h4>My Services</h4>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Mobile Apps</a></li>
                <li><a href="#services">Security</a></li>
              </ul>
            </div>
  
            {/* Contact */}
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Me</h4>
              <p>5 Cosmos Close, Uyo</p>
              <p>Akwa Ibom State, Nigeria</p>
              <p className="mt-4"><strong>Phone:</strong> <span>+234806819955</span></p>
              <p><strong>Email:</strong> <span>mfonisodonatus@gmail.com</span></p>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="container copyright text-center mt-4">
    <p>
    © <span>Copyright</span> 
    <strong className="px-1 footer-sitename">Mfoniso Donatus</strong> 
    <span>All Rights Reserved</span>
  </p>
  <div className="credits">
    Designed by <a href="#">DonaTech</a>
  </div>
</div>
      </footer>
    );
  }
  