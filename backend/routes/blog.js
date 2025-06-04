import express from "express";
import BlogPost from "../models/BlogPost.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await BlogPost.find().sort({ createdAt: -1 }).limit(10);
  res.json(posts);
});
export default router;