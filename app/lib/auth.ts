import { MongoDBAdapter } from "@auth/mongodb-adapter"
import type { Adapter } from "next-auth/adapters";
import client from "./mongoClient"
import { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = ({
  adapter: MongoDBAdapter(client) as Adapter,
  providers: [],
})