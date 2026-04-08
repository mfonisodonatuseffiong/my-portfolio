import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"; // ✅ SEO support

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Extra pages
import PortfolioDetails from "./pages/PortfolioDetails";
import ServiceDetails from "./pages/ServiceDetails";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound"; // <-- must have `export default` in NotFound.jsx

export default function App() {
  return (
    <Router>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Mfoniso Donatus | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Mfoniso Donatus showcasing projects, skills, and contact information."
        />
        <meta
          name="keywords"
          content="Mfoniso Donatus, portfolio, web developer, projects, contact"
        />
        <meta name="author" content="Mfoniso Donatus" />
        <meta property="og:title" content="Mfoniso Donatus | Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Mfoniso Donatus showcasing projects, skills, and contact information."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.vercel.app/" />
        <meta property="og:image" content="/preview.png" />
      </Helmet>

      <Navbar />
      <main className="main">
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Resume />
                <Services />
                <Portfolio />
                <Contact /> {/* ✅ Contact section includes your ContactForm */}
              </>
            }
          />

          {/* Portfolio details routes */}
          <Route path="/portfolio-details" element={<PortfolioDetails />} />

          {/* Service details */}
          <Route path="/service-details" element={<ServiceDetails />} />

          {/* Legal pages */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
