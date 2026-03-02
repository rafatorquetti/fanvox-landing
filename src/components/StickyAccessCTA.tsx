"use client";

import { useEffect, useState } from "react";

type Props = {
  creatorName: string;
};

export default function StickyAccessCTA({ creatorName }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // show after slight scroll (mobile-friendly threshold)
      if (window.scrollY > 80) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    handleScroll(); // run once
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="
        fixed
        bottom-[max(1rem,env(safe-area-inset-bottom))]
        left-1/2
        z-50
        w-[92%] sm:w-[94%]
        max-w-xl
        -translate-x-1/2
      "
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl px-4 sm:px-6 py-3.5 sm:py-5 shadow-2xl">
        {/* subtle glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-indigo-600/10" />

        <div className="relative flex items-center justify-between gap-4">
          {/* LEFT — intent stack */}
          <div className="space-y-1">
            <p className="text-xs sm:text-sm text-gray-400">
              Get direct access to
            </p>

            <p className="text-base sm:text-lg font-semibold text-white leading-tight">
              {creatorName}
            </p>

            <p className="text-[11px] sm:text-xs text-purple-300">
              From $49 • Typical response 6h
            </p>
          </div>

          {/* RIGHT — primary action */}
          <button
            className="
              relative
              rounded-xl
              px-[18px] sm:px-5
              py-2.5 sm:py-3
              text-sm font-semibold text-white
              bg-gradient-to-r from-purple-600 to-indigo-600
              shadow-[0_0_25px_rgba(124,58,237,0.35)]
              hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]
              hover:scale-[1.03]
              active:scale-[0.97]
              transition-all duration-200
              whitespace-nowrap
            "
          >
            Request access
          </button>
        </div>
      </div>
    </div>
  );
}