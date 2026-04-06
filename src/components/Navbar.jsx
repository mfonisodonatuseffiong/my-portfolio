import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        {/* Logo */}
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">DonaTech</h1>
        </Link>

        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {/* Call-to-action button */}
        <a className="btn-getstarted" href="#about">Get Started</a>
      </div>
    </header>
  );
}
