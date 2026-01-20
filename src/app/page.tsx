import Button from "@/components/Button";
import CreatorCard from "@/components/CreatorCard";
import { creators } from "@/lib/creators";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mx-auto max-w-7xl px-6 py-28 space-y-36">
        {/* ================= HERO ================= */}
        <section className="space-y-10">
          <h1 className="max-w-4xl text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Get personal access
            <br />
            <span className="text-purple-400">
              to creators you admire
            </span>
          </h1>

          <p className="max-w-2xl text-xl md:text-2xl text-gray-300">
            Request personalized interactions — delivered directly by verified creators.
          </p>

          {/* PRIMARY CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
            <Button href="/creators">
              Explore creators
            </Button>

            {/* SECONDARY CTA */}
            <Link
              href="/dashboard"
              className="text-sm text-gray-400 hover:text-purple-400 transition"
            >
              I’m a creator — <span className="underline">start earning</span>
            </Link>
          </div>

          <p className="text-sm text-gray-400">
            No subscriptions • Secure payments • Money-back protection
          </p>
        </section>

        {/* ================= CREATOR DISCOVERY ================= */}
        <section className="space-y-12">
          {/* 👇 THIS IS THE NARRATIVE BRIDGE */}
          <div className="space-y-3">
            <h2 className="text-4xl font-bold">
              Available creators
            </h2>

            <p className="max-w-2xl text-lg text-gray-300">
              Real people. Verified profiles. Ready to respond to your request.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {creators.slice(0, 6).map((creator) => (
              <CreatorCard key={creator.slug} creator={creator} />
            ))}
          </div>

          <div className="text-center pt-6">
            <Button href="/creators">
              Browse all creators
            </Button>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="space-y-14">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">How it works</h2>
            <p className="max-w-2xl text-lg text-gray-300">
              A simple, risk-free way to connect — you only pay when creators deliver.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Choose a creator",
                text: "Browse verified creators by category, language, or expertise.",
              },
              {
                step: "2",
                title: "Send your request",
                text: "Ask for a video, call, or message — exactly how you want it.",
              },
              {
                step: "3",
                title: "Get a real response",
                text: "Creators deliver personally, or your payment is refunded.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-8"
              >
                <span className="text-sm font-semibold text-purple-400">
                  STEP {item.step}
                </span>
                <h3 className="mt-4 text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl p-16 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            One request. One creator. One real connection.
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Skip subscriptions and generic content.
            Get something made just for you.
          </p>

          <div className="pt-6 flex flex-col items-center gap-4">
            <Button href="/creators">
              Explore creators
            </Button>

            <Link
              href="/dashboard"
              className="text-sm text-gray-400 hover:text-purple-400 transition"
            >
              I’m a creator — start earning
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
