import { creators } from "@/lib/creators";
import Button from "@/components/Button";
import Image from "next/image";
import { notFound } from "next/navigation";

// 👇 artificial delay to allow loading.tsx to render
async function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export default async function CreatorProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  // ⏳ simulate real-world fetch latency
  await delay(500);

  const creator = creators.find(
    (c) => c.slug === params.slug
  );

  if (!creator) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-28 space-y-20">
      {/* ================= HEADER ================= */}
      <section className="space-y-10">
        <div className="relative h-80 rounded-3xl overflow-hidden">
          <Image
            src={creator.cover}
            alt={`${creator.name} cover`}
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center gap-3">
              {creator.name}
              {creator.verified && (
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white text-sm">
                  ✓
                </span>
              )}
            </h1>

            <span className="inline-block w-fit rounded-full border border-purple-400/40 px-4 py-1 text-sm text-purple-300">
              {creator.category}
            </span>
          </div>

          <div className="text-sm text-gray-400">
            Available for requests
          </div>
        </div>

        <p className="max-w-3xl text-lg text-gray-300">
          {creator.description}
        </p>

        <div className="flex items-center gap-8 text-sm text-gray-400">
          <span>
            ⭐ {creator.rating.toFixed(1)} ({creator.reviews} reviews)
          </span>
          <span>
            {creator.requests}+ requests completed
          </span>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold">
          Request a personalized interaction
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <ServiceCard
            title="Text response"
            text="Get a thoughtful written reply tailored to your situation."
          />
          <ServiceCard
            title="Video message"
            text="Receive a custom video made just for you."
          />
          <ServiceCard
            title="Video call"
            text={`Book a one-on-one video call with ${creator.name}.`}
          />
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl p-8 space-y-4">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
      <p className="text-gray-300 text-sm">
        {text}
      </p>
      <Button href="/dashboard">
        Continue
      </Button>
    </div>
  );
}
