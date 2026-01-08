import Button from "@/components/Button";
import CreatorCard from "@/components/CreatorCard";
import { creators } from "@/lib/creators";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px" }}>
      {/* HERO */}
      <section style={{ display: "grid", gap: 48, marginBottom: 96 }}>
        <div>
          <div
            className="premium-gradient glow-effect"
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              marginBottom: 24,
            }}
          />

          <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>
            Where fans meet creators — directly.
          </h1>

          <p style={{ fontSize: 20, color: "#D1D5DB", marginBottom: 32 }}>
            Request personalized videos, 1:1 calls, shoutouts, and real interactions
            from creators you love.
          </p>

          <div style={{ display: "flex", gap: 16 }}>
            <Button href="/creators">Explore creators</Button>
            <a style={{ alignSelf: "center", color: "#A78BFA" }}>
              I’m a creator →
            </a>
          </div>

          <p style={{ marginTop: 16, fontSize: 14, color: "#9CA3AF" }}>
            Secure payments • Verified creators • No subscription required
          </p>
        </div>
      </section>

      {/* EXPLORE */}
      <section>
        <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 24 }}>
          Explore creators. Discover what’s possible.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {creators.map((creator) => (
            <CreatorCard key={creator.slug} creator={creator} />
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <Button>Show more creators</Button>
        </div>
      </section>
    </main>
  );
}
