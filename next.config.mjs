/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // For GitHub Pages
  basePath: '',
  // This ensures the router is aware of the base path
  trailingSlash: true,
}

export default nextConfig