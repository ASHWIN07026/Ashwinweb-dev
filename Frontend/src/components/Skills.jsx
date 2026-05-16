function Skills() {
  const skills = [
    { name: "HTML",         level: "Advanced",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS",          level: "Advanced",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript",   level: "Advanced",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript",   level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React.js",     level: "Advanced",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js",      level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js",      level: "Advanced",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js",   level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Python",       level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java",         level: "Advanced",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Pandas",       level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "MongoDB",      level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL",   level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Supabase",     level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "AWS",          level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Git",          level: "Advanced",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker",       level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes",   level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "TensorFlow",   level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "FastAPI",      level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Redis",        level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Tailwind CSS", level: "Advanced",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Linux",        level: "Intermediate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    // OpenAI — rendered as inline SVG (no devicon entry)
    { name: "OpenAI",       level: "Intermediate", logo: null },
    // Hugging Face — inline SVG
    { name: "Hugging Face", level: "Intermediate", logo: null },
    // LangChain — inline SVG
    { name: "LangChain",    level: "Intermediate", logo: null },
  ];

  const openAISVG = (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.371 2.019-1.168a.076.076 0 0 1 .072 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.679zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  );

  const huggingFaceSVG = (
    <svg width="38" height="38" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <text y="22" fontSize="22" textAnchor="middle" x="12">🤗</text>
    </svg>
  );

  const langChainSVG = (
    <svg width="38" height="38" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#1C3C5E"/>
      <path d="M8 20 Q14 12 20 20 Q26 28 32 20" stroke="#38BDF8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M8 24 Q14 16 20 24 Q26 32 32 24" stroke="#60A5FA" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );

  const inlineSVGs = {
    OpenAI: openAISVG,
    "Hugging Face": huggingFaceSVG,
    LangChain: langChainSVG,
  };

  // Next.js and Express.js logos are black — need dark-mode inversion
  const needsDarkInvert = ["Next.js", "Express.js"];

  return (
    <>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 16px;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 20px 10px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
          cursor: default;
        }

        .skill-card:hover {
          border-color: rgba(0, 229, 255, 0.35);
          background: rgba(0, 229, 255, 0.04);
          transform: translateY(-3px);
        }

        .skill-logo-wrap {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-logo-wrap img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .skill-logo-wrap img.dark-invert {
          filter: none;
        }

        @media (prefers-color-scheme: dark) {
          .skill-logo-wrap img.dark-invert {
            filter: invert(1);
          }
        }

        .skill-name {
          font-size: 12px;
          font-weight: 600;
          color: #e0e0e0;
          text-align: center;
          line-height: 1.3;
        }

        .skill-level {
          font-size: 10px;
          padding: 3px 10px;
          border-radius: 20px;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .skill-level.advanced {
          background: rgba(29, 191, 115, 0.15);
          color: #1dbf73;
        }

        .skill-level.intermediate {
          background: rgba(0, 229, 255, 0.1);
          color: #00e5ff;
        }
      `}</style>

      <section id="skills">
        <div className="container">
          <div className="section-title">
            <h2>Skills & Technologies</h2>
            <p>Technologies I work with to bring ideas to life</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-logo-wrap">
                  {skill.logo ? (
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className={needsDarkInvert.includes(skill.name) ? "dark-invert" : ""}
                    />
                  ) : (
                    inlineSVGs[skill.name]
                  )}
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className={`skill-level ${skill.level === "Advanced" ? "advanced" : "intermediate"}`}>
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;