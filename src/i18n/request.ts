import { getRequestConfig } from "next-intl/server";

const locales = ["en", "pt-BR"] as const;
const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  // ✅ HARD GUARD against undefined
  const resolvedLocale =
    locale && locales.includes(locale as any)
      ? locale
      : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});