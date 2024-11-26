import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth"
import client from "./mongoClient"
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const authOptions: NextAuthOptions = ({
  adapter: MongoDBAdapter(client),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "hello", name: "jay", password: "dave" };
        if (!user || !user.password) return null;

        const passwordsMatch = user.password === credentials?.password;

        if (passwordsMatch) return user;
        return null;
      }
    }),
  ],
})