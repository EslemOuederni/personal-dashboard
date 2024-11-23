import { MongoDBAdapter } from "@auth/mongodb-adapter"
import connectDB from "./mongoClient"
import { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = ({
  adapter: MongoDBAdapter(connectDB),
  providers: [],
})