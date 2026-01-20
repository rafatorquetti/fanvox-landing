import { creators } from "@/lib/creators";
import CreatorCard from "@/components/CreatorCard";

export default function CreatorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-28 space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">
          Available creators
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Real people. Verified profiles. Ready to respond to your request.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {creators.map((creator) => (
          <CreatorCard key={creator.slug} creator={creator} />
        ))}
      </section>
    </main>
  );
}
