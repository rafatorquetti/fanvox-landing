export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-28 space-y-8">
      <h1 className="text-4xl font-bold">Cookie Policy</h1>

      <p className="text-gray-300">
        Fanvox uses cookies and similar technologies to ensure the platform
        functions correctly and to improve user experience.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. What Are Cookies</h2>
        <p className="text-gray-300">
          Cookies are small text files stored on your device that help websites
          remember preferences and usage patterns.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. How We Use Cookies</h2>
        <p className="text-gray-300">
          Cookies are used for authentication, security, and basic analytics.
          We do not use cookies for invasive tracking.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Managing Cookies</h2>
        <p className="text-gray-300">
          You can control or delete cookies through your browser settings.
          Disabling cookies may affect certain features of Fanvox.
        </p>
      </section>

      <p className="text-sm text-gray-400 pt-8">
        Last updated: January 2026
      </p>
    </main>
  );
}
