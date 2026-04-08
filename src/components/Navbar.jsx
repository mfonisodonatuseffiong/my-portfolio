import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [mobileActive, setMobileActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileActive(!mobileActive);
    document.body.classList.toggle("mobile-nav-active", !mobileActive);
  };

  // ✅ Close mobile nav when a link is clicked
  const closeMobileNav = () => {
    setMobileActive(false);
    document.body.classList.remove("mobile-nav-active");
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        {/* Logo */}
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">DonaTech</h1>
        </Link>

        {/* Navigation Menu */}
        <nav id="navmenu" className={`navmenu ${mobileActive ? "mobile-nav-active" : ""}`}>
          <ul>
            <li><a href="#hero" className="active" onClick={closeMobileNav}>Home</a></li>
            <li><a href="#about" onClick={closeMobileNav}>About</a></li>
            <li><a href="#resume" onClick={closeMobileNav}>Resume</a></li>
            <li><a href="#services" onClick={closeMobileNav}>Services</a></li>
            <li><a href="#portfolio" onClick={closeMobileNav}>Portfolio</a></li>
            <li><a href="#contact" onClick={closeMobileNav}>Contact</a></li>
          </ul>
          {/* Toggle icon */}
          <i
            className={`mobile-nav-toggle d-xl-none bi ${mobileActive ? "bi-x" : "bi-list"}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        {/* Call-to-action button */}
        <a className="btn-getstarted" href="#about" onClick={closeMobileNav}>Get In Touch</a>
      </div>
    </header>
  );
}
