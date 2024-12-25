import { Schema, model, models } from "mongoose";
import { ITask } from "../app/types/task";

const TaskSchema = new Schema<ITask>(
  {
    name: { type: String, required: true },
    start: { type: Date, default: Date.now },
    end: { type: Date },
    deadline: { type: Date },
    description: { type: String },
    category: { type: String },
    slotsOfTime: [{ type: Number }],
    project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    comments: [
      {
        text: { type: String },
        date: { type: Date, default: Date.now },
      },
    ],
    reminders: [{ type: Date }],
    tags: [{ type: String }],
  },
  { timestamps: true }
);

const Task = models.Task || model<ITask>("Task", TaskSchema);
export default Task;