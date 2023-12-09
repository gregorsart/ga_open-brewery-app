/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.openbrewerydb.org",
      },
    ],
  },
};

module.exports = nextConfig;
