<div align="center">

# 🚀 Ashwin S — Personal Portfolio

### AI Engineer · Full Stack Developer · Freelancer

[![Live Site](https://img.shields.io/badge/Live%20Site-ashwinweb--dev.vercel.app-00d4ff?style=for-the-badge&logo=vercel&logoColor=white)](https://ashwinweb-dev.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ashwin%20S-0077b5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ashwin-s-650b48329)
[![GitHub](https://img.shields.io/badge/GitHub-ASHWIN07026-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ASHWIN07026)
[![Fiverr](https://img.shields.io/badge/Fiverr-aj__kum123-1dbf73?style=for-the-badge&logo=fiverr&logoColor=white)](https://www.fiverr.com/users/aj_kum123)

<br/>

![Portfolio Preview](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&h=400&fit=crop)

</div>

---

## 📌 About

A **production-ready personal portfolio website** built as part of my Web Development Internship at **Thiranex**. The project covers the full stack — from a responsive React frontend to a Node.js API backend, with a live PostgreSQL database and cloud deployment on Vercel + Render.

---

## ✨ Features

- 🎨 **Fully responsive UI** — optimised across all screen sizes from 320px mobile to 4K
- ⚡ **Fast loading** — Vite-powered build with code splitting and lazy loading
- 📬 **Working contact form** — EmailJS sends instant email notifications on every submission
- 🗄️ **Real-time database** — Supabase (PostgreSQL) stores every form submission
- ☁️ **Live deployment** — frontend on Vercel, backend API on Render
- 🌙 **Dark theme** — animated particle background with cyan accent design system
- 🔒 **Secure backend** — CORS configured, environment variables handled properly

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React.js | UI component framework |
| Vite | Build tool & dev server |
| CSS3 | Custom responsive styling |
| EmailJS | Client-side email sending |
| Font Awesome | Icon library |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | RESTful API framework |
| Supabase | PostgreSQL database (BaaS) |
| CORS | Cross-origin request handling |

### Deployment
| Service | Hosts |
|---|---|
| Vercel | React frontend |
| Render | Node.js backend API |

---

## 📁 Project Structure

```
Portfolio/
├── Frontend/                  # React + Vite app
│   ├── public/
│   │   └── favicon.svg
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
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── Backend/                   # Node.js + Express API
    ├── index.js
    ├── .env
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn
- Supabase account
- EmailJS account

### 1. Clone the repository

```bash
git clone https://github.com/ASHWIN07026/Ashwinweb-dev.git
cd Ashwinweb-dev
```

### 2. Frontend setup

```bash
cd Frontend
npm install
npm run dev
```

### 3. Backend setup

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend/` folder:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
PORT=5000
```

```bash
npm start
```

### 4. EmailJS setup

In `src/components/Contact.jsx`, replace with your EmailJS credentials:

```js
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  form.current,
  "YOUR_PUBLIC_KEY"
)
```

---

## 🌐 Deployment

### Frontend → Vercel

```bash
npm run build
# Deploy the dist/ folder to Vercel
# Or connect your GitHub repo directly in Vercel dashboard
```

### Backend → Render

1. Push backend code to GitHub
2. Create a new **Web Service** on [render.com](https://render.com)
3. Set environment variables (`SUPABASE_URL`, `SUPABASE_KEY`) in Render dashboard
4. Set build command: `npm install`
5. Set start command: `node index.js`

---

## 📸 Sections

| Section | Description |
|---|---|
| Hero | Name, role, CTA buttons, profile photo |
| About | Background, stats (projects, certifications, internships) |
| Skills | Tech stack with icons |
| Projects | GitHub repos with images, auto-fetched via GitHub API |
| Certifications | Certificates with links to Google Drive / HackerRank |
| Contact | Working form with EmailJS + Supabase storage |

---

## 📜 Certifications Included

- AWS Cloud Practitioner Essentials
- IBM SkillsBuild Web Development
- Python Programming — GUVI
- TCS iON Career Edge
- Full Stack Development Internship — Novitech LTD
- REST API (Intermediate) — HackerRank
- SQL (Advanced) — HackerRank
- AI Autonomous Smartcity Hackathon 2026
- and more...

---

## 🤝 Connect With Me

| Platform | Link |
|---|---|
| Email | sa0323165@gmail.com |
| LinkedIn | [linkedin.com/in/ashwin-s-650b48329](https://www.linkedin.com/in/ashwin-s-650b48329) |
| GitHub | [github.com/ASHWIN07026](https://github.com/ASHWIN07026) |
| Fiverr | [fiverr.com/users/aj_kum123](https://www.fiverr.com/users/aj_kum123) |
| Phone | +91 7553103183 |
| Location | Tiruppur, Tamil Nadu, India |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with dedication by **Ashwin S** during internship at **Thiranex** · 2026

⭐ Star this repo if you found it helpful!

</div>
