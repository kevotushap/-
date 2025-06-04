import express from "express";
import auth from "../middleware/auth.js";
import Cause from "../models/Cause.js";

const router = express.Router();

router.get("/causes", auth, async (req, res) => {
  const causes = await Cause.find({ owner: req.user.id });
  res.json(causes);
});

export default router;