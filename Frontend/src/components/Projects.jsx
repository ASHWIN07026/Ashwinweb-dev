import { useEffect, useRef, useState } from "react";

const PROJECT_IMAGES = {
  "food-order": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=280&fit=crop",
  "task-management-application": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=280&fit=crop",
  "personal-portfolio": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=280&fit=crop",
  "ubercopy": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=280&fit=crop",
  "ai-comment-filter": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&h=280&fit=crop",
  "food-deliver": "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500&h=280&fit=crop",
  "smart-civic-ai": "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&h=280&fit=crop",
  "detail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=280&fit=crop",
  "cgpa_calculator_webapp": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=280&fit=crop",
  "ashwin-site": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=280&fit=crop",
  "weather.site": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=280&fit=crop",
};

const getFallbackImage = (repoName) => {
  const name = repoName.toLowerCase();
  if (name.includes("food") || name.includes("order") || name.includes("deliver"))
    return "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=280&fit=crop";
  if (name.includes("task") || name.includes("todo") || name.includes("management"))
    return "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=280&fit=crop";
  if (name.includes("portfolio") || name.includes("site") || name.includes("web"))
    return "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=280&fit=crop";
  if (name.includes("ai") || name.includes("ml") || name.includes("bot") || name.includes("smart"))
    return "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&h=280&fit=crop";
  if (name.includes("weather"))
    return "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=280&fit=crop";
  if (name.includes("calc") || name.includes("cgpa"))
    return "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=280&fit=crop";
  if (name.includes("uber") || name.includes("ride"))
    return "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=280&fit=crop";
  return "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=280&fit=crop";
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });

  useEffect(() => {
    const slider = scrollRef.current;
    const autoSlide = setInterval(() => {
      if (slider) {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: 380, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [projects]);

  useEffect(() => {
    let isMounted = true;
    const loadProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/ASHWIN07026/repos?sort=updated&per_page=12");
        const repos = await response.json();
        const githubProjects = repos
          .filter((repo) => !repo.fork && !repo.private)
          .map((repo) => {
            const key = repo.name.toLowerCase();
            const image = PROJECT_IMAGES[key] || getFallbackImage(repo.name);
            return {
              id: repo.id,
              title: repo.name.replace(/[-_]/g, " "),
              description: repo.description || "A modern project from my GitHub portfolio.",
              github: repo.html_url,
              demo: repo.homepage || null,
              status: repo.homepage ? "live" : "active",
              tech: repo.language ? [repo.language] : ["Web"],
              image,
            };
          });
        if (isMounted) { setProjects(githubProjects); setLoading(false); }
      } catch (error) { console.error(error); setLoading(false); }
    };
    loadProjects();
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <section id="projects">
        <div className="container">
          <div className="section-title">
            <h2>Featured Projects</h2>
            <p>Loading Projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <style>{`
        #projects { padding: 80px 0; }
        #projects .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        #projects .section-title { text-align: center; margin-bottom: 40px; }
        #projects .section-title h2 {
          font-size: 2rem;
          color: #00e5ff;
          font-weight: 700;
          margin-bottom: 10px;
        }
        #projects .section-title p { color: #a0a0a0; font-size: 1rem; }

        .project-scroll-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-bottom: 20px;
          padding-right: 10px;
        }
        .project-scroll-buttons button {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(0, 229, 255, 0.5);
          background: rgba(0, 229, 255, 0.08);
          color: #00e5ff;
          font-size: 1rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s ease;
        }
        .project-scroll-buttons button:hover {
          background: rgba(0, 229, 255, 0.2);
          border-color: #00e5ff;
          box-shadow: 0 0 14px rgba(0, 229, 255, 0.3);
          transform: scale(1.08);
        }

        .projects-slider {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding-bottom: 16px;
          scrollbar-width: none;
        }
        .projects-slider::-webkit-scrollbar { display: none; }

        .project-card {
          min-width: 320px; max-width: 320px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 229, 255, 0.15);
          border-radius: 16px;
          overflow: hidden;
          flex-shrink: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 229, 255, 0.4);
          box-shadow: 0 8px 30px rgba(0, 229, 255, 0.12);
        }

        .project-image { width: 100%; height: 190px; overflow: hidden; }
        .project-image img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-image img { transform: scale(1.06); }

        .project-content { padding: 18px 20px; }
        .project-header {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 10px; margin-bottom: 10px;
        }
        .project-title {
          font-size: 1rem; font-weight: 700;
          color: #fff; margin: 0;
          text-transform: capitalize; line-height: 1.3;
        }
        .project-status {
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 3px 10px; border-radius: 20px;
          white-space: nowrap; flex-shrink: 0;
        }
        .status-live {
          background: rgba(0, 229, 100, 0.15);
          color: #00e564; border: 1px solid rgba(0, 229, 100, 0.35);
        }
        .status-active {
          background: rgba(0, 229, 255, 0.1);
          color: #00e5ff; border: 1px solid rgba(0, 229, 255, 0.3);
        }
        .project-description {
          font-size: 0.85rem; color: #9a9a9a;
          line-height: 1.6; margin: 0 0 14px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .project-tech { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 16px; }
        .tech-tag {
          font-size: 0.7rem; font-weight: 600;
          padding: 4px 12px; border-radius: 20px;
          background: rgba(0, 229, 255, 0.1);
          color: #00e5ff; border: 1px solid rgba(0, 229, 255, 0.25);
        }
        .project-links { display: flex; gap: 10px; align-items: center; }
        .project-source, .project-demo {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; text-decoration: none;
          transition: all 0.3s ease;
        }
        .project-source {
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid rgba(0, 229, 255, 0.35);
          color: #00e5ff;
        }
        .project-source:hover {
          background: rgba(0, 229, 255, 0.22);
          border-color: #00e5ff;
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.3);
          transform: scale(1.1);
        }
        .project-demo {
          background: rgba(0, 229, 100, 0.1);
          border: 1px solid rgba(0, 229, 100, 0.35);
          color: #00e564;
        }
        .project-demo:hover {
          background: rgba(0, 229, 100, 0.22);
          border-color: #00e564;
          box-shadow: 0 0 12px rgba(0, 229, 100, 0.3);
          transform: scale(1.1);
        }

        /* ── TABLET 1024px ── */
        @media (max-width: 1024px) {
          .project-card { min-width: 280px; max-width: 280px; }
          .project-image { height: 170px; }
          #projects .section-title h2 { font-size: 1.75rem; }
        }

        /* ── MOBILE 768px ── */
        @media (max-width: 768px) {
          #projects { padding: 60px 0; }
          #projects .section-title h2 { font-size: 1.5rem; }
          #projects .section-title p { font-size: 0.9rem; }
          #projects .container { padding: 0 16px; }
          .project-card { min-width: 260px; max-width: 260px; }
          .project-image { height: 160px; }
          .projects-slider { gap: 16px; }
          .project-scroll-buttons { justify-content: center; padding-right: 0; }
        }

        /* ── SMALL MOBILE 480px ── */
        @media (max-width: 480px) {
          #projects { padding: 50px 0; }
          #projects .container { padding: 0 12px; }
          #projects .section-title h2 { font-size: 1.3rem; }
          .project-card { min-width: 82vw; max-width: 82vw; }
          .project-image { height: 150px; }
          .project-content { padding: 14px 16px; }
          .project-title { font-size: 0.92rem; }
          .project-description { font-size: 0.8rem; }
          .project-scroll-buttons button { width: 38px; height: 38px; font-size: 0.85rem; }
          .tech-tag { font-size: 0.65rem; padding: 3px 9px; }
        }
      `}</style>

      <section id="projects">
        <div className="container">
          <div className="section-title">
            <h2>Featured Projects</h2>
            <p>Showcasing my latest work and innovations</p>
          </div>

          <div className="project-scroll-buttons">
            <button onClick={scrollLeft} title="Previous"><i className="fas fa-arrow-left"></i></button>
            <button onClick={scrollRight} title="Next"><i className="fas fa-arrow-right"></i></button>
          </div>

          <div className="projects-slider" ref={scrollRef}>
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className={`project-status status-${project.status}`}>{project.status}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-source" title="View Source">
                      <i className="fab fa-github"></i>
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-demo" title="Live Demo">
                        <i className="fas fa-globe"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;