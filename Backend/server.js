const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Required environment variables
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.error(
    "Missing required environment variables: SUPABASE_URL or SUPABASE_KEY"
  );

  process.exit(1);
}

// CORS
const allowedOrigins = [
  "https://ashwinweb-dev.vercel.app",
  "https://ashwinweb-dev-ashwins-projects-5f22a8de.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`Blocked CORS request from: ${origin}`);

        callback(new Error("Origin not allowed by CORS."));
      }
    },

    methods: ["GET", "POST", "OPTIONS"],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

app.use(
  express.json({
    limit: "20kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "20kb",
  })
);

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.locals.supabase = supabase;

// Routes
const projectRoutes = require("./routes/projectRoutes");

app.use("/api/projects", projectRoutes);

// Contact route
app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      message,
    } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        error: "Invalid request data.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();

    if (
      !cleanName ||
      !cleanEmail ||
      !cleanMessage
    ) {
      return res.status(400).json({
        error: "All fields are required.",
      });
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)
    ) {
      return res.status(400).json({
        error: "Invalid email address.",
      });
    }

    if (cleanName.length > 100) {
      return res.status(400).json({
        error: "Name is too long.",
      });
    }

    if (cleanEmail.length > 254) {
      return res.status(400).json({
        error: "Email address is too long.",
      });
    }

    if (cleanMessage.length > 2000) {
      return res.status(400).json({
        error: "Message must be under 2000 characters.",
      });
    }

    const { error } = await supabase
      .from("contacts")
      .insert([
        {
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
        },
      ]);

    if (error) {
      console.error(
        "Supabase contact insert error:",
        error.message
      );

      return res.status(500).json({
        error:
          "Failed to save message. Please try again.",
      });
    }

    console.log(
      `New contact message received from ${cleanName}`
    );

    return res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(
      "Contact route error:",
      error.message
    );

    return res.status(500).json({
      error: "Internal server error.",
    });
  }
});

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend Running",
    time: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found.",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(
    "Server error:",
    err.message
  );

  res.status(500).json({
    error: "Internal server error.",
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
