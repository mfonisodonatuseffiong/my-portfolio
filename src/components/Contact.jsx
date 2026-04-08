import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // ✅ track loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Error sending message. Please try again later.");
    } finally {
      setLoading(false); // ✅ stop spinner
    }
  };

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Contact</span>
        <h2>Contact</h2>
        <p>
          Interested in working together or have a project in mind? Feel free to
          reach out through any of the channels below.
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
                <p>
                  <a href="tel:+2348068199955">+2348068199955</a>
                </p>
              </div>
            </div>

            <div className="info-item d-flex align-items-start mb-4">
              <div className="icon-wrapper me-3">
                <i className="bi bi-envelope fs-4"></i>
              </div>
              <div>
                <h3>Email Me</h3>
                <p>
                  <a href="mailto:mfonisodonatus@gmail.com">
                    mfonisodonatus@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8 col-md-12">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-accent w-100 w-sm-auto"
                    disabled={loading} // ✅ disable while sending
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>

                {/* ✅ Feedback message */}
                {status && (
                  <div className="col-md-12 text-center mt-3">
                    <p
                      style={{
                        color: status.startsWith("✅") ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {status}
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
