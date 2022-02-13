/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.jetphotos.com","hatscripts.github.io","cdn.planespotters.net","upload.wikimedia.org"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
