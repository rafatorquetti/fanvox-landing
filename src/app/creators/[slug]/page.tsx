"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { creators } from "@/lib/creators";
import Button from "@/components/Button";
import StickyAccessCTA from "@/components/StickyAccessCTA";


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function CreatorProfilePage({ params }: PageProps) {
  const { slug } = use(params);

  const creator = creators.find((c) => c.slug === slug);

  if (!creator) {
    notFound();
  }

  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowStickyCTA(window.scrollY > 420);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* ================= STICKY CTA ================= */}
      <div
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ease-out ${
          showStickyCTA
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-4 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 px-6 py-4 shadow-2xl">
          <span className="text-sm text-gray-200">
            Unlock access to{" "}
            <strong className="text-white">{creator.name}</strong>
          </span>
          <Button href="/dashboard">Get access</Button>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-28 space-y-32">
        {/* ================= CREATOR HERO ================= */}
        <section className="relative">
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

          <div className="relative -mt-32 md:-mt-40 flex flex-col gap-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
              <div className="flex items-end gap-10">
                <div className="relative h-56 w-56 md:h-64 md:w-64 rounded-full overflow-hidden border-4 border-purple-400 bg-black shadow-2xl">
                  <Image
                    src={creator.avatar}
                    alt={creator.name}
                    fill
                    className="object-cover"
                  />
                </div>

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

              <div className="flex flex-col items-start md:items-end gap-4">
                <Button href="/dashboard">
                  Get access to {creator.name}
                </Button>

                <span className="text-sm text-green-400">
                  Available for requests
                </span>
              </div>
            </div>

            <div className="space-y-6 max-w-4xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                {creator.description}
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>
                  ★ {creator.rating.toFixed(1)} ({creator.reviews} reviews)
                </span>
                <span>{creator.requests}+ requests completed</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= LOCKED ACCESS PREVIEW ================= */}
        <section className="space-y-14">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">What access unlocks</h2>
            <p className="max-w-2xl text-lg text-gray-300">
              Access unlocks personalized interactions — available after joining.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Text response",
                description: "Receive a personalized written reply.",
              },
              {
                title: "Video message",
                description: "Get a custom video made just for you.",
              },
              {
                title: "Video call",
                description: `Book a one-on-one video call with ${creator.name}.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative rounded-2xl bg-black/30 border border-white/10 backdrop-blur-xl p-10 space-y-4 opacity-80"
              >
                <div className="absolute inset-0 rounded-2xl bg-black/10 pointer-events-none" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <StickyAccessCTA creatorName={creator.name} />
      </main>
    </div>
  );
}
