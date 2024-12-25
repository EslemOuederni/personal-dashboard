import { db } from '@/lib/db';
import Project from '@/models/project';
import User from '@/models/user';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

export async function GET (req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");

        if (!userId) {
            return NextResponse.json({ message: "User ID is required." }, { status: 400 });
        }

        // Validate ObjectId format
        if (!/^[0-9a-fA-F]{24}$/.test(userId)) {
            return NextResponse.json({ message: "Invalid User ID format." }, { status: 400 });
        }

        await db();

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ message: "User not found." }, { status: 404 });
        }

        // Fetch projects by userId
        const projects = await Project.find({ userId });
        if (projects.length === 0) {
            return NextResponse.json({ message: "No projects found for this user." }, { status: 404 });
        }

        return NextResponse.json(projects, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}