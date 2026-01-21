import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fanvox — Personal access to creators you admire",
  description:
    "Request personalized interactions delivered directly by verified creators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
          min-h-screen
          bg-gradient-to-br from-black via-[#0b0b1a] to-[#1a0b2e]
          text-white
          antialiased
          overflow-x-hidden
        "
      >
        {children}
      </body>
    </html>
  );
}
