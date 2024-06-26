import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Adam Salem - Portfolio",
  description: "My portfolio site",
};
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  "use client";
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar>
          <ThemeToggle />
        </Navbar>
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
