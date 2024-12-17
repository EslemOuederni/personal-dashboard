import { SessionProvider } from 'next-auth/react';
import "./globals.css";
import { Metadata } from "next";
import { auth } from '@/lib/auth';

export const metadata: Metadata = {
  title: "Personal Dashboard App",
  description: "A personal dashboard App to manage your projects and tasks",
};

export default async function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className="overflow-y-hidden">
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
