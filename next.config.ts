import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Replace 'your-old-domain.com' with your actual old domain
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'https://paintball-seven.vercel.app/',
          },
        ],
        destination: 'https://gromzone.com/:path*',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
