const express = require("express");
const router = express.Router();

const { tableName } = require("../models/Project");

// GET all projects
router.get("/", async (req, res) => {
  try {
    const { data, error } = await req.app.locals.supabase
      .from(tableName)
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST a new project
router.post("/", async (req, res) => {
  try {
    const { title, description, github } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const { data, error } = await req.app.locals.supabase
      .from(tableName)
      .insert([{ title, description, github }])
      .select();

    if (error) throw error;
    res.json(data[0]);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Could not save project" });
  }
});

module.exports = router;
