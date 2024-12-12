import Project from "@/models/project";
import { IProject } from "@/app/types/project";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import mongoose from 'mongoose';
import User from '@/models/user';

export async function GET () {
  try {
    await db();
    const projects = await Project.find();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST (req: Request) {
  try {
    await db();
    const { user, name, endDate, tag }: IProject = await req.json();
    if (!user) {
      return NextResponse.json({ message: "User ID is required to create a project." }, { status: 400 });
    }

    const findUser = await User.findById(user);
    console.log(findUser);
    if (!findUser) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }
    console.log(user)

    // const newProject = await Project.create({ user: findUser._id, name: name, endDate: endDate, tag: tag });
    // console.log(newProject.toJSON().userId);
    // return NextResponse.json(newProject, { status: 201 });
    const _id = "6759e40372252e60fc85b2e9"; // testing purposes khater guhretni
    const proj = await Project.findById(_id).populate('user', 'name email image'); // Adjust populate

    console.log(proj);

    if (!proj) {
      return new Response("Project not found", { status: 404 });
    }

    return NextResponse.json(proj, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
