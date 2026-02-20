"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Navbar() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <div
        className="
        w-full max-w-6xl
        flex items-center justify-between
        px-6 py-3
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      "
      >
        {/* LEFT — LOGO */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div
            className="
            h-10 w-10
            rounded-xl
            bg-gradient-to-br from-purple-500 to-indigo-600
            shadow-[0_0_20px_rgba(124,58,237,0.5)]
          "
          />

          <span className="text-lg font-semibold tracking-tight text-white">
            Fanvox
          </span>
        </Link>

        {/* CENTER — NAV */}
        <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
          <Link
            href={`/${locale}/creators`}
            className="hover:text-white transition"
          >
            Explore
          </Link>

          <Link
            href={`/${locale}/how-it-works`}
            className="hover:text-white transition"
          >
            How it works
          </Link>

          <Link
            href={`/${locale}/for-creators`}
            className="hover:text-white transition"
          >
            For creators
          </Link>
        </div>

        {/* RIGHT — ACTIONS */}
        <div className="flex items-center gap-6">
          <Link
            href={`/${locale}/login`}
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Log in
          </Link>

          <Link
            href={`/${locale}/signup`}
            className="
              rounded-xl
              px-6 py-2.5
              text-sm font-semibold text-white
              bg-gradient-to-r from-purple-600 to-indigo-600
              shadow-[0_0_25px_rgba(124,58,237,0.35)]
              hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]
              transition-all duration-300
            "
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}