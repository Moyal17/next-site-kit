/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "github-assets-site.s3.eu-central-1.amazonaws.com" // images domain
    ]
  }
}

module.exports = nextConfig
