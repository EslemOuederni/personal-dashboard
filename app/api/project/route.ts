import Project from "@/models/project";
import { IProject } from "@/app/types/project";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import mongoose from "mongoose";
import User from "@/models/user";

export async function GET() {
  try {
    await db();
    const projects = await Project.find();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await db();
    const body: IProject = await req.json();
    if (!body.userId) {
      return NextResponse.json(
        { message: "User ID is required to create a project." },
        { status: 400 }
      );
    }
    console.log("userID:", body.userId);
    const findUser = await User.findById(body.userId);

    if (!findUser) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    const newProject = await Project.create(body);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
