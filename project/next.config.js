/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable image optimization (useful if you’re deploying to a platform that doesn't support it natively)
  images: {
    unoptimized: true,
  },

  // Optional: suppress build errors from missing static exports or other strict checks
  staticPageGenerationTimeout: 60, // Increase timeout if needed

  // Optional: You can use swcMinify to reduce errors with unsupported features
  swcMinify: true,

  // Optional: React strict mode (turn off if you want to suppress some warnings, not recommended though)
  reactStrictMode: false,
};

module.exports = nextConfig;
