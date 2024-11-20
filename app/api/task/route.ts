import { connectDB } from "@/app/lib/mongodb";
import Task from "@/app/models/task";
import { ITask } from "@/app/types/task";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const tasks = await Task.find();
    return NextResponse.json(tasks, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body: ITask = await req.json();
    const task = await Task.create(body);
    return NextResponse.json(task, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

