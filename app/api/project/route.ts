import { connectDB } from "@/app/lib/mongodb";
import Project from "@/app/models/project";
import { IProject } from "@/app/types/project";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body: IProject = await req.json();
    const project = await Project.create(body);
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}