function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know more about my journey and passion for technology</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm Ashwin S</h3>
            <p>
              I'm a third-year AI and Data Science student with a passion for building practical solutions using technology.
              I enjoy creating smart, AI-powered tools along with strong backend systems that make them work.
            </p>
            <p>
              My passion lies in always being ready to take on real-world problems and deliver scalable solutions with the help of AI.
              My focus is on using coding and automation to make a meaningful impact.
            </p>
            <p>
              🌐 Code Locally, Impact Globally
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Certifications</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Learning</div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=500&fit=crop"
              alt="Ashwin S working on AI projects"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;