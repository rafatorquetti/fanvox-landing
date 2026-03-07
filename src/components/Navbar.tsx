"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Navbar() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = useTranslations("Navbar");

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 110;

    const top =
      el.getBoundingClientRect().top + window.scrollY - offset;

    window.history.pushState(null, "", `#${id}`);

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 40);

      const howItWorks = document.getElementById("how-it-works");
      const forCreators = document.getElementById("for-creators");

      if (!howItWorks || !forCreators) return;

      const howTop = howItWorks.offsetTop - 120;
      const forTop = forCreators.offsetTop - 120;

      if (scrollY >= forTop) {
        setActiveSection("for-creators");
      } else if (scrollY >= howTop) {
        setActiveSection("how-it-works");
      } else {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
      <div
        className={`
        w-full max-w-6xl
        flex items-center justify-between
        px-5 sm:px-6
        py-3.5 sm:py-3
        rounded-2xl
        border
        backdrop-blur-xl
        transition-all duration-300

        ${
          scrolled
            ? "border-white/20 bg-black/60 shadow-[0_12px_50px_rgba(0,0,0,0.55)]"
            : "border-white/10 bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
        }
      `}
      >
        {/* LOGO */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div
            className="
            h-10 w-10
            rounded-xl
            bg-gradient-to-br from-purple-500 to-indigo-600
            shadow-[0_0_20px_rgba(124,58,237,0.5)]
          "
          />

          <span className="text-base sm:text-lg font-semibold tracking-tight text-white">
            Fanvox
          </span>
        </Link>

        {/* NAV */}
        <div className="hidden md:flex items-center gap-10 text-sm">

          <Link
            href={`/${locale}/creators`}
            className="text-gray-300 hover:text-white transition"
          >
            {t("explore")}
          </Link>

          <button
            onClick={() => handleScrollTo("how-it-works")}
            className={`transition ${
              activeSection === "how-it-works"
                ? "text-purple-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {t("howItWorks")}
          </button>

          <button
            onClick={() => handleScrollTo("for-creators")}
            className={`transition ${
              activeSection === "for-creators"
                ? "text-purple-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {t("forCreators")}
          </button>

        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 sm:gap-6">

          <Link
            href={`/${locale}/login`}
            className="text-sm text-gray-300 hover:text-white transition"
          >
            {t("login")}
          </Link>

          <Link
            href={`/${locale}/signup`}
            className="
              rounded-xl
              px-5 sm:px-6
              py-2.5 sm:py-2.5
              text-sm font-semibold text-white
              bg-gradient-to-r from-purple-600 to-indigo-600
              shadow-[0_0_25px_rgba(124,58,237,0.35)]
              hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]
              transition-all duration-300
            "
          >
            {t("getStarted")}
          </Link>

        </div>
      </div>
    </div>
  );
}