import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts' // ✅ CRITICAL LINK
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Prevent Vercel build from failing due to ESLint rules
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default withNextIntl(nextConfig);