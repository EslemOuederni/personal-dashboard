import { Schema, model, models } from "mongoose";
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
  tag: { type: String }, 
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }], 
});

const Project = models.Project || model<IProject>("Project", ProjectSchema);
export default Project;
