import { creators } from "@/lib/creators";
import Button from "@/components/Button";
import { notFound } from "next/navigation";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CreatorProfilePage({ params }: PageProps) {
  const { slug } = await params;

  const creator = creators.find(
    (c) => c.slug === slug
  );

  if (!creator) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-28 space-y-20">
      {/* ================= HEADER ================= */}
      <section className="space-y-8">
        <div className="relative h-80 rounded-3xl overflow-hidden">
          <Image
            src={creator.cover}
            alt={creator.name}
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {creator.name}
              </h1>

              {creator.verified && (
                <span className="inline-flex items-center justify-center rounded-full bg-blue-500 text-white text-sm px-2 py-1">
                  ✓
                </span>
              )}
            </div>

            <span className="inline-block rounded-full border border-purple-400/30 px-3 py-1 text-sm text-purple-300">
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

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <span>
            ★ {creator.rating.toFixed(1)} ({creator.reviews} reviews)
          </span>
          <span>
            {creator.requests}+ requests completed
          </span>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold">
          Request a personalized interaction
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl p-8 space-y-4">
            <h3 className="text-xl font-semibold">
              Text response
            </h3>
            <p className="text-gray-300 text-sm">
              Receive a personalized written reply.
            </p>
            <Button href="/dashboard">
              Request text reply
            </Button>
          </div>

          <div className="rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl p-8 space-y-4">
            <h3 className="text-xl font-semibold">
              Video message
            </h3>
            <p className="text-gray-300 text-sm">
              Get a custom video made just for you.
            </p>
            <Button href="/dashboard">
              Request video message
            </Button>
          </div>

          <div className="rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl p-8 space-y-4">
            <h3 className="text-xl font-semibold">
              Video call
            </h3>
            <p className="text-gray-300 text-sm">
              Book a one-on-one video call with {creator.name}.
            </p>
            <Button href="/dashboard">
              Request video call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
