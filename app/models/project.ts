import { Schema } from "mongoose";
import mongoose from "mongoose";
import { IProject } from "../types/project";

const ProjectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  status: {
    type: String,
    enum: ["not started", "in-progress", "completed"],
    default: "not started",
  },
  tag: { type: String }, // For categorizing or tagging the project
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }], // Array of task IDs
});

const Project = mongoose.model<IProject>("Project", ProjectSchema);
export default Project;
