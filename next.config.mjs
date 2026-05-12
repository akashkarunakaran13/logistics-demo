/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {}, // ✅ must be an object, not a boolean
  },
  images: {
    domains: ["images.unsplash.com", "vercel.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
