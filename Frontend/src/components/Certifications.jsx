import { useEffect, useRef } from "react";

const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    icon: "fab fa-aws",
    badge: "Completed",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=280&fit=crop",
    link: "https://drive.google.com/file/d/1JbscizDetP3J3RzpZ4n9nnVVrcCcgos-/view?usp=drive_link"
  },
  {
    title: "IBM SkillsBuild Web Development",
    issuer: "IBM SkillsBuild",
    icon: "fas fa-code",
    badge: "Certified",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=280&fit=crop",
    link: "https://drive.google.com/file/d/1LBL3J7eLQ6EDg3a6PaW5DnEklTlq5as6/view?usp=drive_link"
  },
  {
    title: "Tamizhan Skills Internship",
    issuer: "Infosys",
    icon: "fas fa-laptop-code",
    badge: "Completed",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=280&fit=crop",
    link: "https://drive.google.com/file/d/1dJWNmH3xQdQit4lrsH1Ewxz2RRuddm6E/view?usp=drive_link"
  },
  {
    title: "TCS iON Career Edge",
    issuer: "TCS iON",
    icon: "fas fa-certificate",
    badge: "Completed",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&h=280&fit=crop",
    link: "https://drive.google.com/file/d/1u7J7nsdFEygv5gdaKGtWXys6h56wxSqI/view?usp=drive_link"
  },
  {
    title: "Python Programming",
    issuer: "GUVI",
    icon: "fab fa-python",
    badge: "Certified",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=280&fit=crop",
    link: "https://drive.google.com/file/d/1PCf6G3HrOyfK2AnEJrgwyeXJIOJQ50UC/view?usp=drive_link"
  },
  {
    title: "Code Debugger",
    issuer: "Jaishriram Engineer College",
    icon: "fas fa-bug",
    badge: "Certified",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&h=280&fit=crop",
    link: "https://drive.google.com/file/d/1jvTnKjizeg9DYE13iUqEwX3D14cEEjHw/view?usp=drive_link"
  },
  {
    title: "Ideathon",
    issuer: "Tamizhan Skills",
    icon: "fas fa-lightbulb",
    badge: "Certified",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=500&h=280&fit=crop",
    link: "https://drive.google.com/file/d/173lzzoNajjtVByP5rW6Czw7VTjGsm24p/view?usp=drive_link"
  },
  {
    title: "Hackathon",
    issuer: "Dhanalakshmi Srinivasan Engineering College",
    icon: "fas fa-code",
    badge: "Certified",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=280&fit=crop",
    link: "https://drive.google.com/file/d/1nV8qy_qzWHcNijBrlWTHWAGRnDohZvIB/view?usp=drive_link"
  },
  {
    title: "AI Autonomous Smartcity Hackathon 2026",
    issuer: "Hackathon",
    icon: "fas fa-robot",
    badge: "Certified",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&h=280&fit=crop",
    link: "https://drive.google.com/file/d/1dYDKtDPfoFQKt_AwQfSjpZSt-r1sjzW7/view?usp=drive_link"
  },
  {
    title: "Full Stack Development Internship",
    issuer: "Novitech LTD",
    icon: "fas fa-laptop-code",
    badge: "Completed",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=280&fit=crop",
    link: "https://drive.google.com/file/d/1PUgkCraO1JOxhWtPomrQEP0Y5cY8Alwa/view?usp=drive_link"
  },
  {
    title: "Hackathon",
    issuer: "KPR Institute of Engineering and Technology",
    icon: "fas fa-trophy",
    badge: "Completed",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=280&fit=crop",
    link: "https://drive.google.com/file/d/1LkD1Da2sSRJBRKPRF_n-RiI3id7b6Mp0/view?usp=drive_link"
  },
  {
    title: "REST API (Intermediate)",
    issuer: "HackerRank",
    icon: "fas fa-server",
    badge: "Completed",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=280&fit=crop",
    link: "https://www.hackerrank.com/certificates/iframe/339cf1c9e2d7"
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    icon: "fas fa-database",
    badge: "Completed",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=280&fit=crop",
    link: "https://www.hackerrank.com/certificates/iframe/395f1ff9e6e7"
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    icon: "fas fa-laptop-code",
    badge: "Completed",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=280&fit=crop",
    link: "https://www.hackerrank.com/certificates/iframe/3c02689b60b2"
  }
];

