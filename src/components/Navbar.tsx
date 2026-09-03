"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Navbar() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const locale = (params?.locale as string) || "en";
  const t = useTranslations("Navbar");

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const homePath = `/${locale}`;

  const isHome =
    pathname === homePath || pathname === `${homePath}/`;

  const isForCreators =
    pathname === `/${locale}/for-creators`;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    const offset = 72;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.history.pushState(null, "", `#${id}`);

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const handleNavigateToSection = (id: string) => {
    if (isHome) {
      handleScrollTo(id);
      return;
    }

    router.push(`${homePath}#${id}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 40);

      if (!isHome) {
        setActiveSection(null);
        return;
      }

      const creators =
        document.getElementById("creators");

      const howItWorks =
        document.getElementById("how-it-works");

      if (!creators || !howItWorks) {
        setActiveSection(null);
        return;
      }

      const creatorsTop =
        creators.offsetTop - 120;

      const howTop =
        howItWorks.offsetTop - 120;

      if (scrollY >= howTop) {
        setActiveSection("how-it-works");
      } else if (scrollY >= creatorsTop) {
        setActiveSection("creators");
      } else {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    requestAnimationFrame(() => {
      if (isHome) {
        const hash =
          window.location.hash.replace("#", "");

        if (
          hash === "creators" ||
          hash === "how-it-works"
        ) {
          handleScrollTo(hash);
        }
      }

      handleScroll();
    });

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [pathname, locale, isHome]);

  const switchLocale = (
    targetLocale: string
  ) => {
    const segments = pathname.split("/");

    segments[1] = targetLocale;

    return segments.join("/");
  };

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
      <div
        className={`
          w-full max-w-6xl
          flex items-center justify-between
          px-4 sm:px-6
          py-3 sm:py-3
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
        {/* LOGO / HOME */}
        <Link
          href={`/${locale}`}
          className="flex items-center"
        >
          <span className="text-lg sm:text-lg font-semibold tracking-tight text-white">
            Fanvox
          </span>
        </Link>

        {/* NAV */}
        <div className="hidden md:flex items-center gap-10 text-sm">

          {/* EXPLORE */}
          <button
            onClick={() =>
              handleNavigateToSection("creators")
            }
            className={`transition ${
              activeSection === "creators"
                ? "text-purple-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {t("explore")}
          </button>

          {/* HOW IT WORKS */}
          <button
            onClick={() =>
              handleNavigateToSection(
                "how-it-works"
              )
            }
            className={`transition ${
              activeSection ===
              "how-it-works"
                ? "text-purple-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {t("howItWorks")}
          </button>

          {/* FOR CREATORS */}
          <Link
            href={`/${locale}/for-creators`}
            className={`transition ${
              isForCreators
                ? "text-purple-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {t("forCreators")}
          </Link>

        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 sm:gap-6">

          {/* LANGUAGE SWITCH */}
          <div className="flex items-center gap-2 text-xs sm:text-sm">

            <Link
              href={switchLocale("en")}
              className={`transition ${
                locale === "en"
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              EN
            </Link>

            <span className="text-gray-500">
              |
            </span>

            <Link
              href={switchLocale("pt")}
              className={`transition ${
                locale === "pt"
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              PT
            </Link>

          </div>

          {/* LOGIN */}
          <a
            href="https://app.fanvox.co/Home"
            className="hidden sm:block text-sm text-gray-300 hover:text-white transition"
          >
            {t("login")}
          </a>

          {/* GET STARTED */}
          <a
            href="https://app.fanvox.co/Home"
            className="
              rounded-xl
              px-4 sm:px-6
              py-2.5 sm:py-2.5
              text-xs sm:text-sm font-semibold text-white
              bg-gradient-to-r from-purple-600 to-indigo-600
              shadow-[0_0_25px_rgba(124,58,237,0.35)]
              hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]
              transition-all duration-300
            "
          >
            {t("getStarted")}
          </a>

        </div>
      </div>
    </div>
  );
}