import Link from "next/link";
import { Creator } from "@/lib/creators";

export default function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Link href={`/creators/${creator.slug}`} className="group">
      <div
        className="
          relative h-full rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          p-6
          transition-all duration-300
          hover:-translate-y-1 hover:scale-[1.01]
          hover:border-violet-400/40
          hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
        "
      >
        {/* Category */}
        <div className="text-xs uppercase tracking-wider text-violet-300 mb-3">
          {creator.category}
        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold mb-2">
          {creator.name}
        </h3>

        {/* Bio */}
        <p className="text-sm text-white/70 mb-4">
          {creator.bio}
        </p>

        {/* Services */}
        <p className="text-sm text-white/80 mb-6">
          {creator.services.join(" · ")}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-white/60">
          <span>⭐ {creator.rating} ({creator.reviews})</span>
          <span>{creator.interactions} interactions</span>
        </div>

        {/* Hover glow overlay */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-2xl
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-gradient-to-br from-violet-500/10 to-transparent
          "
        />
      </div>
    </Link>
  );
}
