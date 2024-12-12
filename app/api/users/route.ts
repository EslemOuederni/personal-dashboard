import { db } from "@/lib/db";
import User from "@/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await db();
    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
