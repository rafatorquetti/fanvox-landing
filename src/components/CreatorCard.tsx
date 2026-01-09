import Link from "next/link";

type Creator = {
  slug: string;
  name: string;
  category: string;
  bio: string;
  rating: number;
  reviews: number;
  interactions: number;
  responseTimeHours?: number;
  verified?: boolean;
};

export default function CreatorCard({ creator }: { creator: Creator }) {
  const fastResponder =
    creator.responseTimeHours !== undefined &&
    creator.responseTimeHours <= 24;

  return (
    <Link
      href={`/creators/${creator.slug}`}
      className="group relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
    >
      {/* Verified badge */}
      {creator.verified && (
        <span className="absolute top-4 right-4 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
          Verified
        </span>
      )}

      {/* Avatar placeholder (intentional, premium) */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-lg font-bold text-white shadow-lg">
        {creator.name.charAt(0)}
      </div>

      {/* Name + category */}
      <div className="space-y-1">
        <h3 className="text-xl font-semibold leading-tight text-white">
          {creator.name}
        </h3>
        <span className="inline-block rounded-full border border-purple-400/30 px-3 py-1 text-xs text-purple-300">
          {creator.category}
        </span>
      </div>

      {/* Bio */}
      <p className="mt-3 line-clamp-2 text-sm text-gray-300">
        {creator.bio}
      </p>

      {/* Social proof */}
      <div className="mt-5 flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">★</span>
          <span className="text-gray-200 font-medium">
            {creator.rating.toFixed(1)}
          </span>
          <span>
            ({creator.reviews})
          </span>
        </div>

        <div>
          {creator.interactions}+ fans served
        </div>
      </div>

      {/* Speed & availability signals */}
      <div className="mt-3 flex items-center gap-3 text-xs text-gray-400">
        {creator.responseTimeHours !== undefined && (
          <span>
            Responds in{" "}
            <span className="text-gray-200 font-medium">
              {creator.responseTimeHours}h
            </span>
          </span>
        )}

        {fastResponder && (
          <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-green-400">
            Fast responder
          </span>
        )}
      </div>

      {/* Hover intent cue */}
      <div className="pointer-events-none absolute inset-x-6 bottom-6 flex justify-end opacity-0 transition group-hover:opacity-100">
        <span className="text-sm font-semibold text-purple-400">
          View profile →
        </span>
      </div>
    </Link>
  );
}

