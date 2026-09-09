<div align="center">

# 🚀 Ashwin S — Full Stack Developer Portfolio

### Production-Ready Portfolio built with React, Node.js, Express & Supabase

A modern full-stack portfolio application showcasing my projects, skills, certifications, achievements and contact workflow.

<br/>

<a href="https://ashwinweb-dev.vercel.app">
<img src="https://img.shields.io/badge/LIVE_DEMO-Visit_Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</a>

<a href="https://github.com/ASHWIN07026">
<img src="https://img.shields.io/badge/GITHUB-ASHWIN07026-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>

<a href="https://www.linkedin.com/in/ashwin-s-650b48329">
<img src="https://img.shields.io/badge/LINKEDIN-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

</div>

---

## 📌 Project Overview

This project is a **full-stack developer portfolio platform** designed to present my technical skills, projects, certifications, achievements and contact information in a professional and interactive way.

Unlike a static portfolio, this application includes:

- a React frontend
- a Node.js/Express backend
- PostgreSQL database integration through Supabase
- contact form handling
- EmailJS notifications
- live cloud deployment

The application was built as part of my **Web Development Internship at Thiranex** and later improved into a production-style portfolio project.

---

## 🎯 Problem Statement

Traditional resumes and static portfolio pages often provide limited interaction and do not fully demonstrate a developer's ability to build complete applications.

This project solves that by creating a portfolio that itself demonstrates:

- frontend development
- backend API development
- database integration
- responsive design
- cloud deployment
- environment-variable management
- third-party service integration

---

## 💡 Solution

The platform uses a modern full-stack architecture:

```text
User
  ↓
React + Vite Frontend
  ↓
Node.js + Express REST API
  ↓
Supabase PostgreSQL Database
  ↓
EmailJS Notifications
```

Deployment:

```text
Frontend → Vercel
Backend  → Render
Database → Supabase
```

---

## ✨ Key Features

### 🎨 Frontend

- Fully responsive React interface
- Mobile, tablet and desktop support
- Dark visual theme
- Animated backgrounds and UI effects
- Reusable React components
- Fast Vite development and production builds

### 👨‍💻 Portfolio Content

- Hero section
- About section
- Skills showcase
- Project showcase
- Certifications
- Achievements
- Contact section

### 📬 Contact System

- Functional contact form
- EmailJS email notification
- Submission storage in Supabase PostgreSQL
- Form validation
- Backend API integration

### ☁️ Deployment

- React frontend hosted on Vercel
- Node.js backend hosted on Render
- PostgreSQL database hosted with Supabase
- Environment variables used for credentials and configuration

### 🔐 Security & Configuration

- CORS configuration
- Environment-based secrets
- No sensitive credentials hardcoded in the repository
- Backend/API separation
- Database credentials handled through environment variables

---

# 🛠️ Tech Stack

<table>

<tr>
<td><b>Layer</b></td>
<td><b>Technology</b></td>
<td><b>Purpose</b></td>
</tr>

<tr>
<td>Frontend</td>
<td>React.js</td>
<td>Component-based user interface</td>
</tr>

<tr>
<td>Build Tool</td>
<td>Vite</td>
<td>Development server and optimized builds</td>
</tr>

<tr>
<td>Styling</td>
<td>CSS3</td>
<td>Responsive custom UI design</td>
</tr>

<tr>
<td>Backend</td>
<td>Node.js</td>
<td>JavaScript runtime</td>
</tr>

<tr>
<td>API</td>
<td>Express.js</td>
<td>REST API backend</td>
</tr>

<tr>
<td>Database</td>
<td>Supabase PostgreSQL</td>
<td>Persistent contact-form data</td>
</tr>

<tr>
<td>Email</td>
<td>EmailJS</td>
<td>Email notification service</td>
</tr>

<tr>
<td>Frontend Deployment</td>
<td>Vercel</td>
<td>Production hosting</td>
</tr>

<tr>
<td>Backend Deployment</td>
<td>Render</td>
<td>API hosting</td>
</tr>

</table>

---

# 🏗️ Architecture

