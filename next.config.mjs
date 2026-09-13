import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'standalone',
  serverExternalPackages: ['@takumi-rs/image-response'],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs/intro',
        destination: '/docs',
        permanent: true,
      },
      {
        source: '/docs/how-to/networking/internal-networking',
        destination: '/docs/how-to/networking',
        permanent: true,
      },
      {
        source: '/docs/how-to/networking/network-policies',
        destination: '/docs/how-to/networking',
        permanent: true,
      },
      {
        source: '/docs/how-to/networking/project-network-graph',
        destination: '/docs/how-to/networking#project-network-graph',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
    ];
  },
};

export default withMDX(config);
