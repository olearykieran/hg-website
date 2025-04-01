/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    domains: ['localhost'],
  },
};

export default nextConfig;
