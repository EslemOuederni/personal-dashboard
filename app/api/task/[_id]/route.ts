import { connectDB } from "@/app/lib/mongodb";
import Task from "@/app/models/task";
import { ITask } from "@/app/types/task";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { _id: string } }
) {
  try {
    await connectDB();
    const tasks = await Task.findById(params._id);
    if (!tasks) {
      return new Response("Project not found", { status: 404 });
    }
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { _id: string } }
) {
  try {
    await connectDB();
    const body: ITask = await req.json();
    const task = await Task.findByIdAndUpdate(params._id, body, {
      new: true,
    });
    if (!task) {
      return new Response("Task not found", { status: 404 });
    }
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { _id: string } }
) {
  try {
    await connectDB();
    const task = await Task.findByIdAndDelete(params._id);
    if (!task) {
      return new Response("Task not found", { status: 404 });
    }
    return new Response("Task deleted", { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
