/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {}, // must be an object, not a boolean
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
