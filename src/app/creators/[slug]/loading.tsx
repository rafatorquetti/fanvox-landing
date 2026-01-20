export default function LoadingCreatorProfile() {
    return (
      <main className="mx-auto max-w-5xl px-6 py-28 space-y-20 animate-pulse">
        {/* HEADER SKELETON */}
        <section className="space-y-8">
          <div className="h-80 rounded-3xl bg-white/5" />
  
          <div className="space-y-3">
            <div className="h-10 w-72 rounded bg-white/10" />
            <div className="h-6 w-40 rounded bg-white/10" />
          </div>
  
          <div className="h-6 w-full max-w-3xl rounded bg-white/10" />
  
          <div className="flex gap-6">
            <div className="h-5 w-32 rounded bg-white/10" />
            <div className="h-5 w-40 rounded bg-white/10" />
          </div>
        </section>
  
        {/* SERVICES SKELETON */}
        <section className="space-y-10">
          <div className="h-8 w-96 rounded bg-white/10" />
  
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-48 rounded-2xl bg-white/5 border border-white/10"
              />
            ))}
          </div>
        </section>
      </main>
    );
  }
  