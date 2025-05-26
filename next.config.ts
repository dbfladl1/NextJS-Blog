import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
}); 
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withAnalyzer(withNextIntl(nextConfig));