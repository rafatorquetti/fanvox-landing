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
    <Link href={`/${locale}/creators/${creator.slug}`} className="block">
      <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#070B14] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

        {/* COVER IMAGE (bulletproof) */}
        <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-[#0B0F25] to-[#121A3A]">
          <img
            src={creator.cover || "/fallbacks/creator-cover.jpg"}
            alt={creator.name}
            className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "/fallbacks/creator-cover.jpg";
            }}
          />

          {creator.verified && (
            <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
              ✓ Verified
            </div>
          )}
        </div>

        {/* CARD BODY */}
        <div className="relative px-5 pb-5 pt-14">

          {/* AVATAR */}
          <div className="absolute -top-10 left-5">
            <div className="relative">
              <img
                src={creator.avatar || "/fallbacks/avatar.jpg"}
                alt={creator.name}
                className="h-20 w-20 rounded-full object-cover border-4 border-[#070B14]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/fallbacks/avatar.jpg";
                }}
              />

              {creator.trending && (
                <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-orange-500 border-2 border-black flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  ↗
                </div>
              )}
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white">{creator.name}</h3>

          <div className="mt-1 mb-3">
            <span className="text-xs px-3 py-1 rounded-full border border-purple-400/40 text-purple-300">
              {creator.category}
            </span>
          </div>

          <p className="text-sm text-gray-400 line-clamp-2">{creator.description}</p>

          <div className="flex items-center justify-between mt-4 text-sm">
            <div className="text-yellow-400">
              ★ {creator.rating}
              <span className="text-gray-500 ml-1">({creator.reviews})</span>
            </div>
            <div className="text-gray-400">{creator.interactions} sessions</div>
          </div>

          <div className="mt-2 text-xs text-gray-500">
            Responds in {creator.responseTime} • {creator.availability}
          </div>
        </div>
      </div>
    </Link>
  );
}
