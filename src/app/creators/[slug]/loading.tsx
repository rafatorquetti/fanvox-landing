export default function LoadingCreatorProfile() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-28 space-y-20">
      
      {/* HERO PLACEHOLDER (REAL CONTENT SHOULD STILL RENDER) */}
      {/* Intentionally EMPTY to avoid identity skeleton */}
      <section className="space-y-8">
        <div className="h-80 rounded-3xl bg-transparent" />
      </section>

      {/* SERVICES LOADING */}
      <section className="space-y-10">
        {/* Section title skeleton */}
        <div className="h-8 w-80 rounded bg-white/10 animate-pulse" />

        {/* Cards skeleton */}
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="
                rounded-2xl
                bg-white/5
                border border-white/10
                p-8
                space-y-4
                animate-pulse
              "
            >
              <div className="h-6 w-32 rounded bg-white/10" />
              <div className="h-4 w-full rounded bg-white/10" />
              <div className="h-10 w-32 rounded-full bg-white/10 mt-6" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
