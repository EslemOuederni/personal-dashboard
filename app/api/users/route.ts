import { db } from '@/lib/db';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET () {
    try {
        const users = await mongoose.connection.db?.collection('users').find().toArray();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error(error);
    }
}
