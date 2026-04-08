import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [mobileActive, setMobileActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileActive(!mobileActive);
    document.body.classList.toggle("mobile-nav-active", !mobileActive);
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
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          {/* Toggle icon */}
          <i
            className={`mobile-nav-toggle d-xl-none bi ${mobileActive ? "bi-x" : "bi-list"}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        {/* Call-to-action button */}
        <a className="btn-getstarted" href="#about">Get In Touch</a>
      </div>
    </header>
  );
}
