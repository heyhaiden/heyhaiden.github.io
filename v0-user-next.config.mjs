/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Replace 'your-repo-name' with your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '/Personal-Site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Personal-Site/' : '',
  // This ensures the router is aware of the base path
  trailingSlash: true,
};

export default nextConfig;
