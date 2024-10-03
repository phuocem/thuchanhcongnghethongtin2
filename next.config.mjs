/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      
      {
        source: '/hello',
        destination: '/api/hello',
      }
      
    ];
  },
};

export default nextConfig;
