import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = ({
  providers: [
    // Providers
    // credentials
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