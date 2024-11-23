import Project from "@/app/models/project";
import Task from "@/app/models/task";
import { ITask } from "@/app/types/task";
import { NextResponse } from "next/server";
import {db} from "@/app/lib/db";

export async function GET() {
  try {
    await db();
    const tasks = await Task.find();
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await db();
    const body: ITask = await req.json();

    if (!body.project) {
      return NextResponse.json(
        { message: "Project ID is required to create a task." },
        { status: 400 }
      );
    }
    
    const project = await Project.findById(body.project);
    if (!project) {
      return NextResponse.json(
        { message: "Project not found. Please provide a valid project ID." },
        { status: 404 }
      );
    }

    const task = await Task.create(body);
    project.tasks.push(task._id);
    await project.save();

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while creating the task.",
        error: error
      },
      { status: 500 }
    );
  }
}
