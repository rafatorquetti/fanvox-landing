import Link from "next/link";
import Image from "next/image";
import { Creator } from "@/lib/creators";

export default function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <Link
      href={`/creators/${creator.slug}`}
      className="
        group relative block cursor-pointer
        overflow-hidden rounded-3xl
        border border-white/10
        bg-black/40 backdrop-blur-xl

        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        hover:ring-1 hover:ring-purple-400/30
        active:translate-y-0
      "
    >
      {/* COVER IMAGE */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={creator.cover}
          alt={`${creator.name} cover`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="
            object-cover
            transition-transform duration-[900ms] ease-out
            group-hover:scale-[1.08]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="relative px-6 pb-6 pt-24">
        {/* AVATAR — PRIMARY HOOK */}
        <div
          className="
            absolute -top-16 left-6
            h-36 w-36
            rounded-full overflow-hidden
            border-[5px] border-purple-400
            bg-black

            transition-transform duration-300 ease-out
            group-hover:scale-[1.04]
          "
        >
          <Image
            src={creator.avatar}
            alt={creator.name}
            width={144}
            height={144}
            className="object-cover"
          />
        </div>

        {/* NAME + VERIFIED */}
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-semibold text-white">
            {creator.name}
          </h3>

          {creator.verified && (
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-bold">
              ✓
            </span>
          )}
        </div>

        {/* CATEGORY */}
        <span className="mt-3 inline-block rounded-full border border-purple-400/40 px-3 py-1 text-xs text-purple-300">
          {creator.category}
        </span>

        {/* SHORT DESCRIPTION */}
        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          {creator.shortDescription}
        </p>

        {/* STATS */}
        <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
          <span className="flex items-center gap-1 text-yellow-400">
            ⭐ {creator.rating}
            <span className="text-gray-500">
              ({creator.reviews})
            </span>
          </span>

          <span>
            {creator.requests}+ requests completed
          </span>
        </div>
      </div>
    </Link>
  );
}
