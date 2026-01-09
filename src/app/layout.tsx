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
  title: {
    default: "Fanvox — Personalized access to creators",
    template: "%s · Fanvox",
  },
  description:
    "Fanvox lets fans request personalized videos, 1:1 calls, shoutouts, and advice from verified creators. Pay per request. No subscriptions.",

  metadataBase: new URL("https://www.fanvox.co"),

  openGraph: {
    title: "Fanvox — Personalized access to creators",
    description:
      "Request videos, 1:1 calls, shoutouts, and advice from verified creators. Secure payments. No subscriptions.",
    url: "https://www.fanvox.co",
    siteName: "Fanvox",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Fanvox — Personalized access to creators",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fanvox — Personalized access to creators",
    description:
      "Request videos, calls, shoutouts, and advice from verified creators. Pay per request. No subscriptions.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.fanvox.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
