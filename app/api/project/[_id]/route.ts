import Project from "@/models/project";
import { IProject } from "@/types/project";
import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function GET (
  req: NextRequest,
  { params }: { params: Promise<{ _id: string }> }
) {
  try {
    await db();
    const { _id } = await params;
    const project = await Project.findById(_id);
    if (!project) {
      return new Response("Project not found", { status: 404 });
    }
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function PUT (
  req: NextRequest,
  { params }: { params: Promise<{ _id: string }> }
) {
  try {
    await db();
    const { _id } = await params;
    const body: IProject = await req.json();
    const project = await Project.findByIdAndUpdate(_id, body, {
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

export async function DELETE (
  req: NextRequest,
  { params }: { params: Promise<{ _id: string }> }
) {
  try {
    await db();
    const { _id } = await params;
    const project = await Project.findByIdAndDelete(_id);
    if (!project) {
      return new Response("Project not found", { status: 404 });
    }
    return new Response("Project deleted", { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function PATCH (req: NextRequest, { params }: { params: Promise<{ _id: string }> }) {
  try {
    await db()
    const { _id } = await params
    const { startTime, endTime, duration } = await req.json();
    const project = await Project.findById(_id);
    if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });

    //update time logs and total time
    project.timeLogs.push({ startTime, endTime, duration });
    project.totalTimeSpent = (project.totalTimeSpent || 0) + duration;
    // Update daily time spent
    const date = new Date(startTime).toISOString().split("T")[0]; // Extract date string
    const dailyLog = project.dailyTimeSpent.find((log: { date: string; timeSpent: number }) => log.date === date);
    if (dailyLog) {
      dailyLog.timeSpent += duration;
    } else {
      project.dailyTimeSpent.push({ date, timeSpent: duration });
    }

    await project.save()
    return NextResponse.json(project, { status: 200 });

  } catch (error) {
    return NextResponse.json(error, { status: 404 })
  }
}