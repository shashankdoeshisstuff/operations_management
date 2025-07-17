import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BreadButter Creative Hub",
  description: "Internal creative operations & communications platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content column */}
          <div className="flex flex-col flex-1">
            {/* Topbar (fixed height) */}
            <Topbar />

            {/* Scrollable main */}
            <main className="flex-1 overflow-y-auto bg-gray-50">
              <div className="p-6">{children}</div>
            </main>
          </div>

          {/* Toast notifications */}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
