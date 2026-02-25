"use client";

import Link from "next/link";
import type { Creator } from "@/lib/creators";

export default function CreatorCard({
  creator,
  locale,
}: {
  creator: Creator;
  locale: string;
}) {
  return (
    <Link
      href={`/${locale}/creators/${creator.slug}`}
      className="block active:scale-[0.99] transition-transform duration-150"
    >
      {/* ⭐ wrapper added for clipping stability */}
      <div className="relative rounded-3xl overflow-hidden">
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border border-white/5
            bg-[#070B14]
            hover:border-white/20
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            will-change-transform
            transform-gpu
            backface-hidden
          "
        >
          {/* COVER IMAGE */}
          <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-gradient-to-br from-[#0B0F25] to-[#121A3A]">
            <img
              src={creator.cover || "/fallbacks/creator-cover.jpg"}
              alt={creator.name}
              className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "/fallbacks/creator-cover.jpg";
              }}
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {creator.verified && (
              <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md backdrop-blur">
                ✓ Verified
              </div>
            )}
          </div>

          {/* CARD BODY */}
          <div className="relative px-4 sm:px-5 pb-4 sm:pb-5 pt-12 sm:pt-14">
            {/* AVATAR */}
            <div className="absolute -top-8 sm:-top-10 left-4 sm:left-5">
              <div className="relative">
                <img
                  src={creator.avatar || "/fallbacks/avatar.jpg"}
                  alt={creator.name}
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-4 border-[#070B14] shadow-lg"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/fallbacks/avatar.jpg";
                  }}
                />

                {creator.trending && (
                  <div className="absolute -bottom-1 -right-1 h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-orange-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    ↗
                  </div>
                )}
              </div>
            </div>

            {/* NAME */}
            <h3 className="text-base sm:text-lg font-semibold text-white">
              {creator.name}
            </h3>

            {/* CATEGORY */}
            <div className="mt-1 mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border border-purple-400/40 text-purple-300">
                {creator.category}
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-400 line-clamp-2">
              {creator.description}
            </p>

            {/* STATS */}
            <div className="flex items-center justify-between mt-3 sm:mt-4 text-sm">
              <div className="text-yellow-400">
                ★ {creator.rating}
                <span className="text-gray-500 ml-1">
                  ({creator.reviews})
                </span>
              </div>
              <div className="text-gray-400">
                {creator.interactions} sessions
              </div>
            </div>

            {/* RESPONSE */}
            <div className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-gray-500">
              Responds in {creator.responseTime} • {creator.availability}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}