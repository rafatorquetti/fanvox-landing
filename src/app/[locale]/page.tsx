import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import CreatorCard from "@/components/CreatorCard";
import { creators } from "@/lib/creators";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const titles = {
    en: "Fanvox — Personalized access to creators",
    pt: "Fanvox — Acesso personalizado a criadores",
  };

  const descriptions = {
    en: "Request personalized videos, calls, and messages directly from verified creators.",
    pt: "Solicite vídeos, chamadas e mensagens personalizadas diretamente de criadores verificados.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.en,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "Home" } as any);

  const featuredRole =
    locale === "pt" ? "Investidora • Ex-Uber" : "Venture Investor • Ex-Uber";

  const featuredSessions = locale === "pt" ? "520 sessões" : "520 sessions";

  return (
    <main className="relative z-10">
      {/* HERO */}
      <section className="px-6 pt-24 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
        <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          <div>
            <p className="mb-4 text-sm tracking-[0.2em] text-purple-300 uppercase">
              {t("heroBadge")}
            </p>

            <h1 className="max-w-3xl text-3xl sm:text-5xl font-bold text-white leading-[1.08]">
              {t("heroTitle1")} <br />
              <span className="text-purple-400">{t("heroTitleHighlight")}</span>
            </h1>

            <p className="mt-6 max-w-xl text-xl text-gray-300">
              {t("heroSubtitle")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href={`/${locale}/creators`}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.45)] md:shadow-none hover:scale-[1.02] transition"
              >
                {t("browseCreators")}
              </Link>

              <Link
                href={`/${locale}/for-creators`}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                {t("creatorCta")}{" "}
                <span className="underline underline-offset-4">
                  {t("learnMore")}
                </span>
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-400">{t("trustLine")}</p>
          </div>

          {/* MOBILE HERO CARD */}
          <div className="lg:hidden mt-10">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute -inset-6 bg-purple-600/20 blur-[90px] rounded-full"></div>

              <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop"
                  alt="Featured Creator"
                  className="h-[360px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 p-6 w-full">
                  <p className="text-xs tracking-widest text-purple-300 uppercase mb-2">
                    {t("selectLabel")}
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    Adrian Volkov
                  </h3>

                  <p className="text-gray-300 text-sm mb-3">
                    {featuredRole}
                  </p>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-yellow-400">★ 4.9</span>
                    <span className="opacity-70">(184)</span>
                    <span className="opacity-70">•</span>
                    <span>{featuredSessions}</span>
                    <span className="opacity-70">•</span>
                    <span>~3h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP HERO VISUAL */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-[420px] group">
              <div className="absolute -inset-10 bg-purple-600/5 blur-[120px] rounded-full transition duration-500 group-hover:bg-purple-600/10" />

              <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-[0_25px_60px_rgba(124,58,237,0.25)]">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop"
                  alt="Featured Creator"
                  className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <p className="text-xs tracking-widest text-purple-300 uppercase mb-2">
                    {t("selectLabel")}
                  </p>

                  <h3 className="text-2xl font-semibold text-white">
                    Adrian Volkov
                  </h3>

                  <p className="text-gray-300 text-sm mb-3">
                    {featuredRole}
                  </p>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-yellow-400">★ 4.9</span>
                    <span className="opacity-70">(184)</span>
                    <span className="opacity-70">•</span>
                    <span>{featuredSessions}</span>
                    <span className="opacity-70">•</span>
                    <span>~3h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATOR GRID */}
      <section id="creators" className="px-6 pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12">
            <p className="text-purple-400 text-sm tracking-widest mb-3">
              {t("selectLabel")}
            </p>

            <h2 className="text-3xl sm:text-4xl font-semibold text-white max-w-3xl leading-tight">
              {t("creatorsTitle")}
            </h2>
          </div>

          {/* MOBILE CAROUSEL */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:hidden">
            {creators.map((creator) => (
              <div key={creator.slug} className="snap-start shrink-0 w-[85%]">
                <CreatorCard
                  creator={creator}
                  locale={locale}
                />
              </div>
            ))}
          </div>

          {/* ORIGINAL GRID (UNCHANGED) */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      <section className="px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight mb-6 max-w-3xl mx-auto">
            {t("closerTitle")}
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("closerSubtitle")}
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="px-6 py-20 sm:py-24 lg:py-28 overflow-hidden"
      >
        <div className="mx-auto w-full max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
            {t("stepsTitle")}
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            {t("stepsSubtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
            {[
              {
                number: "1",
                title: t("steps.explore.title"),
                desc: t("steps.explore.description"),
              },
              {
                number: "2",
                title: t("steps.request.title"),
                desc: t("steps.request.description"),
              },
              {
                number: "3",
                title: t("steps.receive.title"),
                desc: t("steps.receive.description"),
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 sm:p-10 text-left transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] hover:-translate-y-1"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/0 via-transparent to-indigo-600/0 group-hover:from-purple-600/10 group-hover:to-indigo-600/10 transition" />

                <div className="relative text-5xl font-black text-white/10 mb-6">
                  {step.number}
                </div>

                <h3 className="relative text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="relative mt-3 text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl text-center">
          <p className="text-gray-400 mb-12">{t("trustedBy")}</p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:flex-nowrap lg:justify-between w-full opacity-70">
            {["forbes", "techcrunch", "bloomberg", "wired", "yahoo"].map(
              (logo) => (
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
              )
            )}
          </div>
        </div>
      </section>

      {/* REAL REQUESTS */}
      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              {t("realTitle")}
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              {t("realSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t("real.card1.title"),
                detail: t("real.card1.subtitle"),
                time: t("real.card1.time"),
              },
              {
                title: t("real.card2.title"),
                detail: t("real.card2.subtitle"),
                time: t("real.card2.time"),
              },
              {
                title: t("real.card3.title"),
                detail: t("real.card3.subtitle"),
                time: t("real.card3.time"),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 hover:border-white/20 hover:shadow-xl transition"
              >
                <p className="text-white font-medium mb-3">{item.title}</p>
                <p className="text-gray-400 text-sm mb-6">{item.detail}</p>
                <p className="text-xs text-purple-300 tracking-wide">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR CREATORS */}
      <section
        id="for-creators"
        className="px-6 pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32"
      >
        <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/5 bg-gradient-to-br from-indigo-950 via-black to-purple-950 p-8 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                {t("creatorRevenueTitle")}
              </h2>

              <p className="text-gray-300 mb-10 max-w-lg">
                {t("creatorRevenueSubtitle")}
              </p>

              <a
  href="https://app.fanvox.co/home"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-white font-semibold shadow-lg hover:scale-[1.03] transition"
>
  {t("startEarning")}
</a>

              <p className="text-gray-500 text-sm mt-6">{t("noExclusivity")}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                ["$2.4k", t("creatorStats.income")],
                ["48h", t("creatorStats.fulfillment")],
                ["85%", t("creatorStats.revenueShare")],
                ["Global", t("creatorStats.fans")],
              ].map(([title, subtitle], i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/5 bg-white/[0.04] p-6 backdrop-blur-xl hover:border-white/20 transition"
                >
                  <p className="text-3xl font-semibold text-white mb-2">
                    {title}
                  </p>
                  <p className="text-gray-400 text-sm">{subtitle}</p>
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