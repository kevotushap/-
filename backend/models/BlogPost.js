import mongoose from "mongoose";
const BlogPostSchema = new mongoose.Schema({
  title: String,
  summary: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("BlogPost", BlogPostSchema);