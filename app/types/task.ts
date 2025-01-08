import { Types } from "mongoose";
import { IProject } from "./project";

export interface IComment {
  text: string;
  date?: Date;
}

export interface ITask {
  _id?: Types.ObjectId;
  name: string;
  start?: Date;
  end?: Date;
  deadline?: Date;
  description?: string;
  category?: string;
  project: IProject;
  slotsOfTime?: number[];
  status?: "pending" | "in-progress" | "completed";
  priority?: "low" | "medium" | "high";
  comments?: IComment[];
  reminders?: Date[];
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
