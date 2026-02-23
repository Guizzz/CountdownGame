import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import LeaderBoard from "../components/LeaderBoard";
import Footer from "../components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CountDown Game",
  description: "Try to create the longest word with the given letters!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-light-gray">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
                    antialiased 
                    min-h-screen 
                    flex 
                    flex-col 
                    bg-[var(--color-background)]`}
      >
        <LeaderBoard />
        <Navbar />

        {/* Contenuto che si espande */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
