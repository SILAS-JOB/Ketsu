import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResizableNavbar from "@/components/ResizableNavbar"; // <-- navbar nova

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ketsu",
  description: "Site oficial desenvolvido em Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* 🔥 NAVBAR central fixa */}
        <ResizableNavbar />

        {/* 🔹 Conteúdo das páginas */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
