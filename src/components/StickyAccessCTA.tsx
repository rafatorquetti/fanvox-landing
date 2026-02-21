"use client";

type Props = {
  creatorName: string;
};

export default function StickyAccessCTA({ creatorName }: Props) {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[92%] max-w-xl -translate-x-1/2">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl px-6 py-5 shadow-2xl">
        {/* 🚫 NO FILL IMAGES ANYWHERE HERE */}

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-400">
              Want access to
            </p>
            <p className="text-base font-semibold text-white">
              {creatorName}?
            </p>
          </div>

          <button className="rounded-xl bg-purple-500 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-400 transition">
            Request access
          </button>
        </div>
      </div>
    </div>
  );
}