function Certifications() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const autoSlide = setInterval(() => {
      if (slider) {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, 2800);
    return () => clearInterval(autoSlide);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: direction === "left" ? -340 : 340, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        #certifications { padding: 80px 0; }
        #certifications .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        #certifications .section-title { text-align: center; margin-bottom: 40px; }
        #certifications .section-title h2 {
          font-size: 2rem; color: #00e5ff;
          font-weight: 700; margin-bottom: 10px;
        }
        #certifications .section-title p { color: #a0a0a0; font-size: 1rem; }

        .cert-scroll-buttons {
          display: flex; justify-content: flex-end;
          gap: 10px; margin-bottom: 20px; padding-right: 10px;
        }
        .cert-scroll-buttons button {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1.5px solid rgba(0, 229, 255, 0.5);
          background: rgba(0, 229, 255, 0.08);
          color: #00e5ff; font-size: 1rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s ease;
        }
        .cert-scroll-buttons button:hover {
          background: rgba(0, 229, 255, 0.2);
          border-color: #00e5ff;
          box-shadow: 0 0 14px rgba(0, 229, 255, 0.3);
          transform: scale(1.08);
        }

        .certifications-slider {
          display: flex; gap: 24px;
          overflow-x: auto; scroll-behavior: smooth;
          padding-bottom: 16px; scrollbar-width: none;
        }
        .certifications-slider::-webkit-scrollbar { display: none; }

        .cert-card {
          min-width: 300px; max-width: 300px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(0, 229, 255, 0.15);
          border-radius: 16px; overflow: hidden;
          flex-shrink: 0; text-decoration: none; display: block;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .cert-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 229, 255, 0.4);
          box-shadow: 0 8px 30px rgba(0, 229, 255, 0.12);
        }

        .cert-image { width: 100%; height: 170px; overflow: hidden; }
        .cert-image img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.4s ease;
        }
        .cert-card:hover .cert-image img { transform: scale(1.06); }

        .cert-content { padding: 16px 18px; }
        .cert-header {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 12px;
        }
        .cert-icon-wrap {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid rgba(0, 229, 255, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #00e5ff; font-size: 1rem; flex-shrink: 0;
        }
        .cert-badge {
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 3px 10px; border-radius: 20px;
          background: rgba(0, 229, 255, 0.1);
          color: #00e5ff; border: 1px solid rgba(0, 229, 255, 0.3);
          white-space: nowrap;
        }
        .cert-badge.completed {
          background: rgba(0, 229, 100, 0.1);
          color: #00e564; border-color: rgba(0, 229, 100, 0.3);
        }
        .cert-title {
          font-size: 0.95rem; font-weight: 700;
          color: #fff; margin: 0 0 6px 0; line-height: 1.35;
        }
        .cert-issuer {
          font-size: 0.8rem; color: #7a7a7a; margin: 0;
          display: flex; align-items: center; gap: 6px;
        }
        .cert-issuer::before {
          content: ""; display: inline-block;
          width: 6px; height: 6px; border-radius: 50%;
          background: #00e5ff; flex-shrink: 0;
        }
        .cert-view {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 12px; font-size: 0.75rem; font-weight: 600;
          color: #00e5ff; letter-spacing: 0.5px;
          text-transform: uppercase; opacity: 0.7; transition: opacity 0.2s;
        }
        .cert-card:hover .cert-view { opacity: 1; }

        /* ── TABLET 1024px ── */
        @media (max-width: 1024px) {
          .cert-card { min-width: 265px; max-width: 265px; }
          .cert-image { height: 155px; }
          #certifications .section-title h2 { font-size: 1.75rem; }
        }

        /* ── MOBILE 768px ── */
        @media (max-width: 768px) {
          #certifications { padding: 60px 0; }
          #certifications .section-title h2 { font-size: 1.5rem; }
          #certifications .section-title p { font-size: 0.9rem; }
          #certifications .container { padding: 0 16px; }
          .cert-card { min-width: 250px; max-width: 250px; }
          .cert-image { height: 145px; }
          .certifications-slider { gap: 16px; }
          .cert-scroll-buttons { justify-content: center; padding-right: 0; }
        }

        /* ── SMALL MOBILE 480px ── */
        @media (max-width: 480px) {
          #certifications { padding: 50px 0; }
          #certifications .container { padding: 0 12px; }
          #certifications .section-title h2 { font-size: 1.3rem; }
          .cert-card { min-width: 82vw; max-width: 82vw; }
          .cert-image { height: 140px; }
          .cert-content { padding: 13px 14px; }
          .cert-title { font-size: 0.88rem; }
          .cert-issuer { font-size: 0.75rem; }
          .cert-scroll-buttons button { width: 38px; height: 38px; font-size: 0.85rem; }
          .cert-badge { font-size: 0.6rem; padding: 2px 8px; }
          .cert-view { font-size: 0.7rem; }
        }
      `}</style>

      <section id="certifications">
        <div className="container">
          <div className="section-title">
            <h2>Certifications</h2>
            <p>Professional certifications and achievements</p>
          </div>

          <div className="cert-scroll-buttons">
            <button onClick={() => scroll("left")} title="Previous"><i className="fas fa-arrow-left"></i></button>
            <button onClick={() => scroll("right")} title="Next"><i className="fas fa-arrow-right"></i></button>
          </div>

          <div className="certifications-slider" ref={sliderRef}>
            {certifications.map((cert, index) => (
              <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card">
                <div className="cert-image">
                  <img src={cert.image} alt={cert.title} />
                </div>
                <div className="cert-content">
                  <div className="cert-header">
                    <div className="cert-icon-wrap"><i className={cert.icon}></i></div>
                    <span className={`cert-badge ${cert.badge.toLowerCase()}`}>{cert.badge}</span>
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-view">
                    <i className="fas fa-external-link-alt"></i> View Certificate
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Certifications;