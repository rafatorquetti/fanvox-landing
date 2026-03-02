"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  creatorName: string;
};

export default function StickyAccessCTA({ creatorName }: Props) {
  const [visible, setVisible] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // ✅ appear only after meaningful scroll
      if (currentY > 140) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // ✅ hide on scroll down, show on scroll up
      if (currentY > lastScrollY.current && currentY > 200) {
        setShowBar(false);
      } else {
        setShowBar(true);
      }

      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed
        bottom-[max(1rem,env(safe-area-inset-bottom))]
        left-1/2
        z-50
        w-[92%] sm:w-[94%]
        max-w-xl
        -translate-x-1/2
        transition-all duration-300 ease-out
        ${
          showBar
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl px-4 sm:px-6 py-3 sm:py-5 shadow-2xl">
        {/* subtle glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-indigo-600/10" />

        <div className="relative flex items-center justify-between gap-4">
          {/* LEFT — intent stack */}
          <div className="space-y-0.5">
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
              shadow-[0_0_18px_rgba(124,58,237,0.28)]
              hover:shadow-[0_0_28px_rgba(124,58,237,0.45)]
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