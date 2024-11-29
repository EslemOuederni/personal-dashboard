import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import User from "@/models/user";
import { db } from "@/lib/db";

export async function POST (req: Request) {
    try
    {
        await db();
        const { username, email, password } = await req.json();
        console.log("Request body:", { username, email, password });
        // check if all fields are filled
        if (!username || !email || !password)
        {
            return NextResponse.json({ user: null, message: "All fields are required" }, { status: 400 });
        }
        // check if user exists
        const ExistingUser = await User.findOne({ email });
        if (ExistingUser)
        {
            return NextResponse.json({ user: null, message: "User already exists" }, { status: 400 });
        }
        // hash password
        const hashedPassword = await hash(password, 10);

        // create user
        const newUser = {
            username,
            email,
            password: hashedPassword
        };

        // save user
        await User.create(newUser);
        // return user without password
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return NextResponse.json({ user: newUser, message: "User created successfully" }, { status: 201 });

    } catch (error)
    {
        return NextResponse.json({ user: null, message: error }, { status: 500 });
    }
}
