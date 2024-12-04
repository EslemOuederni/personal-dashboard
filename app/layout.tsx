import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";
import { Metadata } from "next";
import { authOptions } from "../lib/auth";
import NavBar from "@/components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: "Personal Dashboard App",
  description: "A personal dashboard App to manage your projects and tasks",
};

export default async function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <SidebarProvider>
            <NavBar />
            <div className="flex flex-col w-full sm:gap-4 sm:py-4">
              <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b sm:static sm:h-auto sm:border-0 ">
                <Header />
              </header>
              <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4">
                {children}
              </main>
            </div>
          </SidebarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
