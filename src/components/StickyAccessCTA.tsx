"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type Props = {
  creatorName: string;
};

export default function StickyAccessCTA({ creatorName }: Props) {
  const [visible, setVisible] = useState(false);

  const t = useTranslations("Creator");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 8) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed
        bottom-[max(1rem,env(safe-area-inset-bottom))]
        left-1/2
        z-50
        w-[92%]
        max-w-xl
        -translate-x-1/2
        transition-all duration-300 ease-out
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl px-4 sm:px-6 py-3 sm:py-5 shadow-2xl">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-indigo-600/10" />

        <div className="relative flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            <p className="text-xs sm:text-sm text-gray-400">
              {t("cta.access")}
            </p>

            <p className="text-base sm:text-lg font-semibold text-white leading-tight">
              {creatorName}
            </p>

            <p className="text-[11px] sm:text-xs text-purple-300">
              {t("cta.price")}
            </p>
          </div>

          <a
            href="https://app.fanvox.co/home"
            target="_blank"
            rel="noopener noreferrer"
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
            {t("cta.request")}
          </a>
        </div>
      </div>
    </div>
  );
}