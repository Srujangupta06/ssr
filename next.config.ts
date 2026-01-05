/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // tells Next.js to generate static HTML in out/
  reactStrictMode: true,
  images: {
    unoptimized: true, // disable image optimization
  },
}

module.exports = nextConfig
