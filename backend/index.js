import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import causes from "./routes/causes.js";
import auth from "./routes/auth.js";
import dashboard from "./routes/dashboard.js";
import blog from "./routes/blog.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/causes", causes);
app.use("/api/auth", auth);
app.use("/api/dashboard", dashboard);
app.use("/api/blog", blog);

// Serve static files from frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendBuildPath = path.join(__dirname, "../frontend/dist");

app.use(express.static(frontendBuildPath));

// Serve frontend for any route not handled
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendBuildPath, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});