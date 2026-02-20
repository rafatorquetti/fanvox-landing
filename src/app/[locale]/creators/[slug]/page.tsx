"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { creators } from "@/lib/creators";
import StickyAccessCTA from "@/components/StickyAccessCTA";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getIndustryRequests(category: string) {
  switch (category) {
    case "Sports":
      return [
        "Performance breakdown session",
        "Mindset & discipline strategy",
      ];
    case "Business":
      return [
        "Startup pitch feedback",
        "Scaling strategy consultation",
      ];
    case "Venture":
      return [
        "Fundraising feedback",
        "Investor mindset session",
      ];
    case "Science":
      return [
        "Research insight discussion",
        "Industry career advice",
      ];
    case "Arts":
      return [
        "Creative portfolio review",
        "Storytelling feedback",
      ];
    default:
      return [
        "Personalized written response",
        "Custom advisory session",
      ];
  }
}

export default function CreatorProfilePage({ params }: PageProps) {
  const { slug } = use(params);
  const creator = creators.find((c) => c.slug === slug);

  if (!creator) notFound();

  const industryRequests = getIndustryRequests(creator.category);

  return (
    <main className="mx-auto max-w-6xl px-6 py-28 space-y-24">

      {/* HERO */}
      <section className="relative space-y-12">

        <div className="relative h-[420px] rounded-3xl overflow-hidden">
          <img
            src={creator.cover}
            alt={creator.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative -mt-32 flex flex-col md:flex-row gap-10">

          <div className="relative h-56 w-56 rounded-full overflow-hidden border-4 border-purple-500 bg-black shadow-2xl">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">

            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {creator.name}
            </h1>

            <span className="inline-block rounded-full border border-purple-400/30 px-4 py-1.5 text-sm text-purple-300">
              {creator.category}
            </span>

            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              {creator.description}
            </p>

            {/* Extended curated bio */}
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Through Fanvox, you can request direct, personalized interaction —
              tailored to your needs. Whether it's strategic advice, personal
              insight, performance feedback, or a meaningful message,
              this is your opportunity to connect intentionally.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-8 text-sm text-gray-400">
              <div>
                <span className="text-yellow-400 font-semibold">
                  ★ {creator.rating}
                </span>{" "}
                ({creator.reviews} reviews)
              </div>
              <div>{creator.interactions} completed requests</div>
              <div>{creator.responseTime} average response</div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT YOU CAN REQUEST */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-white">
          Popular requests
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Personalized video message",
            "30-minute private call",
            "5 written responses",
            ...industryRequests,
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 hover:border-white/20 transition"
            >
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Scarcity */}
      <div className="text-sm text-purple-400">
        Limited availability this week.
      </div>

      {/* CTA */}
      <StickyAccessCTA creatorName={creator.name} />

    </main>
  );
}
