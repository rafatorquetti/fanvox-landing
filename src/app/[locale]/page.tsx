import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import CreatorCard from "@/components/CreatorCard";
import { creators } from "@/lib/creators";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="relative z-10">

      {/* HERO */}
      <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">

          <div>
            <p className="mb-4 text-sm tracking-[0.2em] text-purple-300 uppercase">
              The marketplace for meaningful access to exceptional people
            </p>

            <h1 className="max-w-3xl text-3xl sm:text-5xl font-bold text-white leading-[1.08]">
              Access the people <br />
              <span className="text-purple-400">
                shaping what&apos;s next
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-xl text-gray-300">
              Request personalized videos, calls, or messages —
              delivered directly by verified creators, on your terms.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href={`/${locale}/creators`}
                className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-8 py-4 text-base font-semibold text-white hover:bg-purple-500 transition"
              >
                Browse creators
              </Link>

              <Link
                href={`/${locale}/for-creators`}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Are you a creator?{" "}
                <span className="underline underline-offset-4">
                  Learn more
                </span>
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-400">
              No subscriptions • Stripe Payments • Money-back protection
            </p>
          </div>

          {/* MOBILE HERO VISUAL */}
          <div className="lg:hidden mt-10">
            <div className="relative w-full max-w-sm mx-auto">

              <div className="absolute -inset-6 bg-purple-600/10 blur-[80px] rounded-full" />

              <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-xl shadow-2xl">

                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop"
                  alt="Featured Creator"
                  className="h-[340px] w-full object-cover"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <p className="text-xs tracking-widest text-purple-300 uppercase mb-2">
                    Fanvox Select
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    Adrian Volkov
                  </h3>

                  <p className="text-gray-300 text-sm">
                    Venture Investor • Ex-Uber
                  </p>

                  <p className="mt-2 text-sm text-gray-200 max-w-xs">
    Ask me about startups, capital, and scaling companies.
  </p>

  <div className="mt-3 flex items-center gap-2 text-sm">
    <span className="text-yellow-400">★★★★★</span>
    <span className="text-gray-300">(2,184 requests)</span>
  </div>

                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP HERO */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-[420px]">

              <div className="absolute -inset-10 bg-purple-600/10 blur-[120px] rounded-full"></div>

              <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-xl shadow-2xl">

                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop"
                  alt="Featured Creator"
                  className="h-[520px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 p-8">
                  <p className="text-xs tracking-widest text-purple-300 uppercase mb-2">
                    Fanvox Select
                  </p>

                  <h3 className="text-2xl font-semibold text-white">
                    Adrian Volkov
                  </h3>

                  <p className="text-gray-300 text-sm">
                    Venture Investor • Ex-Uber
                  </p>

                  <p className="mt-3 text-sm text-gray-200 max-w-sm">
                    Ask me about startups, capital, and scaling companies.
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-gray-300">(2,184 requests)</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CREATOR GRID */}
      <section className="px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto w-full max-w-6xl">

          <div className="mb-16">
            <p className="text-purple-400 text-sm tracking-widest mb-3">
              FANVOX SELECT
            </p>

            <h2 className="text-3xl sm:text-4xl font-semibold text-white max-w-3xl leading-tight">
              Creators everyone is talking about
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {creators.map((creator) => (
              <CreatorCard
                key={creator.slug}
                creator={creator}
                locale={locale}
              />
            ))}
          </div>

        </div>
      </section>

      {/* TRANSITION */}
      <section className="px-6 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Closer than ever to the people who inspire you.
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No agents. No noise. No friction.  
            Just direct access to the people you admire.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="mx-auto w-full max-w-6xl text-center">

          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6">
            Personal access in three simple steps
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-24">
            No subscriptions. No middlemen. Just direct, meaningful interaction.
          </p>

          <div className="grid md:grid-cols-3 gap-12 sm:gap-16 lg:gap-20">
            {[
              {
                number: "1",
                title: "Explore",
                desc: "Discover athletes, founders, artists, and experts available for personalized interactions."
              },
              {
                number: "2",
                title: "Request",
                desc: "Ask for a video, private call, mentoring session, or custom message — directly from them."
              },
              {
                number: "3",
                title: "Receive",
                desc: "Get your personalized experience delivered securely."
              }
            ].map((step, i) => (
              <div key={i} className="relative group text-left min-h-[260px] flex items-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[240px] font-black bg-gradient-to-b from-white via-purple-200 to-indigo-400 bg-clip-text text-transparent opacity-20 drop-shadow-[0_20px_60px_rgba(168,85,247,0.25)] group-hover:opacity-35 transition duration-500">
                    {step.number}
                  </span>
                </div>

                <div className="relative z-10 space-y-4 max-w-sm">
                  <h3 className="text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TRUST BAR */}
      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-6xl text-center">

          <p className="text-gray-400 mb-12">
            Trusted by world-class creators
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:flex-nowrap lg:justify-between w-full opacity-70">
            {["forbes","techcrunch","bloomberg","wired","yahoo"].map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center transition duration-300 hover:opacity-100 hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.6)]"
              >
                <Image
                  src={`/logos/${logo}.svg`}
                  alt={logo}
                  width={130}
                  height={40}
                  className="h-7 w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REAL REQUESTS */}
      <section className="px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto w-full max-w-6xl">

          <div className="mb-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Real requests. Real moments.
            </h2>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Meaningful access happening right now.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Birthday video delivered",
                detail: "Personalized message sent from London",
                time: "2 min ago"
              },
              {
                title: "Startup pitch reviewed",
                detail: "Founder received feedback from a VC",
                time: "just now"
              },
              {
                title: "Private strategy call completed",
                detail: "30-minute session with an elite operator",
                time: "9 min ago"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 hover:border-white/20 hover:shadow-xl transition"
              >
                <p className="text-white font-medium mb-3">
                  {item.title}
                </p>

                <p className="text-gray-400 text-sm mb-6">
                  {item.detail}
                </p>

                <p className="text-xs text-purple-300 tracking-wide">
                  {item.time}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOR CREATORS */}
      <section className="px-6 pt-24 pb-28 sm:pt-28 sm:pb-36 lg:pt-32 lg:pb-40">
        <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/5 bg-gradient-to-br from-indigo-950 via-black to-purple-950 p-8 sm:p-12 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-6 leading-tight">
                Turn your audience into a meaningful revenue stream.
              </h2>

              <p className="text-gray-300 mb-10 max-w-lg">
                Fans are already seeking meaningful access. Fanvox handles the
                requests, payments, and delivery — so you can focus on creating
                unforgettable experiences.
              </p>

              <Link
                href="/for-creators"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-white font-semibold shadow-lg hover:scale-[1.03] transition"
              >
                Start earning
              </Link>

              <p className="text-gray-500 text-sm mt-6">
                No exclusivity • Set your own prices
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                ["$2.4k", "Avg. monthly creator income"],
                ["48h", "Typical fulfillment time"],
                ["85%", "Creator revenue share"],
                ["Global", "Fans ready to book you"],
              ].map(([title, subtitle], i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/5 bg-white/[0.04] p-6 backdrop-blur-xl hover:border-white/20 transition"
                >
                  <p className="text-3xl font-semibold text-white mb-2">
                    {title}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}