import { creators } from "@/lib/creators";
import CreatorCard from "@/components/CreatorCard";
import { getTranslations } from "next-intl/server";

export default async function CreatorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "CreatorsPage",
  });

  return (
    <main className="mx-auto max-w-7xl px-6 py-28 space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">{t("title")}</h1>

        <p className="text-gray-300 max-w-2xl">
          {t("subtitle")}
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {creators.map((creator) => (
          <CreatorCard
            key={creator.slug}
            creator={creator}
            locale={locale}
          />
        ))}
      </section>
    </main>
  );
}