const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPreact = require("next-plugin-preact");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: false,
  staticPageGenerationTimeout: 300,
  devIndicators: {
    autoPrerender: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    outputStandalone: true,
    concurrentFeatures: true,
  },
  images: {
    domains: ["media.graphassets.com", "media.graphcms.com"],
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withPreact(nextConfig);
// module.exports = withBundleAnalyzer(nextConfig);
