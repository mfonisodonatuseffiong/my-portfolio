export default function Contact() {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Contact</span>
        <h2>Contact</h2>
        <p>
          Interested in working together or have a project in mind? Feel free to reach out
          through any of the channels below.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-lg-4 col-md-12">
            <div className="info-item d-flex align-items-start mb-4">
              <div className="icon-wrapper me-3">
                <i className="bi bi-geo-alt fs-4"></i>
              </div>
              <div>
                <h3>Address</h3>
                <p>Akwa Ibom State, Nigeria</p>
              </div>
            </div>

            <div className="info-item d-flex align-items-start mb-4">
              <div className="icon-wrapper me-3">
                <i className="bi bi-telephone fs-4"></i>
              </div>
              <div>
                <h3>Call Me</h3>
                <p><a href="tel:+234806819955">+234806819955</a></p>
              </div>
            </div>

            <div className="info-item d-flex align-items-start mb-4">
              <div className="icon-wrapper me-3">
                <i className="bi bi-envelope fs-4"></i>
              </div>
              <div>
                <h3>Email Me</h3>
                <p><a href="mailto:mfonisodonatus@gmail.com">mfonisodonatus@gmail.com</a></p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8 col-md-12">
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field" 
              className="php-email-form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-accent w-100 w-sm-auto">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
