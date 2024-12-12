import { Types } from "mongoose";
import { ITask } from "./task";
import { IUser } from "./users";

export interface IProject {
  _id: Types.ObjectId;
  name: string;
  startDate?: Date;
  endDate?: Date;
  status?: "not started" | "in-progress" | "completed";
  tag?: string;
  tasks?: Types.ObjectId[] | ITask[];
  userId: Types.ObjectId | IUser;
  createdAt?: Date;
  updatedAt?: Date;
}
