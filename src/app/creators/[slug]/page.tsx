import { notFound } from "next/navigation";
import { getCreatorBySlug } from "@/lib/creators";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CreatorProfilePage({ params }: PageProps) {
  const { slug } = await params;

  const creator = getCreatorBySlug(slug);

  if (!creator) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-2">{creator.name}</h1>
      <p className="text-white/70 mb-6">{creator.category}</p>

      {/* Stats */}
      <div className="flex gap-6 text-sm text-white/60 mb-8">
        <span>⭐ {creator.rating}</span>
        <span>{creator.reviews} reviews</span>
        <span>{creator.interactions} interactions</span>
      </div>

      {/* Bio */}
      <p className="text-lg text-white/80 mb-10">{creator.bio}</p>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What you can request
        </h2>
        <ul className="space-y-2 text-white/80">
          {creator.services.map((service) => (
            <li key={service}>• {service}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <button className="premium-gradient px-6 py-3 rounded-lg font-medium">
        Request a personalized video
      </button>

      <p className="mt-3 text-sm text-white/50">
        Secure payment • Creator confirms before delivery
      </p>
    </main>
  );
}
