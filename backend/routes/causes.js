import express from "express";
import Cause from "../models/Cause.js";
const router = express.Router();

// Get all causes
router.get("/", async (req, res) => {
  const causes = await Cause.find();
  res.json(causes);
});

// Create cause
router.post("/", async (req, res) => {
  const { title, description, goal, organization } = req.body;
  const cause = new Cause({ title, description, goal, organization });
  await cause.save();
  res.json(cause);
});

export default router;