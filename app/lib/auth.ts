import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import connectDB from "./mongoClient"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(connectDB),
  providers: [],
})