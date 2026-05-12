/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {}, // ✅ must be an object, not a boolean
  },
  images: {
    domains: ["images.unsplash.com", "vercel.com"], // optional image domains
  },
  eslint: {
    ignoreDuringBuilds: true, // prevents ESLint errors from blocking deployment
  },
};

export default nextConfig;
