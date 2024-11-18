import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import { Metadata } from "next";
import { authOptions } from "./lib/auth";

export const metadata: Metadata ={
  title: 'Personal Dashboard App',
  description: "A personal dashboard App to manage your projects and tasks"
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
          <SessionProvider session={session}>
            {children}
          </SessionProvider>
      </body>
    </html>
  );
}
