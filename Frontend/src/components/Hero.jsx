function FiverrIcon() {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
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

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm Ashwin S</h1>

          <h2>AI & Data Science Enthusiast</h2>

          <p>
            AI Engineer | Critical Thinker | Full Stack Developer
            <br />
            Building Intelligent Applications • Cloud Computing Enthusiast
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>

            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>

            <a
              href="https://drive.google.com/file/d/16HZTUPG1Qw5wt2iOO7KxHIkMQZ2y8894/view?usp=sharing"
              className="btn btn-tertiary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://www.linkedin.com/in/ashwin-s-650b48329"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/ASHWIN07026"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="mailto:sa0323165@gmail.com"
              className="social-link"
            >
              <i className="fas fa-envelope"></i>
            </a>

            <a
              href="tel:+917553103183"
              className="social-link"
            >
              <i className="fas fa-phone"></i>
            </a>

            {/* Fiverr */}
            <a
              href="https://www.fiverr.com/s/bdR0X2m"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FiverrIcon />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/Profile.png" alt="Ashwin S" />
        </div>
      </div>
    </section>
  );
}

export default Hero;