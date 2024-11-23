import { connectDB } from "@/app/lib/mongodb";
import Project from "@/app/models/project";
import { IProject } from "@/app/types/project";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params} : { params:Promise<{ _id: string }>  }
) {
  try {
    await connectDB();
    const {_id} = await params;
    const projects = await Project.findById(_id);
    if (!projects) {
      return new Response("Project not found", { status: 404 });
    }
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { _id: string } }
) {
  try {
    await connectDB();
    const body: IProject = await req.json();
    const project = await Project.findByIdAndUpdate(params._id, body, {
      new: true,
    });
    if (!project) {
      return new Response("Project not found", { status: 404 });
    }
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { _id: string } }
) {
  try {
    await connectDB();
    const project = await Project.findByIdAndDelete(params._id);
    if (!project) {
      return new Response("Project not found", { status: 404 });
    }
    return new Response("Project deleted", { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
