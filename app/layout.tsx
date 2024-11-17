import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import { Metadata } from "next";
import NavMenu from "./components/NavMenu";

export const metadata: Metadata ={
  title: 'Personal Dashboard App',
  description: "A personal dashboard App to manage your projects and tasks"
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
       <SessionProvider session={session}>
          <NavMenu />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
