function FiverrIcon() {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "80%",
        background: "#1dbf73",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        fontWeight: "bold",
        fontFamily: "Arial",
      }}
    >
      fi
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-content">

        <div className="footer-info">
          <p>© 2026 Ashwin S | Portfolio Website</p>
          <p>Location: Tiruppur, Tamil Nadu</p>
        </div>

        <div className="footer-social">

          <a
            href="https://www.linkedin.com/in/ashwin-s-650b48329"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/ASHWIN07026"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <a href="mailto:sa0323165@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>

          {/* Fiverr */}
          <a
            href="https://www.fiverr.com/s/bdR0X2m"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiverrIcon />
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;