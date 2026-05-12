/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: true, // enables Turbopack for faster builds
  },
  images: {
    domains: ["images.unsplash.com", "vercel.com"], // add any external image domains you use
  },
  eslint: {
    ignoreDuringBuilds: true, // prevents ESLint errors from blocking deployment
  },
};

export default nextConfig;
