import { Types } from "mongoose";
import { ITask } from "./task";
import { IUser } from "./users";

export interface IProject {
  _id: Types.ObjectId;
  name: string;
  startDate?: Date;
  endDate?: Date;
  status?: "not started" | "in-progress" | "completed";
  tag?: string[];
  tasks?: Types.ObjectId[] | ITask[];
  userId: Types.ObjectId | IUser;
  createdAt?: Date;
  updatedAt?: Date;
  // Time tracking fields
  totalTimeSpent?: number;
  timeLogs?: {
    startTime: Date;
    endTime: Date;
    duration: number;
  }[];
  dailyTimeSpent?: {
    date: string; // ISO date string for each day
    timeSpent: number; // Time spent in minutes or seconds
  }[];

  // For future nested projects
  parentProjectId?: Types.ObjectId | IProject;
}
