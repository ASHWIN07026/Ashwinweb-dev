import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ✅ Fixed: correct Render backend URL
const BACKEND_URL = import.meta.env.VITE_API_URL || "https://ashwinweb-dev-1.onrender.com";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const name    = form.current.name.value.trim();
    const email   = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    // ── 1. Send via EmailJS ──
    try {
      await emailjs.sendForm(
        "service_pyfojhz",
        "template_ne4ild7",
        form.current,
        "gHBuPsFYHnmfnk2ts"   // ✅ Fixed: was "gHBusPsFYHnmfnk2ts" (extra 's')
      );
    } catch (err) {
      console.warn("EmailJS warning:", err);
    }

    // ── 2. Save to Supabase via backend ──
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Server error");

      setStatus("success");
      form.current.reset();
    } catch (err) {
      console.error("Backend error:", err.message);
      setErrorMsg(err.message || "Failed to send message.");
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>I'm always open to networking, feedback, or collaboration opportunities</p>
        </div>

        <div className="contact-content">

          {/* ── LEFT SIDE ── */}
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              I'm always open to networking, feedback, or collaboration
              opportunities. Whether it's about AI, design, or building
              futuristic experiences — feel free to reach out!
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:sa0323165@gmail.com">sa0323165@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:+917553103183">+91 7553103183</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Tiruppur, Tamil Nadu</p>
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className="contact-socials">
              <a
                href="https://www.linkedin.com/in/ashwin-s-650b48329"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                href="https://github.com/ASHWIN07026"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="mailto:sa0323165@gmail.com"
                className="contact-social-btn"
                title="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>

              <a
                href="https://www.fiverr.com/users/aj_kum123"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn contact-social-fiverr"
                title="Fiverr"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1dbf73"
                  aria-hidden="true"
                >
                  <path d="M10.5 5.5a1.5 1.5 0 0 1 1.5-1.5h1v2h2v2h-2v8h-2V8H9V6h1.5V5.5z"/>
                  <path d="M15 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1 1.5h2v8h-2V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT SIDE FORM ── */}
          <div className="contact-form-wrap">
            <form ref={form} onSubmit={sendEmail} noValidate>

              <div className="form-group">
                <label htmlFor="contact-name">YOUR NAME</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  autoComplete="name"
                  disabled={status === "sending"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">YOUR EMAIL</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  autoComplete="email"
                  disabled={status === "sending"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">YOUR MESSAGE</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  disabled={status === "sending"}
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="form-status form-status--success">
                  <i className="fas fa-check-circle"></i>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="form-status form-status--error">
                  <i className="fas fa-exclamation-circle"></i>
                  {errorMsg || "Something went wrong. Please try again."}
                </div>
              )}

              <button
                type="submit"
                className="btn-send"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
