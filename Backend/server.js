const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ════════════════════════════════════════
// CORS — Allow Vercel frontend + local dev
// ════════════════════════════════════════
const allowedOrigins = [
  "https://ashwinweb-dev.vercel.app",
  "https://ashwinweb-dev-1.onrender.com",
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked: ${origin}`));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ════════════════════════════════════════
// Supabase Client
// ════════════════════════════════════════
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.locals.supabase = supabase;

// ════════════════════════════════════════
// Routes
// ════════════════════════════════════════
const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);

// ════════════════════════════════════════
// Contact Form — POST /api/contact
// ════════════════════════════════════════
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const { data, error } = await supabase
    .from("contacts")
    .insert([
      {
        name:    name.trim(),
        email:   email.trim().toLowerCase(),
        message: message.trim(),
      },
    ]);

  if (error) {
    console.error("Supabase error:", error.message);
    return res.status(500).json({ error: "Failed to save message. Please try again." });
  }

  console.log(`✅ New contact from ${name} (${email})`);
  res.status(200).json({
    success: true,
    message: "Message sent successfully!",
  });
});

// ════════════════════════════════════════
// Health Check — GET /
// ════════════════════════════════════════
app.get("/", (req, res) => {
  res.json({
    status:  "ok",
    message: "Backend Running ✅",
    time:    new Date().toISOString(),
  });
});

// ════════════════════════════════════════
// 404 Handler
// ════════════════════════════════════════
app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

// ════════════════════════════════════════
// Global Error Handler
// ════════════════════════════════════════
app.use((err, req, res, next) => {
  console.error("Server error:", err.message);
  res.status(500).json({ error: err.message || "Internal server error." });
});

// ════════════════════════════════════════
// Start Server
// ════════════════════════════════════════
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📦 Supabase URL: ${process.env.SUPABASE_URL}`);
});
