import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";
import { Metadata } from "next";
import { authOptions } from "../lib/auth";
import NavBar from "@/components/Navbar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Personal Dashboard App",
  description: "A personal dashboard App to manage your projects and tasks",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className="overflow-y-hidden">
        <SessionProvider session={session}>
          <SidebarProvider>
            <NavBar />
            <div className="flex flex-col w-full h-screen p-2">
              <header className="bg-white h-[12%] fixed top-0 left-0 z-30 flex items-center sm:sticky rounded-tl-[18px] rounded-tr-[18px] border-b border-[#DBDBDB] sm:border-1 min-[300px]:sticky ">
                <Header />
              </header>
              <main className="bg-white items-start h-[88%] gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 overflow-y-scroll rounded-br-[18px] rounded-bl-[18px] border-t-0 ">
                {children}
              </main>
            </div>
          </SidebarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
