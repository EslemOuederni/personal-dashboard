import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Dashboard App",
  description: "A personal dashboard App to manage your projects and tasks",
};

export default async function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-y-hidden">
        {children}
      </body>
    </html>
  );
}
