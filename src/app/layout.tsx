// FORCE_FULL_REBUILD_2026_01_13
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fanvox — Personal access to creators",
  description:
    "Request personalized videos, private calls, shoutouts, or advice from verified creators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable}
          relative min-h-screen overflow-x-hidden
        `}
      >
        {/* GLOBAL BACKGROUND */}
        <div
          aria-hidden
          className="fixed inset-0 -z-10 bg-app-gradient"
        />

        {children}
      </body>
    </html>
  );
}
