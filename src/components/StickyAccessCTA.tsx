"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";

type StickyAccessCTAProps = {
  creatorName: string;
};

export default function StickyAccessCTA({
  creatorName,
}: StickyAccessCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show CTA after user scrolls a bit
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        z-50
        w-[calc(100%-2rem)] max-w-md
      "
    >
      <div
        className="
          flex items-center justify-between gap-4
          rounded-2xl
          border border-white/10
          bg-black/60 backdrop-blur-xl
          px-4 py-3
          shadow-2xl
          animate-[fadeUp_0.25s_ease-out]
        "
      >
        <div className="text-sm text-gray-200 leading-tight">
          <span className="font-medium">
            Access {creatorName}
          </span>
          <br />
          <span className="text-gray-400">
            Unlock personalized interactions
          </span>
        </div>

        {/* BUTTON WRAPPER — NO className PASSED TO Button */}
        <div
          className="
            rounded-xl
            bg-gradient-to-r from-indigo-500/90 to-purple-600/90
            hover:from-indigo-500 hover:to-purple-600
            transition-all duration-300
            shrink-0
          "
        >
          <Button href="/dashboard">
            Get access
          </Button>
        </div>
      </div>
    </div>
  );
}