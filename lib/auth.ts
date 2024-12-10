import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import client from "@/lib/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "database",
  },
  providers: [GitHub, Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
    allowDangerousEmailAccountLinking: true,
  })],
  pages: {
    signIn: "/signin",
  },
})