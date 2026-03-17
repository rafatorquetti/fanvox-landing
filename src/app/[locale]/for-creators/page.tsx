import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function CreatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ForCreators" });

  return (
    <main className="relative z-10">

      {/* HERO */}
      <section className="px-6 pt-28 pb-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              {t("heroTitle1")}
              <span className="text-purple-400">{t("heroTitleHighlight")}</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              {t("heroSubtitle")}
            </p>

            <div className="mt-8 flex gap-6 items-center">

              <a
                href="https://fanvox-afee07ed.base44.app/home"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.45)] hover:scale-[1.02] transition"
              >
                {t("startEarning")}
              </a>

              <Link
                href={`/${locale}`}
                className="text-gray-400 hover:text-white transition underline underline-offset-4"
              >
                {t("backToHomepage")}
              </Link>

            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative">
            <div className="absolute -inset-12 bg-purple-600/20 blur-[120px] rounded-full"></div>

            <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-10">

              <p className="text-sm text-purple-300 mb-3 uppercase tracking-widest">
                {t("heroCardLabel")}
              </p>

              <h3 className="text-xl font-semibold text-white">
                {t("heroCardTitle")}
              </h3>

              <p className="text-gray-400 mt-2">
                {t("heroCardSubtitle")}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-purple-300 font-semibold">
                  {t("heroCardPrice")}
                </span>
                <span className="text-gray-400 text-sm">
                  {t("heroCardDelivery")}
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* BENEFITS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            {t("benefitsTitle")}
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            {t("benefitsSubtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-12 mt-16">

            <div>
              <h3 className="text-xl text-white font-semibold">
                {t("benefits.monetize.title")}
              </h3>
              <p className="mt-3 text-gray-400">
                {t("benefits.monetize.description")}
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white font-semibold">
                {t("benefits.schedule.title")}
              </h3>
              <p className="mt-3 text-gray-400">
                {t("benefits.schedule.description")}
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white font-semibold">
                {t("benefits.global.title")}
              </h3>
              <p className="mt-3 text-gray-400">
                {t("benefits.global.description")}
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* WHO THIS IS FOR */}
      <section className="px-6 py-24 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            {t("perfectForTitle")}
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            {t("perfectForSubtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            {["entrepreneurs","athletes","scientists","artists","investors","creators"].map((key) => (
              <div key={key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="text-white font-semibold text-lg">
                  {t(`perfectFor.${key}.title`)}
                </h3>
                <p className="text-gray-400 mt-2">
                  {t(`perfectFor.${key}.description`)}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            {t("howItWorksTitle")}
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-16">

            {[1,2,3].map((step) => (
              <div key={step}>
                <div className="text-purple-400 text-4xl font-bold">{step}</div>
                <h3 className="text-white text-xl font-semibold mt-4">
                  {t(`howItWorks.step${step}.title`)}
                </h3>
                <p className="text-gray-400 mt-2">
                  {t(`howItWorks.step${step}.description`)}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="px-6 py-28 text-center">

        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          {t("finalTitle")}
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          {t("finalSubtitle")}
        </p>

        <div className="mt-10">

          <a
            href="https://fanvox-afee07ed.base44.app/home"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-10 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.45)] hover:scale-[1.03] transition"
          >
            {t("applyAsCreator")}
          </a>

        </div>

        <p className="text-gray-500 text-sm mt-6">
          {t("finalNote")}
        </p>

      </section>

    </main>
  );
}