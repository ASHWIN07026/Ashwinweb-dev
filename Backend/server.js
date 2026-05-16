const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ── CORS — allow your Vercel frontend ──
app.use(
  cors({
    origin: [
      "https://ashwins07024-portfolio.vercel.app", // replace with your actual Vercel URL
      "http://localhost:5173",                      // local dev
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// ── Supabase client ──
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.locals.supabase = supabase;

// ── Routes ──
const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);

// ── Contact Form Route ──
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const { data, error } = await supabase
    .from("contacts")
    .insert([{ name, email, message }]);

  if (error) {
    console.error("Supabase error:", error.message);
    return res.status(500).json({ error: "Failed to send message." });
  }

  res.status(200).json({ success: true, message: "Message sent successfully!" });
});

// ── Health check ──
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

// ── Start server ──
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
