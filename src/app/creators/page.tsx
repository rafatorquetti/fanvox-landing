import CreatorCard from "@/components/CreatorCard";
import Footer from "@/components/Footer";
import { creators } from "@/lib/creators";
import Link from "next/link";

export default function CreatorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mx-auto max-w-7xl px-6 py-20 space-y-10">
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Explore creators
          </h1>
          <p className="max-w-2xl text-lg text-gray-300">
            Browse verified creators and request personalized interactions — video, calls, or written replies.
          </p>
          <div className="text-sm text-gray-400">
            Verified creators • Secure payments • Money-back protection
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {creators.map((creator) => (
            <CreatorCard key={creator.slug} creator={creator as any} />
          ))}
        </div>

        <div className="pt-8 text-sm text-gray-400">
          Looking to offer services?{" "}
          <Link href="/dashboard" className="text-purple-400 hover:underline">
            I’m a creator
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
