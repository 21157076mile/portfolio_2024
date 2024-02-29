/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webVitalsAttribution: ["CLS", "LCP"]
  },
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
