import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts' // ✅ CRITICAL LINK
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

export default withNextIntl(nextConfig);