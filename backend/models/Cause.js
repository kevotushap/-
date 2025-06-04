import mongoose from "mongoose";
const CauseSchema = new mongoose.Schema({
  title: String,
  description: String,
  goal: Number,
  organization: String
});
export default mongoose.model("Cause", CauseSchema);