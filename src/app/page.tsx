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
        <section className="relative space-y-10">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

          <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg" />

          <h1 className="relative max-w-4xl text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Get personal access
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              to your favorite creators
            </span>
          </h1>

          <p className="relative max-w-2xl text-xl md:text-2xl text-gray-300">
            Request personalized videos, private calls, shoutouts, or advice —
            delivered directly by verified creators.
          </p>

          {/* PRIMARY CTA */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
            <Button href="/creators">
              Explore creators
            </Button>

            {/* SECONDARY CTA */}
            <Link
              href="/dashboard"
              className="text-sm text-gray-400 hover:text-purple-400 transition"
            >
              Are you a creator? <span className="underline">Get paid for requests</span>
            </Link>
          </div>

          <p className="relative text-sm text-gray-400">
            No subscriptions • Secure payments • Money-back protection
          </p>
        </section>

        {/* ================= SOCIAL PROOF ================= */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold">
            Fans are already connecting
          </h2>

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
                text: "Tell them exactly what you want — video, call, shoutout, or advice.",
              },
              {
                step: "3",
                title: "Get your response",
                text: "Creators deliver personally — or your payment is refunded.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8"
              >
                <span className="text-sm font-semibold text-purple-400">
                  STEP {item.step}
                </span>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="rounded-3xl bg-gradient-to-br from-purple-600/20 to-violet-600/10 border border-white/10 p-16 text-center space-y-6">
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