```text
┌──────────────────────────────┐
│            USER              │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│      REACT + VITE UI         │
│                              │
│ Hero                         │
│ About                        │
│ Skills                       │
│ Projects                     │
│ Certifications               │
│ Contact                      │
└──────────────┬───────────────┘
               │
               │ REST API
               ▼
┌──────────────────────────────┐
│   NODE.JS + EXPRESS BACKEND  │
│                              │
│ API Routes                   │
│ Input Validation             │
│ CORS                         │
│ Database Integration         │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│     SUPABASE POSTGRESQL      │
│                              │
│ Contact Form Submissions     │
└──────────────────────────────┘

               +

┌──────────────────────────────┐
│           EMAILJS            │
│                              │
│ Email Notifications          │
└──────────────────────────────┘
```

---

# 📁 Project Structure

```text
Ashwinweb-dev/
│
├── Frontend/
│   ├── public/
│   │   └── favicon.svg
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── Backend/
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have:

- Node.js 18+
- npm
- Git
- Supabase account
- EmailJS account

---

## 1. Clone the Repository

```bash
git clone https://github.com/ASHWIN07026/Ashwinweb-dev.git
cd Ashwinweb-dev
```

---

## 2. Run the Frontend

```bash
cd Frontend
npm install
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

---

## 3. Run the Backend

Open another terminal:

```bash
cd Backend
npm install
```

Create:

```text
.env
```

Example:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_key
PORT=5000
```

Then run:

```bash
npm start
```

---

# 🔐 Environment Variables

Never commit real credentials.

Recommended structure:

```env
SUPABASE_URL=
SUPABASE_KEY=
PORT=5000
```

Add `.env` to `.gitignore`.

For a public repository, also add:

```text
.env.example
```

with placeholder values only.

---

# 📧 EmailJS Configuration

The project uses EmailJS for contact-form email notifications.

Example:

```javascript
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY"
)
```

Keep sensitive configuration values outside committed source files whenever possible.

---

# 🌐 Deployment

## Frontend — Vercel

The React frontend is deployed on Vercel.

Live application:

**https://ashwinweb-dev.vercel.app**

Typical production command:

```bash
npm run build
```

---

## Backend — Render

For Render:

```text
Build Command:
npm install

Start Command:
node index.js
```

Environment variables should be configured in the Render dashboard.

---

## Database — Supabase

Supabase provides:

- PostgreSQL hosting
- database access
- backend persistence

The database stores contact-form submission data.

---

# 📸 Application Sections

| Section | Purpose |
|---|---|
| Hero | Developer introduction and CTA |
| About | Background and professional summary |
| Skills | Technologies and development tools |
| Projects | Software-development project showcase |
| Certifications | Certifications and technical learning |
| Contact | User contact form |
| Footer | Social and navigation links |

---

# 📷 Screenshots

Add real project screenshots inside:

```text
docs/
├── home.png
├── about.png
├── projects.png
├── skills.png
├── certifications.png
├── contact.png
└── mobile-view.png
```

Then display them here:

```markdown
![Home](docs/home.png)

![Projects](docs/projects.png)

![Contact](docs/contact.png)
```

> Real screenshots are strongly recommended because they allow recruiters to understand the project immediately without running the application.

---

# ✅ What This Project Demonstrates

This project demonstrates practical experience with:

- React component development
- frontend/backend integration
- REST API development
- Node.js and Express
- PostgreSQL databases
- Supabase
- EmailJS integration
- responsive web design
- cloud deployment
- Git and GitHub
- environment variables
- full-stack application architecture

---

# 🔮 Future Improvements

Planned improvements include:

- TypeScript migration
- automated tests
- GitHub Actions CI
- improved accessibility
- performance optimization
- backend validation improvements
- analytics dashboard
- admin dashboard for contact submissions
- automated deployment checks

---

# 📄 License

This project is available under the **MIT License**.

---

# 👨‍💻 Developer

<div align="center">

## Ashwin S

**Full Stack Developer • Software Engineer • AI/ML Developer**

<a href="https://ashwinweb-dev.vercel.app">
<img src="https://img.shields.io/badge/PORTFOLIO-Visit-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</a>

<a href="https://www.linkedin.com/in/ashwin-s-650b48329">
<img src="https://img.shields.io/badge/LINKEDIN-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

<a href="https://github.com/ASHWIN07026">
<img src="https://img.shields.io/badge/GITHUB-Follow-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>

<br/><br/>

⭐ If you find this project useful, consider starring the repository.

</div>
