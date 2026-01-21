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

  const creator = creators.find((c) => c.slug === slug);

  if (!creator) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-28 space-y-32">
      {/* ================= CREATOR HERO ================= */}
      <section className="relative">
        {/* COVER / WORLD */}
        <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden">
          <Image
            src={creator.cover}
            alt={creator.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* IDENTITY BLOCK */}
        <div className="relative -mt-32 md:-mt-40 flex flex-col gap-14">
          {/* TOP ROW */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
            {/* LEFT — AVATAR + NAME */}
            <div className="flex items-end gap-10">
              {/* BIG AVATAR — INVADING WORLD */}
              <div className="relative h-56 w-56 md:h-64 md:w-64 rounded-full overflow-hidden border-4 border-purple-400 bg-black shadow-2xl">
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* NAME + META */}
              <div className="space-y-4 pb-6">
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

                <span className="inline-block rounded-full border border-purple-400/30 px-4 py-1.5 text-sm text-purple-300">
                  {creator.category}
                </span>
              </div>
            </div>

            {/* RIGHT — PRIMARY CTA */}
            <div className="flex flex-col items-start md:items-end gap-4">
              <Button href="/dashboard">
                Get access to {creator.name}
              </Button>

              <span className="text-sm text-green-400">
                Available for requests
              </span>
            </div>
          </div>

          {/* EDITORIAL DESCRIPTION */}
          <div className="space-y-6 max-w-4xl">
            <p className="text-lg text-gray-300 leading-relaxed">
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
          </div>
        </div>
      </section>

      {/* ================= ACCESS PREVIEW ================= */}
      <section className="space-y-14">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">
            What you can request
          </h2>
          <p className="max-w-2xl text-lg text-gray-300">
            Access unlocks the ability to request personalized interactions directly from {creator.name}.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl p-10 space-y-4">
            <h3 className="text-xl font-semibold">
              Text response
            </h3>
            <p className="text-gray-300 text-sm">
              Receive a personalized written reply.
            </p>
            <Button href="/dashboard">
              Get access
            </Button>
          </div>

          <div className="rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl p-10 space-y-4">
            <h3 className="text-xl font-semibold">
              Video message
            </h3>
            <p className="text-gray-300 text-sm">
              Get a custom video made just for you.
            </p>
            <Button href="/dashboard">
              Get access
            </Button>
          </div>

          <div className="rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl p-10 space-y-4">
            <h3 className="text-xl font-semibold">
              Video call
            </h3>
            <p className="text-gray-300 text-sm">
              Book a one-on-one video call with {creator.name}.
            </p>
            <Button href="/dashboard">
              Get access
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
