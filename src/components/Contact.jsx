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
            <div className="col-lg-4">
              <div className="info-item">
                <div className="icon-wrapper">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h3>Address</h3>
                  <p>Akwa Ibom State, Nigeria</p>
                </div>
              </div>
  
              <div className="info-item">
                <div className="icon-wrapper">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h3>Call Me</h3>
                  <p>+234806819955</p>
                </div>
              </div>
  
              <div className="info-item">
                <div className="icon-wrapper">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h3>Email Me</h3>
                  <p>mfonisodonatus@gmail.com</p>
                </div>
              </div>
            </div>
  
            {/* Contact Form */}
            <div className="col-lg-8">
              <form className="php-email-form">
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
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
  
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  