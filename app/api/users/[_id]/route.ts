import { db } from '@/lib/db';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET (
    req: Request,
    { params }: { params: Promise<{ _id: string }> }) {
    try {
        const { _id } = await params;
        const user = await mongoose.connection.db?.collection('users').findOne({ _id: new mongoose.Types.ObjectId(_id) });
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}