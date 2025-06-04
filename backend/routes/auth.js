import express from "express";
import User from "../models/User.js";
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  // Add hashing and validation in production
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json({ message: "Registered!" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  // Add real password check in production
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    res.json({ message: "Login successful", user });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

export default router;