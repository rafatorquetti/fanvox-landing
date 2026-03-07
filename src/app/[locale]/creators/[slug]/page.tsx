import { notFound } from "next/navigation";
import { creators } from "@/lib/creators";
import StickyAccessCTA from "@/components/StickyAccessCTA";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

function getIndustryRequests(category: string, t: any) {
  switch (category) {
    case "Sports":
      return [t("industry.sports.req1"), t("industry.sports.req2")];

    case "Business":
      return [t("industry.business.req1"), t("industry.business.req2")];

    case "Venture":
      return [t("industry.venture.req1"), t("industry.venture.req2")];

    case "Science":
      return [t("industry.science.req1"), t("industry.science.req2")];

    case "Arts":
      return [t("industry.arts.req1"), t("industry.arts.req2")];

    default:
      return [t("industry.default.req1"), t("industry.default.req2")];
  }
}

export default async function CreatorProfilePage({ params }: PageProps) {
  const { slug, locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Creator",
  });

  const creator = creators.find((c) => c.slug === slug);
  if (!creator) notFound();

  const industryRequests = getIndustryRequests(creator.category, t);

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 md:py-28 space-y-14 md:space-y-16 pb-28">

      {/* HERO */}
      <section className="relative">

        <div className="relative h-[210px] sm:h-[300px] md:h-[420px] rounded-3xl overflow-hidden">
          <img
            src={creator.cover}
            alt={creator.name}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#070B14]" />

          <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-0 right-0 px-6">
            <div className="hidden md:block pl-[260px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {creator.name}
              </h1>
            </div>
          </div>
        </div>

        {/* avatar */}
        <div className="absolute left-0 sm:left-2 md:left-4 bottom-0 translate-y-1/2 z-20">
          <div className="relative flex items-center">

            <div className="h-24 w-24 sm:h-36 sm:w-36 md:h-56 md:w-56 rounded-full overflow-hidden border-4 border-purple-500 bg-black shadow-2xl">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="h-full w-full object-cover"
              />
            </div>

            <h1 className="md:hidden ml-4 text-2xl font-bold text-white leading-tight relative top-[6px]">
              {creator.name}
            </h1>

          </div>
        </div>

      </section>


      {/* BELOW HERO */}
      <section className="pt-2 pl-0 sm:pl-[170px] md:pl-[260px] space-y-5">

        {/* CATEGORY */}
        <span className="inline-block rounded-full border border-purple-400/30 px-4 py-1.5 text-sm text-purple-300">
          {t(`categories.${creator.category}`)}
        </span>

        {/* SHORT BIO — TRANSLATED */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
          {t(`descriptions.${creator.slug}`)}
        </p>

        {/* EXTENDED BIO */}
        <p className="text-gray-400 max-w-2xl leading-relaxed">
          {t("extendedBio")}
        </p>

        {/* STATS */}
        <div className="flex flex-wrap gap-6 sm:gap-8 text-sm text-gray-400">

          <div>
            <span className="text-yellow-400 font-semibold">
              ★ {creator.rating}
            </span>{" "}
            ({creator.reviews} {t("reviews")})
          </div>

          <div>
            {creator.interactions} {t("completedRequests")}
          </div>

          <div>
            {creator.responseTime} {t("avgResponse")}
          </div>

        </div>

      </section>


      {/* REQUESTS */}
      <section className="space-y-8">

        <h2 className="text-2xl font-semibold text-white">
          {t("popularRequests")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            t("reqVideo"),
            t("reqCall"),
            t("reqWritten"),
            ...industryRequests,
          ].map((item, i) => (

            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 hover:border-white/20 transition"
            >
              <p className="text-gray-300">
                {item}
              </p>
            </div>

          ))}

        </div>

      </section>


      {/* scarcity */}
      <div className="text-sm text-purple-400">
        {t("limitedAvailability")}
      </div>


      {/* CTA */}
      <StickyAccessCTA creatorName={creator.name} />

    </main>
  );
}