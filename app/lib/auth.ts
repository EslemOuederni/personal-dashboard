import { connectDB } from "./mongodb";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import mongoose from "mongoose";

export const authOptions: NextAuthOptions = {
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ],
    adapter: MongoDBAdapter(connectDB().then(() => mongoose.connection.getClient())),
    session: {
        strategy: "database",
    },
    callbacks: {
        async session({ session, user }) {
            if (session?.user) {
                session.user.email = user.email;;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
}
