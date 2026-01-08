import Button from "@/components/Button";
import CreatorCard from "@/components/CreatorCard";
import { creators } from "@/lib/creators";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mx-auto max-w-7xl px-6 py-28 space-y-36">
        {/* ================= HERO ================= */}
        <section className="relative space-y-10">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

          <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg" />

          <h1 className="relative max-w-4xl text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Where fans connect
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              directly
            </span>{" "}
            with creators.
          </h1>

          <p className="relative max-w-2xl text-xl md:text-2xl text-gray-300">
            Request personalized videos, 1:1 calls, shoutouts, and real interactions
            from creators you love — all in one place.
          </p>

          <div className="relative flex flex-wrap items-center gap-6 pt-6">
            <Button href="/creators">Explore creators</Button>
            <span className="text-purple-400 cursor-pointer hover:underline">
              I’m a creator →
            </span>
          </div>

          <p className="relative text-sm text-gray-400">
            Secure payments • Verified creators • No subscription required
          </p>
        </section>

        {/* ================= EXPLORE ================= */}
        <section className="space-y-12">
          <h2 className="text-4xl font-bold">
            Explore creators. Discover what’s possible.
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {creators.map((creator) => (
              <CreatorCard key={creator.slug} creator={creator} />
            ))}
          </div>

          <div className="text-center pt-6">
            <Button>Show more creators</Button>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="space-y-14">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">How it works</h2>
            <p className="max-w-2xl text-lg text-gray-300">
              A simple, secure way to connect with creators — no subscriptions, no surprises.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "STEP 1",
                title: "Choose a creator",
                text: "Browse verified creators across categories and find the perfect match.",
              },
              {
                step: "STEP 2",
                title: "Send your request",
                text: "Tell them exactly what you want — video, call, shoutout, or advice.",
              },
              {
                step: "STEP 3",
                title: "Get a response",
                text: "The creator delivers — or your payment is protected.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8"
              >
                <span className="text-sm font-semibold text-purple-400">
                  {item.step}
                </span>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TRUST BLOCK ================= */}
        <section className="space-y-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold">Built on trust</h2>
            <p className="text-lg text-gray-300">
              Fanvox is designed to protect both fans and creators — every step of the way.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Verified creators",
                text: "Every creator is reviewed and approved before joining Fanvox.",
              },
              {
                title: "Secure payments",
                text: "All transactions are encrypted and handled by trusted payment providers.",
              },
              {
                title: "Delivery protection",
                text: "If a creator doesn’t deliver, your payment is protected.",
              },
              {
                title: "No subscriptions",
                text: "Pay per request. No monthly fees. No lock-ins.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="rounded-3xl bg-gradient-to-br from-purple-600/20 to-violet-600/10 border border-white/10 p-16 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to connect with a creator?
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Browse creators, send a request, and get a personalized response —
            all without subscriptions or commitments.
          </p>

          <div className="pt-6">
            <Button href="/creators">Explore creators</Button>
          </div>

          <p className="text-sm text-gray-400">
            Pay per request • Secure checkout • Money-back protection
          </p>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600" />
            <p className="text-sm text-gray-400 max-w-xs">
              Fanvox is a marketplace for personalized creator interactions —
              built for fans and creators alike.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Browse creators</li>
              <li>For fans</li>
              <li>For creators</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Transparency</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Fanvox, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
