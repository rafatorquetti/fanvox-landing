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
    "Request personalized interactions from verified creators.",
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
          min-h-screen
          bg-[#020617]
          text-white
          relative
        `}
      >
        {/* STATIC GLOBAL BACKGROUND */}
        <div
          aria-hidden
          className="fixed inset-0 -z-10
          bg-gradient-to-br
          from-[#020617]
          via-[#0b1023]
          to-[#1e1b4b]"
        />

        {children}
      </body>
    </html>
  );
}
